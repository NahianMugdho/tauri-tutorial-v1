// PipelineAnimation.jsx — পুরো পাইপলাইনের ইন্টারেক্টিভ অ্যানিমেশন (সাইটের শুরুতে)
// তিনটা দৃশ্য: Calculator, Login (argon2 + 2FA + token), সুরক্ষিত API কল (cache + refresh)
import { useEffect, useMemo, useState } from "react";

const TAG_STYLE = {
  React: "badge-info",
  Tauri: "badge-secondary",
  Rust: "badge-warning",
  DB: "badge-success",
};

// --- দৃশ্য ১: Calculator ---
function calcNodes(divZero) {
  const nodes = [
    { icon: "🖱️", label: "বাটন ক্লিক", tag: "React", desc: "ব্যবহারকারী 12 ÷ " + (divZero ? "0" : "4") + " লিখে = চাপে। React state এ firstNum, operator, display জমা আছে।", code: "handleEquals()" },
    { icon: "📞", label: "invoke()", tag: "React", desc: "React Rust কে ডাকে। command এর নাম ও আর্গুমেন্ট JSON হয়ে যায়।", code: 'invoke("calculate", { a: 12, operator: "/", b: ' + (divZero ? "0" : "4") + " })" },
    { icon: "🌉", label: "Tauri IPC Bridge", tag: "Tauri", desc: "Bridge নাম দেখে generate_handler! এর তালিকা থেকে সঠিক Rust function খুঁজে বের করে।", code: "generate_handler![calculate]" },
    { icon: "🦀", label: "Rust calculate()", tag: "Rust", desc: "match operator.as_str() দিয়ে সঠিক শাখা চলে।", code: 'match operator.as_str() { "/" => ... }' },
  ];
  if (divZero) {
    nodes.push({ icon: "⚠️", label: "Err(...)", tag: "Rust", err: true, desc: "b == 0.0 তাই Rust Err পাঠায়।", code: 'Err("শূন্য দিয়ে ভাগ করা যায় না!")' });
    nodes.push({ icon: "🪤", label: "catch(error)", tag: "React", err: true, desc: "Rust এর Err React এ catch ব্লকে আসে; স্ক্রিনে বার্তা দেখায়।", code: "setDisplay(String(error))" });
  } else {
    nodes.push({ icon: "✅", label: "Ok(3.0)", tag: "Rust", desc: "a / b = 3 হিসাব হলো, Ok(3.0) ফেরত।", code: "Ok(a / b)" });
    nodes.push({ icon: "🖥️", label: "স্ক্রিন আপডেট", tag: "React", desc: "await এর result এসেছে, setDisplay দিয়ে স্ক্রিনে 3 দেখায়।", code: "setDisplay(String(result))" });
  }
  return nodes;
}

// --- দৃশ্য ২: Login ---
function loginNodes(twoFA) {
  const nodes = [
    { icon: "⌨️", label: "ইমেইল/পাসওয়ার্ড", tag: "React", desc: "ফর্ম submit হলো। পাসওয়ার্ড plain text এ শুধু এই মুহূর্তে মেমোরিতে থাকে।", code: 'invoke("login", { email, password })' },
    { icon: "🚦", label: "Rate limit", tag: "Rust", desc: "এই ইমেইলে ১ মিনিটে ৫ বারের বেশি চেষ্টা হলে ঢোকার আগেই আটকে দেয়।", code: "rate_limit::check(&state.attempts, &email, 5, 60s)" },
    { icon: "🗄️", label: "ইউজার খোঁজা", tag: "DB", desc: "MySQL/MongoDB থেকে ইমেইল দিয়ে user ও তার password_hash আনা হয়।", code: "SELECT id, password_hash ... WHERE email = ?" },
    { icon: "🔐", label: "argon2 যাচাই", tag: "Rust", desc: "ইনপুট পাসওয়ার্ড একই salt ও cost দিয়ে hash করে DB এর hash এর সাথে মেলানো হয়।", code: "Argon2::default().verify_password(...)" },
  ];
  if (twoFA) {
    nodes.push({ icon: "🎫", label: "temp token (৫ মি)", tag: "Rust", desc: "পাসওয়ার্ড ঠিক, কিন্তু 2FA চালু। শুধু 2fa_pending ধরনের ছোট token দেওয়া হয়, এটা দিয়ে API চলে না।", code: 'make_token(id, "2fa_pending", 300)' });
    nodes.push({ icon: "📱", label: "TOTP কোড", tag: "React", desc: "ব্যবহারকারী Authenticator অ্যাপের ৬ সংখ্যার কোড দেয়।", code: 'invoke("verify_2fa", { tempToken, code })' });
    nodes.push({ icon: "🧮", label: "TOTP যাচাই", tag: "Rust", desc: "secret + বর্তমান ৩০ সেকেন্ডের ধাপ দিয়ে কোড হিসাব করে মেলায়।", code: "totp::verify(&secret, &email, &code)" });
  }
  nodes.push({ icon: "🪙", label: "Token জোড়া তৈরি", tag: "Rust", desc: "access (১৫ মি) ও refresh (৭ দিন) তৈরি। refresh এর SHA-256 hash DB তে যায়।", code: "make_token(.., ACCESS_TTL) + make_token(.., REFRESH_TTL)" });
  nodes.push({ icon: "🧠", label: "refresh → Rust memory", tag: "Rust", desc: "আসল refresh token JS এ পাঠানো হয় না, AppState এ থাকে। তাই XSS দিয়ে চুরি করা যায় না।", code: "*state.refresh_token.lock() = Some(refresh)" });
  nodes.push({ icon: "🏠", label: "access → React memory", tag: "React", desc: "শুধু access token JS এর একটা ভ্যারিয়েবলে (localStorage এ নয়)। লগইন সম্পন্ন।", code: "setAccessToken(res.access_token)" });
  return nodes;
}

