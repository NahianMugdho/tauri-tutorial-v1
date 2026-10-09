// প্রজেক্ট ৪ — React + Tauri + MySQL: সিকিউর Task Manager
// JWT (access+refresh), token limit, 2FA (TOTP), API cache, argon2
const project = {
  slug: "secure-tasks-mysql",
  no: 4,
  title: "Secure Task Manager — MySQL",
  level: "অ্যাডভান্সড",
  stack: ["Tauri v2", "React", "Rust + sqlx", "MySQL", "argon2", "JWT", "TOTP 2FA", "moka cache"],
  widget: "security",
  intro:
    "এখানে Rust backend ই তোমার 'server'। পাসওয়ার্ড argon2 দিয়ে hash হয়, লগইনের পর access token (১৫ মিনিট) ও refresh token (৭ দিন) তৈরি হয়, ভুল পাসওয়ার্ড বারবার দিলে rate limit ধরে, 2FA চালু থাকলে TOTP কোড লাগে, আর Task লিস্ট cache হয়। একটা বড় সুবিধা: refresh token কখনো JS এ যায় না, Rust এর memory তে থাকে।",
  steps: [
    { title: "MySQL ডেটাবেস ও টেবিল", desc: "schema.sql চালিয়ে users, refresh_tokens, tasks টেবিল বানাও।" },
    { title: ".env ও Cargo.toml", desc: "DATABASE_URL, JWT_SECRET এবং dependency (sqlx, argon2, jsonwebtoken, totp-rs, moka)।" },
    { title: "state.rs", desc: "DB pool, cache, rate-limit map, refresh token রাখার জায়গা — এক struct এ।" },
    { title: "security/ মডিউল", desc: "password.rs (argon2), jwt.rs, totp.rs, rate_limit.rs।" },
    { title: "commands/auth.rs", desc: "register, login, verify_2fa, refresh_session, logout, enable_2fa।" },
    { title: "commands/tasks.rs", desc: "access token যাচাই + cache সহ list_tasks, add_task।" },
    { title: "lib.rs এ জোড়া", desc: "setup এ DB connect, state manage, handler register।" },
    { title: "React: secureInvoke, AuthContext", desc: "401-এর মতো 'token expired' এলে স্বয়ংক্রিয় refresh।" },
    { title: "React: Login/2FA ও Dashboard", desc: "UI পেজ।" },
  ],
  setupCommands: [
    "# MySQL চালু থাকতে হবে (XAMPP/MySQL Server)",
    "mysql -u root -p < schema.sql",
    "npm create tauri-app@latest   # secure-tasks, React, JavaScript",
    "cd secure-tasks && npm install",
    "# src-tauri/Cargo.toml এ dependency বসিয়ে:",
    "npm run tauri dev",
  ],
  files: [
    {
      n: 1,
      path: "schema.sql",
      lang: "sql",
      side: "Database",
      role: "MySQL এর তিনটা টেবিল। password_hash এ কখনো আসল পাসওয়ার্ড নয়।",
      why: "ডেটার কাঠামো আগে ঠিক করলে Rust এর query লেখা সহজ।",
      code: `-- schema.sql
CREATE DATABASE IF NOT EXISTS tauri_app CHARACTER SET utf8mb4;
USE tauri_app;

CREATE TABLE users (
  id            BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  email         VARCHAR(190) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,        -- argon2id hash (salt সহ)
  totp_secret   VARCHAR(64) NULL,             -- 2FA secret (base32)
  totp_enabled  TINYINT(1) NOT NULL DEFAULT 0 -- 2FA চালু কিনা
);

-- refresh token এর আসল মান রাখি না, শুধু SHA-256 hash
CREATE TABLE refresh_tokens (
  id         BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  token_hash CHAR(64) NOT NULL UNIQUE,
  user_id    BIGINT UNSIGNED NOT NULL,
  expires_at DATETIME NOT NULL,
  revoked    TINYINT(1) NOT NULL DEFAULT 0,   -- ব্যবহৃত/বাতিল হলে 1
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE tasks (
  id      BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT UNSIGNED NOT NULL,
  title   VARCHAR(255) NOT NULL,
  done    TINYINT(1) NOT NULL DEFAULT 0,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);`,
    },
    {
      n: 2,
      path: "src-tauri/.env  +  Cargo.toml (dependencies অংশ)",
      lang: "toml",
      side: "Config",
      role: "secret গুলো .env তে, crate গুলো Cargo.toml এ।",
      why: ".env কখনো git এ তুলবে না (.gitignore এ দাও)। JWT_SECRET কমপক্ষে ৩২ অক্ষর, এলোমেলো।",
      code: `# ---- src-tauri/.env ----
DATABASE_URL=mysql://root:password@127.0.0.1:3306/tauri_app
JWT_SECRET=এখানে-অন্তত-৩২-অক্ষরের-র‍্যান্ডম-স্ট্রিং-দাও-abc123XYZ

# ---- src-tauri/Cargo.toml  [dependencies] অংশে যোগ করো ----
tauri = { version = "2", features = [] }
serde = { version = "1", features = ["derive"] }
serde_json = "1"
sqlx = { version = "0.8", features = ["runtime-tokio", "mysql"] }  # MySQL ড্রাইভার
argon2 = "0.5"                                                     # পাসওয়ার্ড hash
jsonwebtoken = "9"                                                 # JWT
totp-rs = { version = "5", features = ["gen_secret", "otpauth"] }  # 2FA
moka = { version = "0.12", features = ["future"] }                 # in-memory cache
uuid = { version = "1", features = ["v4"] }
chrono = "0.4"
sha2 = "0.10"
hex = "0.4"
dotenvy = "0.15"                                                   # .env পড়া`,
    },
    {
      n: 3,
      path: "src-tauri/src/state.rs",
      lang: "rust",
      side: "Rust",
      role: "পুরো অ্যাপের shared state: DB, cache, rate limit, refresh token।",
      why: "সব command এই একটা struct থেকে সবকিছু পায়, তাই আগে এটা লিখি।",
      code: `// src-tauri/src/state.rs
use moka::future::Cache;
use serde::Serialize;
use sqlx::MySqlPool;
use std::{collections::HashMap, sync::Mutex, time::{Duration, Instant}};

// DB এর Task row; Clone লাগে কারণ cache এ কপি রাখি
#[derive(Serialize, sqlx::FromRow, Clone)]
pub struct Task {
    pub id: u64,
    pub title: String,
    pub done: bool,
}

pub struct AppState {
    pub db: MySqlPool,                                  // MySQL connection pool
    pub jwt_secret: String,                             // JWT sign করার গোপন key
    pub cache: Cache<String, Vec<Task>>,                // API cache: key = "tasks:<user_id>"
    pub attempts: Mutex<HashMap<String, Vec<Instant>>>, // rate limit: কে কখন চেষ্টা করল
    pub refresh_token: Mutex<Option<String>>,           // ★ refresh token JS এ যায় না, এখানে থাকে
}

impl AppState {
    pub fn new(db: MySqlPool, jwt_secret: String) -> Self {
        Self {
            db,
            jwt_secret,
            cache: Cache::builder()
                .time_to_live(Duration::from_secs(60)) // ৬০ সেকেন্ড পরে cache নিজে মুছে যায়
                .max_capacity(1000)
                .build(),
            attempts: Mutex::new(HashMap::new()),
            refresh_token: Mutex::new(None),
        }
    }
}`,
    },
    {
      n: 4,
      path: "src-tauri/src/security/password.rs",
      lang: "rust",
      side: "Rust",
      role: "argon2id দিয়ে পাসওয়ার্ড hash ও যাচাই।",
      why: "পাসওয়ার্ড কখনো plain text এ রাখা যাবে না। argon2 ইচ্ছা করে ধীর ও memory-hungry, তাই brute force কঠিন।",
      code: `// src-tauri/src/security/password.rs
use argon2::{
    password_hash::{rand_core::OsRng, PasswordHash, PasswordHasher, PasswordVerifier, SaltString},
    Argon2,
};

// রেজিস্টারে: plain password → hash string
pub fn hash_password(plain: &str) -> Result<String, String> {
    let salt = SaltString::generate(&mut OsRng); // প্রতিবার আলাদা random salt
    Argon2::default()                            // argon2id, ডিফল্ট cost
        .hash_password(plain.as_bytes(), &salt)
        .map(|h| h.to_string())                  // "$argon2id$v=19$m=...,t=...,p=...$salt$hash"
        .map_err(|e| e.to_string())
}

// লগইনে: ইনপুট পাসওয়ার্ড বনাম DB এর hash
pub fn verify_password(plain: &str, hash: &str) -> bool {
    match PasswordHash::new(hash) {
        Ok(parsed) => Argon2::default().verify_password(plain.as_bytes(), &parsed).is_ok(),
        Err(_) => false,
    }
}`,
    },
    {
      n: 5,
      path: "src-tauri/src/security/jwt.rs",
      lang: "rust",
      side: "Rust",
      role: "access/refresh token তৈরি ও যাচাই। মেয়াদ (TTL) এখানে ঠিক হয়।",
      why: "access token ছোট মেয়াদের (১৫ মিনিট) যাতে চুরি হলেও ক্ষতি সীমিত; refresh token লম্বা (৭ দিন) কিন্তু শুধু নতুন token আনার কাজে লাগে।",
      code: `// src-tauri/src/security/jwt.rs
use jsonwebtoken::{decode, encode, errors::ErrorKind, DecodingKey, EncodingKey, Header, Validation};
use serde::{Deserialize, Serialize};

pub const ACCESS_TTL_SECS: i64 = 15 * 60;          // access: ১৫ মিনিট
pub const REFRESH_TTL_SECS: i64 = 7 * 24 * 3600;   // refresh: ৭ দিন

#[derive(Serialize, Deserialize)]
pub struct Claims {
    pub sub: String,  // user id
    pub kind: String, // "access" | "refresh" | "2fa_pending"
    pub iat: usize,   // কখন তৈরি
    pub exp: usize,   // কখন মেয়াদ শেষ
    pub jti: String,  // token এর অনন্য id (প্রতিটা আলাদা)
}

pub fn make_token(user_id: &str, kind: &str, ttl: i64, secret: &str) -> Result<String, String> {
    let now = chrono::Utc::now().timestamp();
    let claims = Claims {
        sub: user_id.into(),
        kind: kind.into(),
        iat: now as usize,
        exp: (now + ttl) as usize,
        jti: uuid::Uuid::new_v4().to_string(),
    };
    encode(&Header::default(), &claims, &EncodingKey::from_secret(secret.as_bytes()))
        .map_err(|e| e.to_string())
}

pub fn verify_token(token: &str, kind: &str, secret: &str) -> Result<Claims, String> {
    let mut validation = Validation::default();
    validation.leeway = 0; // মেয়াদ শেষ মানে শেষ, বাড়তি সময় নয়
    let data = decode::<Claims>(token, &DecodingKey::from_secret(secret.as_bytes()), &validation)
        .map_err(|e| match e.kind() {
            // এই exact লেখা React দেখে refresh trigger করে
            ErrorKind::ExpiredSignature => "token expired".to_string(),
            _ => "invalid token".to_string(),
        })?;
    // access token দিয়ে refresh করা বা উল্টোটা ঠেকাও
    if data.claims.kind != kind {
        return Err("wrong token type".into());
    }
    Ok(data.claims)
}`,
    },
    {
      n: 6,
      path: "src-tauri/src/security/totp.rs",
      lang: "rust",
      side: "Rust",
      role: "2FA: Google Authenticator এর ৬ সংখ্যার কোড তৈরি ও যাচাই।",
      why: "পাসওয়ার্ড ফাঁস হলেও ফোনের কোড ছাড়া ঢোকা যাবে না।",
      code: `// src-tauri/src/security/totp.rs
use totp_rs::{Algorithm, Secret, TOTP};

// নতুন secret (base32 text) — ব্যবহারকারী QR/টেক্সট দিয়ে অ্যাপে বসায়
pub fn new_secret() -> String {
    Secret::generate_secret().to_encoded().to_string()
}

fn build(secret_b32: &str, email: &str) -> Result<TOTP, String> {
    let bytes = Secret::Encoded(secret_b32.to_string())
        .to_bytes()
        .map_err(|e| format!("{:?}", e))?;
    // SHA1, ৬ ডিজিট, ±১ ধাপ সহনশীলতা, ৩০ সেকেন্ড, issuer, account
    TOTP::new(Algorithm::SHA1, 6, 1, 30, bytes, Some("TauriApp".into()), email.into())
        .map_err(|e| e.to_string())
}

pub fn verify(secret_b32: &str, email: &str, code: &str) -> Result<bool, String> {
    build(secret_b32, email)?.check_current(code).map_err(|e| e.to_string())
}

// Authenticator অ্যাপে যোগ করার otpauth:// লিংক (QR বানানো যায়)
pub fn otpauth_url(secret_b32: &str, email: &str) -> Result<String, String> {
    Ok(build(secret_b32, email)?.get_url())
}`,
    },
    {
      n: 7,
      path: "src-tauri/src/security/rate_limit.rs + mod.rs",
      lang: "rust",
      side: "Rust",
      role: "Token/login limit: নির্দিষ্ট সময়ে সর্বোচ্চ কয়বার চেষ্টা করা যাবে।",
      why: "brute force ও 2FA কোড অনুমান ঠেকাতে। sliding window পদ্ধতি।",
      code: `// ---- src-tauri/src/security/rate_limit.rs ----
use std::{collections::HashMap, sync::Mutex, time::{Duration, Instant}};

// key = ইমেইল বা token-type, max = সর্বোচ্চ চেষ্টা, window = সময়সীমা
pub fn check(
    attempts: &Mutex<HashMap<String, Vec<Instant>>>,
    key: &str,
    max: usize,
    window: Duration,
) -> Result<(), String> {
    let mut map = attempts.lock().unwrap();
    let now = Instant::now();
    let list = map.entry(key.to_string()).or_default();

    // window এর বাইরের পুরনো চেষ্টা বাদ দাও
    list.retain(|t| now.duration_since(*t) < window);

    if list.len() >= max {
        return Err("অনেকবার চেষ্টা করেছ, কিছুক্ষণ পরে আবার চেষ্টা করো".into());
    }
    list.push(now); // এই চেষ্টা গুনে রাখো
    Ok(())
}

// ---- src-tauri/src/security/mod.rs ----
pub mod jwt;
pub mod password;
pub mod rate_limit;
pub mod totp;`,
    },
    {
      n: 8,
      path: "src-tauri/src/commands/auth.rs",
      lang: "rust",
      side: "Rust",
      role: "register, login, 2FA, refresh (rotation), logout — পুরো auth প্রবাহ।",
      why: "security ব্লকগুলো এখানে জোড়া লাগে। refresh করলে পুরনো refresh token বাতিল হয় (rotation); বাতিল token আবার এলে সব session বন্ধ।",
      code: `// src-tauri/src/commands/auth.rs
use crate::security::{jwt::*, password::*, rate_limit, totp};
use crate::state::AppState;
use serde::Serialize;
use sha2::{Digest, Sha256};
use std::time::Duration;
use tauri::State;

#[derive(Serialize)]
pub struct LoginResponse {
    pub status: String,               // "ok" | "2fa_required"
    pub access_token: Option<String>, // ok হলে
    pub temp_token: Option<String>,   // 2FA লাগলে (৫ মিনিটের)
}

fn sha256_hex(s: &str) -> String {
    hex::encode(Sha256::digest(s.as_bytes()))
}

// access + refresh বানাও; refresh এর hash DB তে, আসল মান Rust memory তে
async fn issue_session(state: &AppState, user_id: u64) -> Result<String, String> {
    let uid = user_id.to_string();
    let access = make_token(&uid, "access", ACCESS_TTL_SECS, &state.jwt_secret)?;
    let refresh = make_token(&uid, "refresh", REFRESH_TTL_SECS, &state.jwt_secret)?;

    sqlx::query(
        "INSERT INTO refresh_tokens (token_hash, user_id, expires_at)
         VALUES (?, ?, DATE_ADD(NOW(), INTERVAL ? SECOND))",
    )
    .bind(sha256_hex(&refresh))
    .bind(user_id)
    .bind(REFRESH_TTL_SECS)
    .execute(&state.db)
    .await
    .map_err(|e| e.to_string())?;

    *state.refresh_token.lock().unwrap() = Some(refresh); // JS কে দিচ্ছি না
    Ok(access) // শুধু access token JS এ যায়
}

#[tauri::command]
pub async fn register(state: State<'_, AppState>, email: String, password: String) -> Result<String, String> {
    if password.len() < 8 {
        return Err("পাসওয়ার্ড কমপক্ষে ৮ অক্ষর".into());
    }
    let hash = hash_password(&password)?; // argon2
    sqlx::query("INSERT INTO users (email, password_hash) VALUES (?, ?)")
        .bind(&email)
        .bind(&hash)
        .execute(&state.db)
        .await
        .map_err(|_| "এই ইমেইল আগেই আছে".to_string())?;
    Ok("registered".into())
}

#[tauri::command]
pub async fn login(state: State<'_, AppState>, email: String, password: String) -> Result<LoginResponse, String> {
    // ১) rate limit: ১ মিনিটে সর্বোচ্চ ৫ বার
    rate_limit::check(&state.attempts, &email, 5, Duration::from_secs(60))?;

    // ২) user খোঁজো
    let row: Option<(u64, String, bool)> =
        sqlx::query_as("SELECT id, password_hash, totp_enabled FROM users WHERE email = ?")
            .bind(&email)
            .fetch_optional(&state.db)
            .await
            .map_err(|e| e.to_string())?;
    // ইমেইল ভুল না পাসওয়ার্ড ভুল — একই বার্তা (তথ্য ফাঁস ঠেকাতে)
    let (id, hash, totp_enabled) = row.ok_or("ইমেইল বা পাসওয়ার্ড ভুল")?;

    // ৩) argon2 যাচাই
    if !verify_password(&password, &hash) {
        return Err("ইমেইল বা পাসওয়ার্ড ভুল".into());
    }

    // ৪) 2FA চালু থাকলে এখনই session নয়, আগে কোড
    if totp_enabled {
        let temp = make_token(&id.to_string(), "2fa_pending", 300, &state.jwt_secret)?;
        return Ok(LoginResponse { status: "2fa_required".into(), access_token: None, temp_token: Some(temp) });
    }

    let access = issue_session(&state, id).await?;
    Ok(LoginResponse { status: "ok".into(), access_token: Some(access), temp_token: None })
}

#[tauri::command]
pub async fn verify_2fa(state: State<'_, AppState>, temp_token: String, code: String) -> Result<String, String> {
    let claims = verify_token(&temp_token, "2fa_pending", &state.jwt_secret)?;
    // কোড অনুমান ঠেকাতে আলাদা limit: ১ মিনিটে ৫ বার
    rate_limit::check(&state.attempts, &format!("2fa:{}", claims.sub), 5, Duration::from_secs(60))?;

    let id: u64 = claims.sub.parse().map_err(|_| "invalid token".to_string())?;
    let (email, secret): (String, Option<String>) =
        sqlx::query_as("SELECT email, totp_secret FROM users WHERE id = ?")
            .bind(id)
            .fetch_one(&state.db)
            .await
            .map_err(|e| e.to_string())?;

    let secret = secret.ok_or("2FA সেট করা নেই")?;
    if !totp::verify(&secret, &email, &code)? {
        return Err("কোড ভুল".into());
    }
    issue_session(&state, id).await
}

// লগইন করা অবস্থায় 2FA চালুর প্রথম ধাপ: secret ও QR লিংক পাও
#[tauri::command]
pub async fn enable_2fa(state: State<'_, AppState>, access_token: String) -> Result<(String, String), String> {
    let claims = verify_token(&access_token, "access", &state.jwt_secret)?;
    let id: u64 = claims.sub.parse().map_err(|_| "invalid token".to_string())?;
    let email: (String,) = sqlx::query_as("SELECT email FROM users WHERE id = ?")
        .bind(id).fetch_one(&state.db).await.map_err(|e| e.to_string())?;

    let secret = totp::new_secret();
    sqlx::query("UPDATE users SET totp_secret = ? WHERE id = ?")
        .bind(&secret).bind(id).execute(&state.db).await.map_err(|e| e.to_string())?;
    Ok((secret.clone(), totp::otpauth_url(&secret, &email.0)?))
}

// দ্বিতীয় ধাপ: অ্যাপের কোড মিললে তবেই 2FA চালু
#[tauri::command]
pub async fn confirm_2fa(state: State<'_, AppState>, access_token: String, code: String) -> Result<bool, String> {
    let claims = verify_token(&access_token, "access", &state.jwt_secret)?;
    let id: u64 = claims.sub.parse().map_err(|_| "invalid token".to_string())?;
    let (email, secret): (String, Option<String>) =
        sqlx::query_as("SELECT email, totp_secret FROM users WHERE id = ?")
            .bind(id).fetch_one(&state.db).await.map_err(|e| e.to_string())?;
    let secret = secret.ok_or("আগে enable_2fa চালাও")?;
    if !totp::verify(&secret, &email, &code)? {
        return Err("কোড ভুল".into());
    }
    sqlx::query("UPDATE users SET totp_enabled = 1 WHERE id = ?")
        .bind(id).execute(&state.db).await.map_err(|e| e.to_string())?;
    Ok(true)
}

// ★ access token এর মেয়াদ শেষ হলে React এটা ডাকে ★
#[tauri::command]
pub async fn refresh_session(state: State<'_, AppState>) -> Result<String, String> {
    // Rust memory থেকে refresh token নাও
    let refresh = state.refresh_token.lock().unwrap().clone().ok_or("লগইন করা নেই")?;
    let claims = verify_token(&refresh, "refresh", &state.jwt_secret)?;
    let id: u64 = claims.sub.parse().map_err(|_| "invalid token".to_string())?;
    let hash = sha256_hex(&refresh);

    // DB তে আছে? বাতিল হয়নি? মেয়াদ আছে?
    let valid: Option<(u64,)> = sqlx::query_as(
        "SELECT id FROM refresh_tokens WHERE token_hash = ? AND revoked = 0 AND expires_at > NOW()",
    )
    .bind(&hash)
    .fetch_optional(&state.db)
    .await
    .map_err(|e| e.to_string())?;

    if valid.is_none() {
        // বাতিল/অজানা token আবার এসেছে = চুরির সন্দেহ, ওই user এর সব session বন্ধ
        sqlx::query("UPDATE refresh_tokens SET revoked = 1 WHERE user_id = ?")
            .bind(id).execute(&state.db).await.map_err(|e| e.to_string())?;
        *state.refresh_token.lock().unwrap() = None;
        return Err("session বাতিল, আবার লগইন করো".into());
    }

    // rotation: পুরনো refresh token বাতিল, নতুন জোড়া তৈরি
    sqlx::query("UPDATE refresh_tokens SET revoked = 1 WHERE token_hash = ?")
        .bind(&hash).execute(&state.db).await.map_err(|e| e.to_string())?;
    issue_session(&state, id).await
}

#[tauri::command]
pub async fn logout(state: State<'_, AppState>) -> Result<(), String> {
    if let Some(rt) = state.refresh_token.lock().unwrap().take() {
        let _ = sqlx::query("UPDATE refresh_tokens SET revoked = 1 WHERE token_hash = ?")
            .bind(sha256_hex(&rt)).execute(&state.db).await;
    }
    state.cache.invalidate_all(); // cache ও পরিষ্কার
    Ok(())
}`,
    },
    {
      n: 9,
      path: "src-tauri/src/commands/tasks.rs + mod.rs",
      lang: "rust",
      side: "Rust",
      role: "সুরক্ষিত API: access token যাচাই + cache (HIT/MISS)।",
      why: "প্রতিবার DB তে না গিয়ে ৬০ সেকেন্ড cache থেকে দেওয়া হয়; নতুন task যোগ করলে cache মুছে দেওয়া হয় (invalidate)।",
      code: `// ---- src-tauri/src/commands/tasks.rs ----
use crate::security::jwt::verify_token;
use crate::state::{AppState, Task};
use serde::Serialize;
use tauri::State;

#[derive(Serialize)]
pub struct TasksResponse {
    pub from_cache: bool, // UI তে HIT/MISS দেখানোর জন্য
    pub tasks: Vec<Task>,
}

// প্রতিটা সুরক্ষিত command শুরুতে এটা ডাকে: token ঠিক থাকলে user id দেয়
fn auth(state: &AppState, token: &str) -> Result<u64, String> {
    let claims = verify_token(token, "access", &state.jwt_secret)?; // মেয়াদ শেষ হলে "token expired"
    claims.sub.parse::<u64>().map_err(|_| "invalid token".to_string())
}

#[tauri::command]
pub async fn list_tasks(state: State<'_, AppState>, access_token: String) -> Result<TasksResponse, String> {
    let uid = auth(&state, &access_token)?;
    let key = format!("tasks:{}", uid);

    // cache HIT: DB ছুঁতেই হলো না
    if let Some(tasks) = state.cache.get(&key).await {
        return Ok(TasksResponse { from_cache: true, tasks });
    }

    // cache MISS: DB থেকে এনে cache এ রাখো
    let tasks = sqlx::query_as::<_, Task>("SELECT id, title, done FROM tasks WHERE user_id = ? ORDER BY id DESC")
        .bind(uid)
        .fetch_all(&state.db)
        .await
        .map_err(|e| e.to_string())?;
    state.cache.insert(key, tasks.clone()).await;
    Ok(TasksResponse { from_cache: false, tasks })
}

#[tauri::command]
pub async fn add_task(state: State<'_, AppState>, access_token: String, title: String) -> Result<(), String> {
    let uid = auth(&state, &access_token)?;
    if title.trim().is_empty() {
        return Err("title খালি".into());
    }
    sqlx::query("INSERT INTO tasks (user_id, title) VALUES (?, ?)")
        .bind(uid)
        .bind(title.trim())
        .execute(&state.db)
        .await
        .map_err(|e| e.to_string())?;
    state.cache.invalidate(&format!("tasks:{}", uid)).await; // পুরনো cache বাতিল
    Ok(())
}

// ---- src-tauri/src/commands/mod.rs ----
pub mod auth;
pub mod tasks;`,
    },
    {
      n: 10,
      path: "src-tauri/src/lib.rs",
      lang: "rust",
      side: "Rust",
      role: "সব জোড়া লাগানো: .env পড়া, DB connect, state manage, command register।",
      why: "শেষ ধাপ (Rust)। এখানে command না বসালে React ডাকতে পারবে না।",
      code: `// src-tauri/src/lib.rs
mod commands;
mod security;
mod state;

use commands::{auth, tasks};
use state::AppState;
use tauri::Manager; // app.manage() এর জন্য

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    dotenvy::dotenv().ok(); // .env ফাইল পড়ো
    let db_url = std::env::var("DATABASE_URL").expect("DATABASE_URL নেই");
    let secret = std::env::var("JWT_SECRET").expect("JWT_SECRET নেই");

    tauri::Builder::default()
        .setup(move |app| {
            // অ্যাপ চালুর সময় একবার DB তে connect
            let pool = tauri::async_runtime::block_on(sqlx::MySqlPool::connect(&db_url))?;
            app.manage(AppState::new(pool, secret.clone())); // সব command এ State<AppState> হিসেবে পাবে
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            auth::register,
            auth::login,
            auth::verify_2fa,
            auth::enable_2fa,
            auth::confirm_2fa,
            auth::refresh_session,
            auth::logout,
            tasks::list_tasks,
            tasks::add_task,
        ])
        .run(tauri::generate_context!())
        .expect("Tauri চালু করা যায়নি");
}`,
    },
    {
      n: 11,
      path: "src/utils/secureInvoke.js",
      lang: "js",
      side: "React ↔ Rust",
      role: "React এর 'axiosSecure': access token স্বয়ংক্রিয় যোগ + মেয়াদ শেষে refresh + retry।",
      why: "প্রতিটা সুরক্ষিত কলে এটা ব্যবহার করবে, তাহলে refresh এর কোড একবারই লিখতে হয়।",
      code: `// src/utils/secureInvoke.js
import { invoke } from "@tauri-apps/api/core";

// access token শুধু memory তে (localStorage এ নয়, XSS এ চুরি কঠিন)
let accessToken = null;
export const setAccessToken = (t) => { accessToken = t; };
export const getAccessToken = () => accessToken;

// Rust parameter: access_token  ⇒  JS key: accessToken (snake → camel)
export async function secureInvoke(command, args = {}) {
  try {
    return await invoke(command, { ...args, accessToken });
  } catch (err) {
    // Rust "token expired" দিলে একবার refresh করে আবার চেষ্টা
    if (String(err).includes("token expired")) {
      accessToken = await invoke("refresh_session"); // refresh token Rust এর memory তে
      return await invoke(command, { ...args, accessToken });
    }
    throw err; // অন্য error যেমন আছে তেমন
  }
}`,
    },
    {
      n: 12,
      path: "src/context/AuthContext.jsx",
      lang: "jsx",
      side: "React",
      role: "লগইন অবস্থা + login/2FA/logout function সব পেজে পৌঁছে দেয়।",
      why: "তোমার MERN গাইডের AuthContext এর মতোই; শুধু Firebase এর বদলে Rust ডাকে।",
      code: `// src/context/AuthContext.jsx
import { createContext, useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { setAccessToken } from "../utils/secureInvoke";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [tempToken, setTempToken] = useState(null); // 2FA এর ধাপে

  async function login(email, password) {
    const res = await invoke("login", { email, password });
    if (res.status === "2fa_required") {
      setTempToken(res.temp_token); // Rust এর snake_case field JS এ যেমন আছে
      return "2fa";
    }
    setAccessToken(res.access_token);
    setLoggedIn(true);
    return "ok";
  }

  async function verify2fa(code) {
    const access = await invoke("verify_2fa", { tempToken, code });
    setAccessToken(access);
    setTempToken(null);
    setLoggedIn(true);
  }

  async function logout() {
    await invoke("logout");
    setAccessToken(null);
    setLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{ loggedIn, tempToken, login, verify2fa, logout }}>
      {children}
    </AuthContext.Provider>
  );
}`,
    },
    {
      n: 13,
      path: "src/pages/Login.jsx",
      lang: "jsx",
      side: "React",
      role: "লগইন ফর্ম। 2FA লাগলে নিজে কোড ইনপুটে বদলে যায়।",
      why: "UI সবার শেষে; Rust ও context ঠিক হলে এটা সহজ।",
      code: `// src/pages/Login.jsx
import { useContext, useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { login, verify2fa, tempToken } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  async function onLogin(e) {
    e.preventDefault();
    setError("");
    try { await login(email, password); }
    catch (err) { setError(String(err)); } // rate limit এর বার্তাও এখানে দেখাবে
  }

  async function onRegister() {
    try { await invoke("register", { email, password }); setError("রেজিস্টার হয়েছে, এবার লগইন করো"); }
    catch (err) { setError(String(err)); }
  }

  async function on2fa(e) {
    e.preventDefault();
    setError("");
    try { await verify2fa(code); }
    catch (err) { setError(String(err)); }
  }

  // tempToken থাকা মানে পাসওয়ার্ড ঠিক, এখন 2FA কোড চাই
  if (tempToken) {
    return (
      <form onSubmit={on2fa} className="max-w-sm mx-auto space-y-3">
        <h2 className="text-xl font-bold">2FA কোড দাও</h2>
        <input className="input input-bordered w-full" maxLength={6}
          value={code} onChange={(e) => setCode(e.target.value)} placeholder="৬ সংখ্যা" />
        <button className="btn btn-primary w-full">যাচাই করো</button>
        {error && <p className="text-error">{error}</p>}
      </form>
    );
  }

  return (
    <form onSubmit={onLogin} className="max-w-sm mx-auto space-y-3">
      <h2 className="text-xl font-bold">লগইন</h2>
      <input className="input input-bordered w-full" type="email" placeholder="ইমেইল"
        value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="input input-bordered w-full" type="password" placeholder="পাসওয়ার্ড"
        value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="btn btn-primary w-full">Login</button>
      <button type="button" className="btn btn-ghost w-full" onClick={onRegister}>Register</button>
      {error && <p className="text-error">{error}</p>}
    </form>
  );
}`,
    },
    {
      n: 14,
      path: "src/pages/Dashboard.jsx",
      lang: "jsx",
      side: "React ↔ Rust",
      role: "সুরক্ষিত পেজ: Task তালিকা ও যোগ করা; cache HIT/MISS ব্যাজ।",
      why: "secureInvoke দিয়ে সুরক্ষিত command ডাকার উদাহরণ।",
      code: `// src/pages/Dashboard.jsx
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { secureInvoke } from "../utils/secureInvoke";

export default function Dashboard() {
  const { logout } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [fromCache, setFromCache] = useState(null);
  const [title, setTitle] = useState("");

  async function load() {
    // secureInvoke: token যোগ করে; মেয়াদ শেষ হলে নিজে refresh করে
    const res = await secureInvoke("list_tasks");
    setTasks(res.tasks);
    setFromCache(res.from_cache); // true = cache থেকে এসেছে
  }

  useEffect(() => { load(); }, []);

  async function add() {
    await secureInvoke("add_task", { title }); // Rust এ cache invalidate হয়
    setTitle("");
    load();
  }

  return (
    <div className="max-w-md mx-auto space-y-3">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">আমার Tasks</h2>
        <button className="btn btn-sm" onClick={logout}>Logout</button>
      </div>
      {fromCache !== null && (
        <span className={"badge " + (fromCache ? "badge-success" : "badge-warning")}>
          {fromCache ? "cache HIT" : "cache MISS (DB থেকে)"}
        </span>
      )}
      <div className="join w-full">
        <input className="input input-bordered join-item flex-1" value={title}
          onChange={(e) => setTitle(e.target.value)} placeholder="নতুন task" />
        <button className="btn btn-primary join-item" onClick={add}>Add</button>
      </div>
      <ul className="space-y-1">{tasks.map((t) => <li key={t.id} className="p-2 bg-base-200 rounded">{t.title}</li>)}</ul>
    </div>
  );
}`,
    },
  ],
  connection: {
    explain: [
      "লগইন: React invoke(\"login\") → Rust rate limit → argon2 verify → (2FA?) → access token React এ, refresh token Rust memory তে।",
      "সুরক্ষিত কল: secureInvoke(\"list_tasks\") accessToken জুড়ে পাঠায় → Rust verify_token → cache → DB।",
      "মেয়াদ শেষ: Rust Err(\"token expired\") → secureInvoke ধরে → invoke(\"refresh_session\") → নতুন access token → আবার একই কল।",
      "Rust এ access_token: String, JS এ { accessToken } — snake_case ↔ camelCase স্বয়ংক্রিয় রূপান্তর।",
      "Rust struct এর field (from_cache) JS এ snake_case ই থাকে (res.from_cache)।",
      "async command এ State<'_, AppState> লাগে (lifetime সহ) এবং Result রিটার্ন করা বাধ্যতামূলক।",
    ],
    rustTitle: "Rust (tasks.rs)",
    rust: `#[tauri::command]
pub async fn list_tasks(state: State<'_, AppState>, access_token: String)
    -> Result<TasksResponse, String> {
    let uid = auth(&state, &access_token)?; // "token expired" হলে এখানেই Err
    /* cache → DB */
}`,
    reactTitle: "React (secureInvoke.js)",
    react: `try {
  return await invoke("list_tasks", { accessToken });
} catch (err) {
  if (String(err).includes("token expired")) {
    accessToken = await invoke("refresh_session");
    return await invoke("list_tasks", { accessToken });
  }
  throw err;
}`,
  },
  example: {
    title: "পূর্ণ উদাহরণ: রেজিস্টার → 2FA → Task → মেয়াদ শেষ → refresh",
    flow: [
      "১) Register: পাসওয়ার্ড argon2 হয়ে users এ যায় (salt সহ)",
      "২) Login: rate limit (৫/মিনিট) → argon2 verify → access(১৫মি) + refresh(৭দিন)",
      "৩) 2FA চালু থাকলে: temp token(৫মি) → TOTP কোড মিললে তবেই session",
      "৪) Dashboard: list_tasks → প্রথমবার MISS (DB), ৬০ সেকেন্ডের মধ্যে HIT",
      "৫) Add task → cache invalidate → পরের লোড আবার MISS",
      "৬) ১৫ মিনিট পরে access শেষ → 'token expired' → স্বয়ংক্রিয় refresh (rotation)",
      "৭) পুরনো refresh আবার ব্যবহার হলে সব session বাতিল (চুরির সন্দেহ)",
    ],
    runCommands: [
      "mysql -u root -p < schema.sql",
      "cd secure-tasks",
      "npm run tauri dev",
    ],
    output: "ডেস্কটপ অ্যাপে লগইন/2FA/Task, সব নিরাপত্তা Rust এ। পরীক্ষার জন্য 'সিকিউরিটি ল্যাব' ট্যাবে প্রতিটা অংশ চালিয়ে দেখো।",
  },
  troubleshoot: [
    ["DATABASE_URL নেই (panic)", "src-tauri/.env আছে কিনা ও cargo ওই ফোল্ডার থেকে চলছে কিনা দেখো"],
    ["sqlx connect error", "MySQL চালু আছে কিনা, পাসওয়ার্ড/ডেটাবেস নাম ঠিক কিনা দেখো"],
    ["2FA কোড সবসময় ভুল", "কম্পিউটার ও ফোনের সময় সিঙ্ক করো (TOTP সময়-নির্ভর)"],
    ["invoke এ arg missing", "Rust snake_case ↔ JS camelCase নাম মিলিয়ে দেখো"],
    ["স্ট্যাটিক cache পুরনো ডেটা দেখায়", "৬০ সেকেন্ড TTL; write এর পর invalidate হচ্ছে কিনা দেখো"],
  ],
  quiz: [
    { q: "refresh token এই ডিজাইনে কোথায় থাকে?", options: ["localStorage", "Rust memory (AppState)", "URL এ"], answer: 1 },
    { q: "Access token এর মেয়াদ ছোট রাখা হয় কেন?", options: ["চুরি হলে ক্ষতি সীমিত রাখতে", "দ্রুত লোডের জন্য", "DB বাঁচাতে"], answer: 0 },
    { q: "পুরনো (বাতিল) refresh token আবার এলে কী করা হয়?", options: ["কিছু না", "ওই user এর সব session বাতিল", "শুধু একটা বার্তা"], answer: 1 },
    { q: "argon2 এ salt এর কাজ কী?", options: ["একই পাসওয়ার্ডেও আলাদা hash", "hash ছোট করা", "দ্রুত যাচাই"], answer: 0 },
  ],
};

export default project;
