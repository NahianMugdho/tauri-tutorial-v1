// TokenLab.jsx — JWT access token, refresh token, মেয়াদ (token limit) ও rotation এর সিমুলেটর
// সময় নকল: "সময় এগিয়ে দাও" বাটনে ভার্চুয়াল ঘড়ি এগোয়, আসল অপেক্ষা লাগে না।
import { useReducer, useRef, useState } from "react";

const REFRESH_TTL = 7 * 24 * 3600; // ৭ দিন
const rnd = () => Math.random().toString(36).slice(2, 10);
const b64 = (o) => btoa(JSON.stringify(o)).replace(/=+$/, "").replace(/\+/g, "-").replace(/\//g, "_");

function fmt(sec) {
  if (sec >= 86400) return Math.round(sec / 86400) + " দিন";
  if (sec >= 3600) return Math.round(sec / 3600) + " ঘণ্টা";
  if (sec >= 60) return Math.round(sec / 60) + " মিনিট";
  return sec + " সেকেন্ড";
}

export default function TokenLab() {
  const [accessTTL, setAccessTTL] = useState(900); // ১৫ মিনিট
  const [, force] = useReducer((x) => x + 1, 0);
  const S = useRef({ now: 0, session: null, store: {}, lastOld: null, log: [] });
  const s = S.current;

  const log = (kind, text) => { s.log.unshift({ kind, text, t: s.now }); s.log = s.log.slice(0, 14); };

  function makePair(sub) {
    const access = { sub, kind: "access", iat: s.now, exp: s.now + accessTTL, jti: rnd() };
    const refresh = { sub, kind: "refresh", iat: s.now, exp: s.now + REFRESH_TTL, jti: rnd() };
    s.store[refresh.jti] = { revoked: false, exp: refresh.exp }; // DB তে শুধু refresh এর রেকর্ড
    return { access, refresh };
  }

  function login() {
    s.session = makePair("user-7");
    log("ok", "Login: access (" + fmt(accessTTL) + ") + refresh (৭ দিন) তৈরি");
    force();
  }

  // refresh token দিয়ে নতুন জোড়া নেওয়া (rotation); সফল হলে true
  function doRefresh(refreshTok, viaAttacker) {
    const rec = s.store[refreshTok.jti];
    if (!rec || rec.revoked || rec.exp <= s.now) {
      Object.values(s.store).forEach((r) => { r.revoked = true; }); // সব session বন্ধ
      s.session = null;
      log("bad", (viaAttacker ? "চোর: " : "") + "বাতিল/মেয়াদোত্তীর্ণ refresh token ব্যবহার! 🚨 Rust ওই user এর সব session বাতিল করল");
      return false;
    }
    rec.revoked = true; // পুরনো refresh শেষ (এক-বার-ব্যবহার)
    s.lastOld = refreshTok;
    s.session = makePair(refreshTok.sub);
    log("ok", "Refresh rotation: পুরনো refresh বাতিল, নতুন access + refresh জারি");
    return true;
  }

  function callApi() {
    if (!s.session) { log("warn", "আগে Login করো"); force(); return; }
    if (s.session.access.exp <= s.now) {
      log("warn", 'API কল → Rust: Err("token expired")');
      const ok = doRefresh(s.session.refresh, false);
      if (ok) log("ok", "secureInvoke স্বয়ংক্রিয় retry → 200 OK (ইউজার কিছু টের পায়নি)");
      else log("bad", "refresh ব্যর্থ → আবার Login লাগবে");
    } else {
      log("ok", "API কল → access token বৈধ → 200 OK");
    }
    force();
  }

  function advance(sec, label) {
    s.now += sec;
    log("info", "⏩ সময় এগোলো: +" + label);
    force();
  }

  function stolenReplay() {
    if (!s.lastOld) { log("warn", "আগে একবার refresh হতে দাও (Call API দিয়ে মেয়াদ শেষ করে)"); force(); return; }
    doRefresh(s.lastOld, true);
    force();
  }

  const a = s.session?.access;
  const header = b64({ alg: "HS256", typ: "JWT" });
  const payload = a ? b64(a) : "";
  const remaining = a ? a.exp - s.now : null;
  const color = { ok: "text-success", bad: "text-error", warn: "text-warning", info: "opacity-70" };

  return (
    <div className="card bg-base-200 border border-base-300">
      <div className="card-body gap-3">
        <h3 className="font-bold">🪙 JWT: access + refresh + token limit ল্যাব</h3>
        <p className="text-xs opacity-70">ভার্চুয়াল ঘড়ি: T+{fmt(s.now) || "০"} ({s.now} সেকেন্ড)</p>

        <label className="text-sm flex flex-wrap items-center gap-2">
          access token মেয়াদ (token limit):
          <select className="select select-bordered select-xs" value={accessTTL}
            onChange={(e) => { setAccessTTL(Number(e.target.value)); }}>
            <option value={60}>১ মিনিট</option>
            <option value={900}>১৫ মিনিট (প্রস্তাবিত)</option>
            <option value={3600}>১ ঘণ্টা</option>
          </select>
          <span className="opacity-60">নতুন Login থেকে প্রযোজ্য</span>
        </label>

        <div className="flex flex-wrap gap-2">
          <button className="btn btn-primary btn-sm" onClick={login}>1) Login</button>
          <button className="btn btn-sm" onClick={callApi}>2) API কল করো</button>
          <button className="btn btn-sm btn-outline" onClick={() => advance(300, "৫ মিনিট")}>⏩ +৫ মিনিট</button>
          <button className="btn btn-sm btn-outline" onClick={() => advance(3600, "১ ঘণ্টা")}>⏩ +১ ঘণ্টা</button>
          <button className="btn btn-sm btn-outline" onClick={() => advance(8 * 86400, "৮ দিন")}>⏩ +৮ দিন</button>
          <button className="btn btn-sm btn-error btn-outline" onClick={stolenReplay}>🕵️ চোর পুরনো refresh আবার দিল</button>
        </div>

        {/* বর্তমান access token দেখা */}
        <div className="bg-base-100 rounded p-3 border border-base-300 text-xs space-y-2">
          <div className="flex justify-between items-center">
            <b>বর্তমান access token (React এর memory তে)</b>
            {a ? (
              <span className={"badge " + (remaining > 0 ? "badge-success" : "badge-error")}>
                {remaining > 0 ? "বাকি " + fmt(remaining) : "মেয়াদ শেষ"}
              </span>
            ) : <span className="badge">নেই</span>}
          </div>
          {a ? (
            <>
              <div className="font-mono break-all">
                <span className="text-info">{header}</span>.<span className="text-warning">{payload}</span>.<span className="text-success">HMAC-SHA256(secret)</span>
              </div>
              <pre className="bg-neutral text-neutral-content rounded p-2 overflow-x-auto">{JSON.stringify(a, null, 2)}</pre>
              <progress className="progress progress-warning w-full" value={Math.max(0, remaining)} max={accessTTL}></progress>
            </>
          ) : <p className="opacity-60">Login করলে token দেখা যাবে।</p>}
          <p className="opacity-70">refresh token এখানে দেখা যায় না, কারণ সেটা Rust memory তে থাকে, JS এ নয়। DB তে শুধু তার SHA-256 hash।</p>
        </div>

        {/* DB এর refresh_tokens টেবিল */}
        <div className="bg-base-100 rounded p-3 border border-base-300 text-xs">
          <b>DB: refresh_tokens</b>
          <table className="table table-xs">
            <thead><tr><th>jti (hash এর জায়গায়)</th><th>মেয়াদ</th><th>revoked</th></tr></thead>
            <tbody>
              {Object.entries(s.store).slice(-5).map(([k, r]) => (
                <tr key={k}><td className="font-mono">{k}</td><td>{r.exp <= s.now ? "শেষ" : fmt(r.exp - s.now) + " বাকি"}</td><td>{r.revoked ? "✔ হ্যাঁ" : "না"}</td></tr>
              ))}
              {Object.keys(s.store).length === 0 && <tr><td colSpan={3} className="opacity-60">খালি</td></tr>}
            </tbody>
          </table>
        </div>

        <div className="bg-base-100 rounded p-3 border border-base-300 text-xs space-y-1 min-h-[80px]">
          <b>লগ</b>
          {s.log.map((l, i) => <div key={i} className={color[l.kind]}>[T+{l.t}s] {l.text}</div>)}
          {s.log.length === 0 && <div className="opacity-60">1) Login → 2) +১৫ মিনিটের বেশি এগাও → API কল করো → স্বয়ংক্রিয় refresh দেখো → 🕵️ বাটন চাপো</div>}
        </div>
      </div>
    </div>
  );
}