// --- দৃশ্য ৩: সুরক্ষিত API কল ---
function apiNodes(expired, hit) {
  const nodes = [
    { icon: "📋", label: "Tasks লোড", tag: "React", desc: "Dashboard খুলতেই secureInvoke দিয়ে list_tasks ডাকা হয়।", code: 'secureInvoke("list_tasks")' },
    { icon: "🏷️", label: "access token জুড়ে", tag: "React", desc: "secureInvoke মেমোরি থেকে access token নিয়ে আর্গুমেন্টে জুড়ে দেয় (Rust এ access_token)।", code: "invoke(cmd, { ...args, accessToken })" },
    { icon: "🌉", label: "IPC Bridge", tag: "Tauri", desc: "JSON আকারে Rust এ পৌঁছায়।", code: "list_tasks(state, access_token)" },
    { icon: "🔎", label: "JWT যাচাই", tag: "Rust", desc: "signature ও মেয়াদ (exp) ও kind=access যাচাই হয়।", code: 'verify_token(&token, "access", &secret)' },
  ];
  if (expired) {
    nodes.push({ icon: "⏰", label: "token expired", tag: "Rust", err: true, desc: "access token এর ১৫ মিনিট শেষ। Rust Err(\"token expired\") ফেরত দেয়।", code: 'Err("token expired")' });
    nodes.push({ icon: "🪤", label: "secureInvoke ধরে ফেলে", tag: "React", err: true, desc: "catch এ বার্তাটা দেখে ইউজারকে না জানিয়ে refresh শুরু করে।", code: 'if (String(err).includes("token expired")) ...' });
    nodes.push({ icon: "♻️", label: "refresh_session", tag: "Rust", desc: "Rust memory র refresh token যাচাই → DB তে বৈধ কিনা → পুরনো বাতিল (rotation) → নতুন জোড়া।", code: "UPDATE refresh_tokens SET revoked = 1 ..." });
    nodes.push({ icon: "🔁", label: "আবার চেষ্টা", tag: "React", desc: "নতুন access token দিয়ে একই কল আবার। ইউজার কিছুই টের পায় না।", code: 'invoke("list_tasks", { accessToken: newToken })' });
    nodes.push({ icon: "🔎", label: "JWT যাচাই ✓", tag: "Rust", desc: "এবার token বৈধ।", code: "claims.sub → user id" });
  }
  nodes.push({ icon: "⚡", label: "Cache দেখা", tag: "Rust", desc: hit ? "key tasks:<uid> cache এ আছে (HIT), DB ছোঁয়া লাগবে না।" : "cache এ নেই (MISS), DB তে যেতে হবে।", code: 'state.cache.get("tasks:7")' });
  if (!hit) {
    nodes.push({ icon: "🗄️", label: "DB query", tag: "DB", desc: "ডেটাবেস থেকে tasks আনা হয়, তারপর ৬০ সেকেন্ডের জন্য cache এ রাখা হয়।", code: "SELECT ... FROM tasks WHERE user_id = ?" });
  }
  nodes.push({ icon: "📦", label: "Response", tag: "Rust", desc: "TasksResponse { from_cache, tasks } JSON হয়ে React এ ফেরে।", code: "Ok(TasksResponse { from_cache, tasks })" });
  nodes.push({ icon: "🖥️", label: "UI আপডেট", tag: "React", desc: "setTasks ও ব্যাজ (" + (hit ? "cache HIT" : "cache MISS") + ") দেখায়।", code: "setTasks(res.tasks)" });
  return nodes;
}

