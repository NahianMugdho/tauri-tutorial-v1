// প্রজেক্ট ৫ — React + Tauri + MongoDB: সিকিউর Notes/Task অ্যাপ
// security মডিউল প্রজেক্ট ৪ এর হুবহু; বদলায় শুধু ডেটাবেস স্তর
const project = {
  slug: "secure-tasks-mongodb",
  no: 5,
  title: "Secure Task Manager — MongoDB",
  level: "অ্যাডভান্সড",
  stack: ["Tauri v2", "React", "Rust + mongodb crate", "MongoDB", "argon2", "JWT", "TOTP 2FA", "moka cache"],
  widget: "security",
  intro:
    "প্রজেক্ট ৪ এর মতোই JWT, refresh rotation, rate limit, 2FA, cache, argon2 — তফাত শুধু ডেটাবেস: SQL টেবিলের বদলে MongoDB collection। তাই security/ ফোল্ডার ও React ফাইলগুলো প্রায় কপি-পেস্ট; আমরা শুধু যা বদলায় সেগুলো লিখব। MongoDB এর একটা সুবিধা: refresh_tokens এ TTL index দিলে মেয়াদ শেষ হলে ডেটাবেস নিজেই ডকুমেন্ট মুছে দেয়।",
  steps: [
    { title: "MongoDB চালু ও collection পরিকল্পনা", desc: "users, refresh_tokens (TTL index), tasks। কোনো schema.sql লাগে না।" },
    { title: "প্রজেক্ট ৪ থেকে কপি", desc: "security/ ফোল্ডার (password, jwt, totp, rate_limit) এবং React এর secureInvoke.js, AuthContext, Login, Dashboard হুবহু কপি।" },
    { title: ".env ও Cargo.toml", desc: "sqlx এর বদলে mongodb crate।" },
    { title: "state.rs (Mongo ভার্সন)", desc: "MySqlPool এর বদলে mongodb::Database।" },
    { title: "commands/auth.rs (Mongo ভার্সন)", desc: "query এর বদলে doc! দিয়ে find_one / insert_one / update_one।" },
    { title: "commands/tasks.rs (Mongo ভার্সন)", desc: "ObjectId কে String এ বদলে JS কে পাঠানো।" },
    { title: "lib.rs", desc: "setup এ MongoDB connect ও TTL index তৈরি।" },
  ],
  setupCommands: [
    "# MongoDB চালু থাকতে হবে (mongod বা Atlas URI)",
    "cp -r ../secure-tasks/src-tauri/src/security  src-tauri/src/security",
    "cp ../secure-tasks/src/utils/secureInvoke.js src/utils/",
    "# AuthContext/Login/Dashboard ও কপি; তারপর নিচের ফাইলগুলো লেখো",
    "npm run tauri dev",
  ],
  files: [
    {
      n: 1,
      path: "src-tauri/.env  +  Cargo.toml (বদলানো অংশ)",
      lang: "toml",
      side: "Config",
      role: "sqlx বাদ, mongodb ও bson যোগ।",
      why: "ডেটাবেস ড্রাইভার বদলালেই এই প্রজেক্ট আলাদা হয়ে যায়।",
      code: `# ---- src-tauri/.env ----
MONGODB_URI=mongodb://127.0.0.1:27017
MONGODB_DB=tauri_app
JWT_SECRET=এখানে-অন্তত-৩২-অক্ষরের-র‍্যান্ডম-স্ট্রিং-abc123XYZ

# ---- Cargo.toml [dependencies] ----
mongodb = "3"          # sqlx এর বদলে (এটাই bson ও re-export করে)
futures-util = "0.3"   # cursor থেকে ডকুমেন্ট সংগ্রহে
# বাকি সব প্রজেক্ট ৪ এর মতো: argon2, jsonwebtoken, totp-rs, moka, uuid, chrono, sha2, hex, dotenvy, serde`,
    },
    {
      n: 2,
      path: "src-tauri/src/security/*  (কপি করো)",
      lang: "rust",
      side: "Rust",
      role: "password.rs, jwt.rs, totp.rs, rate_limit.rs, mod.rs — একদম একই।",
      why: "নিরাপত্তার যুক্তি ডেটাবেসের উপর নির্ভর করে না, তাই বদলানো লাগে না। এটাই ভালো আর্কিটেকচারের লক্ষণ।",
      code: `// প্রজেক্ট ৪ এর এই ফাইলগুলো হুবহু কপি করো:
//   src-tauri/src/security/password.rs   (argon2 hash/verify)
//   src-tauri/src/security/jwt.rs        (ACCESS 15 মিনিট, REFRESH 7 দিন, "token expired")
//   src-tauri/src/security/totp.rs       (2FA)
//   src-tauri/src/security/rate_limit.rs (sliding window)
//   src-tauri/src/security/mod.rs
//
// React এর এই ফাইলগুলোও একই:
//   src/utils/secureInvoke.js, src/context/AuthContext.jsx,
//   src/pages/Login.jsx, src/pages/Dashboard.jsx
//
// (Dashboard এ task.id এখন String; key={t.id} ঠিকই কাজ করে)`,
    },
    {
      n: 3,
      path: "src-tauri/src/state.rs",
      lang: "rust",
      side: "Rust",
      role: "shared state: MongoDB Database, cache, rate limit, refresh token।",
      why: "প্রজেক্ট ৪ এর সাথে তফাত: MySqlPool → Database, Task এর id এখন String (ObjectId এর hex)।",
      code: `// src-tauri/src/state.rs
use moka::future::Cache;
use mongodb::Database;
use serde::Serialize;
use std::{collections::HashMap, sync::Mutex, time::{Duration, Instant}};

// JS কে যা পাঠাবো (ObjectId নয়, সরল String)
#[derive(Serialize, Clone)]
pub struct TaskDto {
    pub id: String,
    pub title: String,
    pub done: bool,
}

pub struct AppState {
    pub db: Database,                                   // MongoDB database handle
    pub jwt_secret: String,
    pub cache: Cache<String, Vec<TaskDto>>,             // API cache, TTL ৬০ সেকেন্ড
    pub attempts: Mutex<HashMap<String, Vec<Instant>>>, // rate limit
    pub refresh_token: Mutex<Option<String>>,           // refresh token Rust এই থাকে
}

impl AppState {
    pub fn new(db: Database, jwt_secret: String) -> Self {
        Self {
            db,
            jwt_secret,
            cache: Cache::builder().time_to_live(Duration::from_secs(60)).max_capacity(1000).build(),
            attempts: Mutex::new(HashMap::new()),
            refresh_token: Mutex::new(None),
        }
    }
}`,
    },
    {
      n: 4,
      path: "src-tauri/src/commands/auth.rs",
      lang: "rust",
      side: "Rust",
      role: "register, login, verify_2fa, refresh_session, logout — MongoDB ভার্সন।",
      why: "SQL string এর জায়গায় doc! { ... } ফিল্টার। এখানে মূল তিনটা (register, login, refresh) দেখানো হলো; verify_2fa/enable_2fa/confirm_2fa একই ধরনে find_one + update_one দিয়ে লেখো।",
      code: `// src-tauri/src/commands/auth.rs  (MongoDB)
use crate::security::{jwt::*, password::*, rate_limit, totp};
use crate::state::AppState;
use mongodb::bson::{doc, oid::ObjectId, DateTime as BsonDateTime, Document};
use mongodb::Collection;
use serde::{Deserialize, Serialize};
use sha2::{Digest, Sha256};
use std::time::Duration;
use tauri::State;

// users collection এর ডকুমেন্টের আকার
#[derive(Serialize, Deserialize)]
struct User {
    #[serde(rename = "_id", skip_serializing_if = "Option::is_none")]
    id: Option<ObjectId>,           // insert এর সময় None, Mongo নিজে বানায়
    email: String,
    password_hash: String,          // argon2
    totp_enabled: bool,
    totp_secret: Option<String>,
}

#[derive(Serialize)]
pub struct LoginResponse {
    pub status: String,
    pub access_token: Option<String>,
    pub temp_token: Option<String>,
}

fn sha256_hex(s: &str) -> String { hex::encode(Sha256::digest(s.as_bytes())) }
fn users(state: &AppState) -> Collection<User> { state.db.collection("users") }
fn tokens(state: &AppState) -> Collection<Document> { state.db.collection("refresh_tokens") }

// session তৈরি: access JS এ, refresh এর hash DB তে, আসল refresh Rust memory তে
async fn issue_session(state: &AppState, user_id: &ObjectId) -> Result<String, String> {
    let uid = user_id.to_hex();
    let access = make_token(&uid, "access", ACCESS_TTL_SECS, &state.jwt_secret)?;
    let refresh = make_token(&uid, "refresh", REFRESH_TTL_SECS, &state.jwt_secret)?;

    let expires = BsonDateTime::from_millis(
        chrono::Utc::now().timestamp_millis() + REFRESH_TTL_SECS * 1000,
    );
    tokens(state)
        .insert_one(doc! {
            "token_hash": sha256_hex(&refresh),
            "user_id": user_id,
            "expires_at": expires,  // TTL index এই ফিল্ড দেখে ডকুমেন্ট মুছে দেয়
            "revoked": false,
        })
        .await
        .map_err(|e| e.to_string())?;

    *state.refresh_token.lock().unwrap() = Some(refresh);
    Ok(access)
}

#[tauri::command]
pub async fn register(state: State<'_, AppState>, email: String, password: String) -> Result<String, String> {
    if password.len() < 8 { return Err("পাসওয়ার্ড কমপক্ষে ৮ অক্ষর".into()); }
    let hash = hash_password(&password)?; // argon2
    users(&state)
        .insert_one(User { id: None, email, password_hash: hash, totp_enabled: false, totp_secret: None })
        .await
        .map_err(|_| "এই ইমেইল আগেই আছে".to_string())?; // unique index এ duplicate ধরা পড়ে
    Ok("registered".into())
}

#[tauri::command]
pub async fn login(state: State<'_, AppState>, email: String, password: String) -> Result<LoginResponse, String> {
    rate_limit::check(&state.attempts, &email, 5, Duration::from_secs(60))?; // ১ মিনিটে ৫ বার

    // SQL এর WHERE email = ? এর বদলে doc! ফিল্টার
    let user = users(&state)
        .find_one(doc! { "email": &email })
        .await
        .map_err(|e| e.to_string())?
        .ok_or("ইমেইল বা পাসওয়ার্ড ভুল")?;

    if !verify_password(&password, &user.password_hash) {
        return Err("ইমেইল বা পাসওয়ার্ড ভুল".into());
    }
    let id = user.id.ok_or("user id নেই")?;

    if user.totp_enabled {
        let temp = make_token(&id.to_hex(), "2fa_pending", 300, &state.jwt_secret)?;
        return Ok(LoginResponse { status: "2fa_required".into(), access_token: None, temp_token: Some(temp) });
    }
    let access = issue_session(&state, &id).await?;
    Ok(LoginResponse { status: "ok".into(), access_token: Some(access), temp_token: None })
}

#[tauri::command]
pub async fn refresh_session(state: State<'_, AppState>) -> Result<String, String> {
    let refresh = state.refresh_token.lock().unwrap().clone().ok_or("লগইন করা নেই")?;
    let claims = verify_token(&refresh, "refresh", &state.jwt_secret)?;
    let uid = ObjectId::parse_str(&claims.sub).map_err(|_| "invalid token".to_string())?;
    let hash = sha256_hex(&refresh);

    // বাতিল হয়নি + মেয়াদ আছে এমন ডকুমেন্ট খোঁজো
    let found = tokens(&state)
        .find_one(doc! { "token_hash": &hash, "revoked": false, "expires_at": { "$gt": BsonDateTime::now() } })
        .await
        .map_err(|e| e.to_string())?;

    if found.is_none() {
        // বাতিল token আবার এসেছে = চুরির সন্দেহ → ওই user এর সব refresh token বাতিল
        let _ = tokens(&state).update_many(doc! { "user_id": &uid }, doc! { "$set": { "revoked": true } }).await;
        *state.refresh_token.lock().unwrap() = None;
        return Err("session বাতিল, আবার লগইন করো".into());
    }

    // rotation: পুরনোটা বাতিল, নতুন জোড়া
    tokens(&state)
        .update_one(doc! { "token_hash": &hash }, doc! { "$set": { "revoked": true } })
        .await
        .map_err(|e| e.to_string())?;
    issue_session(&state, &uid).await
}

#[tauri::command]
pub async fn logout(state: State<'_, AppState>) -> Result<(), String> {
    if let Some(rt) = state.refresh_token.lock().unwrap().take() {
        let _ = tokens(&state)
            .update_one(doc! { "token_hash": sha256_hex(&rt) }, doc! { "$set": { "revoked": true } })
            .await;
    }
    state.cache.invalidate_all();
    Ok(())
}

// verify_2fa / enable_2fa / confirm_2fa:
// প্রজেক্ট ৪ এর যুক্তি হুবহু; শুধু sqlx::query এর জায়গায়
//   users(&state).find_one(doc!{ "_id": oid }) এবং
//   users(&state).update_one(doc!{ "_id": oid }, doc!{ "$set": { "totp_secret": &secret } })`,
    },
    {
      n: 5,
      path: "src-tauri/src/commands/tasks.rs + mod.rs",
      lang: "rust",
      side: "Rust",
      role: "access token যাচাই + cache; ObjectId কে String বানিয়ে JS এ পাঠানো।",
      why: "cache যুক্তি একই; তফাত শুধু cursor থেকে ডকুমেন্ট সংগ্রহ।",
      code: `// ---- src-tauri/src/commands/tasks.rs ----
use crate::security::jwt::verify_token;
use crate::state::{AppState, TaskDto};
use futures_util::TryStreamExt; // cursor.try_collect() এর জন্য
use mongodb::bson::{doc, oid::ObjectId, Document};
use serde::Serialize;
use tauri::State;

#[derive(Serialize)]
pub struct TasksResponse {
    pub from_cache: bool,
    pub tasks: Vec<TaskDto>,
}

fn auth(state: &AppState, token: &str) -> Result<ObjectId, String> {
    let claims = verify_token(token, "access", &state.jwt_secret)?; // মেয়াদ শেষ হলে "token expired"
    ObjectId::parse_str(&claims.sub).map_err(|_| "invalid token".to_string())
}

#[tauri::command]
pub async fn list_tasks(state: State<'_, AppState>, access_token: String) -> Result<TasksResponse, String> {
    let uid = auth(&state, &access_token)?;
    let key = format!("tasks:{}", uid.to_hex());

    if let Some(tasks) = state.cache.get(&key).await {
        return Ok(TasksResponse { from_cache: true, tasks }); // cache HIT
    }

    // cache MISS: Mongo থেকে আনো (নতুনগুলো আগে)
    let col = state.db.collection::<Document>("tasks");
    let docs: Vec<Document> = col
        .find(doc! { "user_id": &uid })
        .sort(doc! { "_id": -1 })
        .await
        .map_err(|e| e.to_string())?
        .try_collect()
        .await
        .map_err(|e| e.to_string())?;

    let tasks: Vec<TaskDto> = docs
        .iter()
        .map(|d| TaskDto {
            id: d.get_object_id("_id").map(|o| o.to_hex()).unwrap_or_default(),
            title: d.get_str("title").unwrap_or("").to_string(),
            done: d.get_bool("done").unwrap_or(false),
        })
        .collect();

    state.cache.insert(key, tasks.clone()).await;
    Ok(TasksResponse { from_cache: false, tasks })
}

#[tauri::command]
pub async fn add_task(state: State<'_, AppState>, access_token: String, title: String) -> Result<(), String> {
    let uid = auth(&state, &access_token)?;
    if title.trim().is_empty() { return Err("title খালি".into()); }

    state.db.collection::<Document>("tasks")
        .insert_one(doc! { "user_id": &uid, "title": title.trim(), "done": false })
        .await
        .map_err(|e| e.to_string())?;

    state.cache.invalidate(&format!("tasks:{}", uid.to_hex())).await; // cache বাতিল
    Ok(())
}

// ---- src-tauri/src/commands/mod.rs ----
pub mod auth;
pub mod tasks;`,
    },
    {
      n: 6,
      path: "src-tauri/src/lib.rs",
      lang: "rust",
      side: "Rust",
      role: "MongoDB connect, index তৈরি, state manage, command register।",
      why: "unique email index ও TTL index এখানে একবার বানানো হয়।",
      code: `// src-tauri/src/lib.rs  (MongoDB)
mod commands;
mod security;
mod state;

use commands::{auth, tasks};
use mongodb::{bson::{doc, Document}, options::IndexOptions, Client, IndexModel};
use state::AppState;
use std::time::Duration;
use tauri::Manager;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    dotenvy::dotenv().ok();
    let uri = std::env::var("MONGODB_URI").expect("MONGODB_URI নেই");
    let db_name = std::env::var("MONGODB_DB").unwrap_or_else(|_| "tauri_app".into());
    let secret = std::env::var("JWT_SECRET").expect("JWT_SECRET নেই");

    tauri::Builder::default()
        .setup(move |app| {
            tauri::async_runtime::block_on(async {
                let client = Client::with_uri_str(&uri).await?;
                let db = client.database(&db_name);

                // email অনন্য: duplicate register ঠেকায়
                let unique = IndexModel::builder()
                    .keys(doc! { "email": 1 })
                    .options(IndexOptions::builder().unique(true).build())
                    .build();
                db.collection::<Document>("users").create_index(unique).await?;

                // TTL index: expires_at এ পৌঁছালে Mongo নিজে ডকুমেন্ট মুছে দেয়
                let ttl = IndexModel::builder()
                    .keys(doc! { "expires_at": 1 })
                    .options(IndexOptions::builder().expire_after(Duration::from_secs(0)).build())
                    .build();
                db.collection::<Document>("refresh_tokens").create_index(ttl).await?;

                app.manage(AppState::new(db, secret.clone()));
                Ok::<(), mongodb::error::Error>(())
            })?;
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            auth::register, auth::login, auth::verify_2fa, auth::enable_2fa,
            auth::confirm_2fa, auth::refresh_session, auth::logout,
            tasks::list_tasks, tasks::add_task,
        ])
        .run(tauri::generate_context!())
        .expect("Tauri চালু করা যায়নি");
}`,
    },
  ],
  connection: {
    explain: [
      "React দিকটা প্রজেক্ট ৪ এর সাথে প্রায় হুবহু: login → access token; secureInvoke → মেয়াদ শেষে refresh।",
      "পার্থক্য Rust এর ভেতরে: SQL string → doc! { ... }; u64 id → ObjectId।",
      "JS এ ObjectId পাঠাতে হলে .to_hex() দিয়ে String বানাও (TaskDto)।",
      "TTL index: refresh_tokens এ expires_at পার হলে MongoDB নিজেই ডকুমেন্ট মুছে — আলাদা cleanup কোড লাগে না।",
      "ডেটাবেস বদলানো সহজ হলো কারণ security/ ও React অংশ ডেটাবেস-নিরপেক্ষ।",
    ],
    rustTitle: "Rust (auth.rs)",
    rust: `let user = users(&state)
    .find_one(doc! { "email": &email })   // SQL: WHERE email = ?
    .await.map_err(|e| e.to_string())?
    .ok_or("ইমেইল বা পাসওয়ার্ড ভুল")?;`,
    reactTitle: "React (একই)",
    react: `const res = await invoke("login", { email, password });
// res.status === "ok" | "2fa_required"
const list = await secureInvoke("list_tasks"); // list.tasks[i].id এখন String`,
  },
  example: {
    title: "পূর্ণ উদাহরণ: refresh rotation ও TTL",
    flow: [
      "১) Login → refresh_tokens এ { token_hash, user_id, expires_at(+৭ দিন), revoked:false }",
      "২) access শেষ → refresh_session → আগেরটা revoked:true, নতুন ডকুমেন্ট insert",
      "৩) কেউ পুরনো refresh দিয়ে চেষ্টা করলে find_one কিছু পায় না → ওই user এর সব token revoked",
      "৪) ৭ দিন পার হলে TTL index ডকুমেন্ট নিজে মুছে ফেলে",
      "৫) tasks এ add → cache invalidate → পরের list MISS, তারপর HIT",
    ],
    runCommands: ["mongod   # বা Atlas URI .env এ", "npm run tauri dev"],
    output: "MongoDB তে users, refresh_tokens, tasks collection তৈরি হয়ে যাবে।",
  },
  troubleshoot: [
    ["Server selection timeout", "mongod চালু আছে কিনা, MONGODB_URI ঠিক কিনা দেখো"],
    ["duplicate key (register)", "এই ইমেইল আগে ব্যবহার হয়েছে, unique index এর কাজ"],
    ["ObjectId parse error", "claims.sub এ hex string আছে কিনা দেখো (to_hex() দিয়ে বানানো)"],
    ["mongodb 3.x API মেলে না", "Cargo.toml এ mongodb = \"3\" আছে কিনা দেখো; 2.x এ .await এর আগে ভিন্ন options লাগে"],
  ],
  quiz: [
    { q: "MongoDB তে মেয়াদ শেষের ডকুমেন্ট নিজে মুছতে কী লাগে?", options: ["TTL index", "cron job", "JOIN"], answer: 0 },
    { q: "ObjectId কে JS এ পাঠাতে কী করবে?", options: ["সরাসরি পাঠাবে", ".to_hex() দিয়ে String", "u64 বানাবে"], answer: 1 },
    { q: "security/ ফোল্ডার MySQL থেকে Mongo তে কি বদলাতে হয়?", options: ["পুরোটা", "না, একই থাকে", "শুধু jwt.rs"], answer: 1 },
  ],
};

export default project;
