// TotpLab.jsx — আসল TOTP (RFC 6238): HMAC-SHA1, ৩০ সেকেন্ড, ৬ ডিজিট। ব্রাউজারের WebCrypto দিয়ে।
// এই ডেমো secret দিয়ে Google Authenticator এ যোগ করলে একই কোড দেখবে।
import { useEffect, useState } from "react";

const SECRET_B32 = "JBSWY3DPEHPK3PXP"; // শুধু ডেমোর জন্য, আসল অ্যাপে প্রতি user এর আলাদা random secret

function base32Decode(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
  let bits = "";
  for (const c of str.replace(/=+$/, "").toUpperCase()) bits += alphabet.indexOf(c).toString(2).padStart(5, "0");
  const bytes = [];
  for (let i = 0; i + 8 <= bits.length; i += 8) bytes.push(parseInt(bits.slice(i, i + 8), 2));
  return new Uint8Array(bytes);
}

async function totp(counter) {
  const key = await crypto.subtle.importKey("raw", base32Decode(SECRET_B32), { name: "HMAC", hash: "SHA-1" }, false, ["sign"]);
  const buf = new ArrayBuffer(8);
  new DataView(buf).setUint32(4, counter); // counter (৮ বাইট big-endian, নিচের ৪ বাইটই যথেষ্ট)
  const h = new Uint8Array(await crypto.subtle.sign("HMAC", key, buf));
  const off = h[19] & 0xf; // dynamic truncation
  const bin = ((h[off] & 0x7f) << 24) | (h[off + 1] << 16) | (h[off + 2] << 8) | h[off + 3];
  return String(bin % 1000000).padStart(6, "0");
}

export default function TotpLab() {
  const [code, setCode] = useState("······");
  const [left, setLeft] = useState(30);
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [fail, setFail] = useState(null);

  useEffect(() => {
    let alive = true;
    async function update() {
      const sec = Math.floor(Date.now() / 1000);
      try {
        const c = await totp(Math.floor(sec / 30));
        if (alive) { setCode(c); setLeft(30 - (sec % 30)); }
      } catch { if (alive) setFail("এই ব্রাউজারে WebCrypto পাওয়া যায়নি (https বা localhost লাগে)"); }
    }
    update();
    const t = setInterval(update, 1000);
    return () => { alive = false; clearInterval(t); };
  }, []);

  async function verify() {
    // Rust এ totp-rs এ skew=1: আগের, এখনকার, পরের ধাপ গ্রহণযোগ্য
    const step = Math.floor(Date.now() / 1000 / 30);
    const valid = [step - 1, step, step + 1];
    for (const s of valid) if ((await totp(s)) === input.trim()) { setResult({ ok: true, text: "✅ কোড সঠিক → Rust issue_session() চালাবে" }); return; }
    setResult({ ok: false, text: "❌ কোড ভুল → Err(\"কোড ভুল\") (rate limit এও গোনা হয়)" });
  }

  return (
    <div className="card bg-base-200 border border-base-300">
      <div className="card-body gap-3">
        <h3 className="font-bold">📱 2FA (TOTP) ল্যাব</h3>
        {fail && <div className="alert alert-warning text-sm">{fail}</div>}
        <div className="flex flex-wrap items-center gap-6">
          <div>
            <div className="text-xs opacity-70">এখনকার কোড (Authenticator অ্যাপে যেটা দেখাত)</div>
            <div className="text-4xl font-mono tracking-widest">{code}</div>
          </div>
          <div className="radial-progress text-primary" style={{ "--value": (left / 30) * 100, "--size": "4rem" }}>{left}s</div>
        </div>
        <div className="text-xs opacity-70 break-all">
          ডেমো secret (base32): <code>{SECRET_B32}</code><br />
          otpauth://totp/TauriApp:demo@example.com?secret={SECRET_B32}&amp;issuer=TauriApp
        </div>
        <div className="flex gap-2">
          <input className="input input-bordered input-sm w-32 font-mono" maxLength={6} placeholder="৬ সংখ্যা"
            value={input} onChange={(e) => setInput(e.target.value)} />
          <button className="btn btn-primary btn-sm" onClick={verify}>verify_2fa()</button>
        </div>
        {result && <div className={"alert py-2 text-sm " + (result.ok ? "alert-success" : "alert-error")}>{result.text}</div>}
        <ul className="text-xs list-disc ml-5 opacity-80 space-y-1">
          <li>কোড = HMAC-SHA1(secret, floor(সময়/৩০)) এর ৬ অঙ্ক। secret ফোন ও সার্ভার (Rust/DB) দুই জায়গাতেই আছে, নেটওয়ার্কে কোড পাঠাতে হয় না।</li>
          <li>প্রতি ৩০ সেকেন্ডে কোড বদলায়; সময়ের সামান্য গরমিল সামলাতে আগের/পরের ধাপও গ্রহণযোগ্য (skew=1)।</li>
          <li>লগইনে পাসওয়ার্ড ঠিক হলে প্রথমে শুধু ৫ মিনিটের "2fa_pending" temp token মেলে, access token মেলে কোড ঠিক হওয়ার পর।</li>
        </ul>
      </div>
    </div>
  );
}