export default function PipelineAnimation() {
  const [scenario, setScenario] = useState("calc");
  const [divZero, setDivZero] = useState(false);
  const [twoFA, setTwoFA] = useState(true);
  const [expired, setExpired] = useState(false);
  const [hit, setHit] = useState(false);
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);

  const nodes = useMemo(() => {
    if (scenario === "calc") return calcNodes(divZero);
    if (scenario === "login") return loginNodes(twoFA);
    return apiNodes(expired, hit);
  }, [scenario, divZero, twoFA, expired, hit]);

  // দৃশ্য/অপশন বদলালে শুরু থেকে
  useEffect(() => { setIdx(0); }, [scenario, divZero, twoFA, expired, hit]);

  // অটো-প্লে
  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => {
      setIdx((i) => {
        if (i >= nodes.length - 1) { setPlaying(false); return i; }
        return i + 1;
      });
    }, 1500);
    return () => clearInterval(t);
  }, [playing, nodes.length]);

  const cur = nodes[idx];
  const tabs = [
    ["calc", "🧮 Calculator"],
    ["login", "🔐 Login (argon2 + 2FA + JWT)"],
    ["api", "📡 সুরক্ষিত API (refresh + cache)"],
  ];

  return (
    <div className="card bg-base-200 border border-base-300">
      <div className="card-body">
        <div role="tablist" className="tabs tabs-boxed flex-wrap">
          {tabs.map(([k, l]) => (
            <button key={k} role="tab" className={"tab " + (scenario === k ? "tab-active" : "")}
              onClick={() => { setScenario(k); setPlaying(false); }}>{l}</button>
          ))}
        </div>

        {/* অপশন টগল */}
        <div className="flex flex-wrap gap-4 text-sm">
          {scenario === "calc" && (
            <label className="label cursor-pointer gap-2"><span>শূন্য দিয়ে ভাগ</span>
              <input type="checkbox" className="toggle toggle-error toggle-sm" checked={divZero} onChange={(e) => setDivZero(e.target.checked)} /></label>
          )}
          {scenario === "login" && (
            <label className="label cursor-pointer gap-2"><span>2FA চালু</span>
              <input type="checkbox" className="toggle toggle-info toggle-sm" checked={twoFA} onChange={(e) => setTwoFA(e.target.checked)} /></label>
          )}
          {scenario === "api" && (
            <>
              <label className="label cursor-pointer gap-2"><span>access token এর মেয়াদ শেষ</span>
                <input type="checkbox" className="toggle toggle-warning toggle-sm" checked={expired} onChange={(e) => setExpired(e.target.checked)} /></label>
              <label className="label cursor-pointer gap-2"><span>cache HIT</span>
                <input type="checkbox" className="toggle toggle-success toggle-sm" checked={hit} onChange={(e) => setHit(e.target.checked)} /></label>
            </>
          )}
        </div>

        {/* নোডের সারি */}
        <div className="flex flex-wrap items-center gap-2 py-2">
          {nodes.map((n, i) => {
            const state = i === idx ? "node-active" : i < idx ? (n.err ? "node-err" : "node-done") : "";
            return (
              <div key={i} className="flex items-center gap-2">
                <button onClick={() => { setIdx(i); setPlaying(false); }}
                  className={"w-24 h-24 rounded-xl border-2 border-base-300 bg-base-100 flex flex-col items-center justify-center text-center p-1 transition " + state + (i > idx ? " opacity-50" : "")}>
                  <span className="text-2xl">{n.icon}</span>
                  <span className="text-[11px] leading-tight mt-1">{n.label}</span>
                </button>
                {i < nodes.length - 1 && <span className={i < idx ? "text-success" : "opacity-30"}>➜</span>}
              </div>
            );
          })}
        </div>

        {/* বর্তমান ধাপের ব্যাখ্যা */}
        <div className="bg-base-100 rounded-lg p-4 border border-base-300">
          <div className="flex items-center gap-2 mb-1">
            <span className={"badge " + TAG_STYLE[cur.tag]}>{cur.tag}</span>
            <b>ধাপ {idx + 1}/{nodes.length}: {cur.label}</b>
          </div>
          <p className="text-sm opacity-90">{cur.desc}</p>
          <code className="block mt-2 text-xs bg-neutral text-neutral-content rounded p-2 overflow-x-auto">{cur.code}</code>
        </div>

        <div className="flex gap-2 justify-center">
          <button className="btn btn-sm" onClick={() => { setIdx(Math.max(0, idx - 1)); setPlaying(false); }}>◀ আগে</button>
          <button className="btn btn-sm btn-primary" onClick={() => { if (idx >= nodes.length - 1) setIdx(0); setPlaying((p) => !p); }}>
            {playing ? "⏸ থামাও" : "▶ চালাও"}
          </button>
          <button className="btn btn-sm" onClick={() => { setIdx(Math.min(nodes.length - 1, idx + 1)); setPlaying(false); }}>পরে ▶</button>
        </div>
      </div>
    </div>
  );
}
