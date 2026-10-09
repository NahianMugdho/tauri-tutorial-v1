// Argon2Lab.jsx — argon2 কেন নিরাপদ তা বোঝার সিমুলেশন
// সতর্কতা: এখানে আসল argon2 চলে না (সেটা Rust এর argon2 crate এ)। hash এর মান SHA-256 দিয়ে বানানো নকল,
// শুধু salt, আউটপুটের গঠন এবং cost এর ধারণা দেখানোর জন্য।
import { useState } from "react";

async function fakeHash(password, saltHex) {
  const data = new TextEncoder().encode(saltHex + ":" + password);
  const d = new Uint8Array(await crypto.subtle.digest("SHA-256", data));
  return btoa(String.fromCharCode(...d)).replace(/=+$/, "");
}
const randSalt = () => Array.from(crypto.getRandomValues(new Uint8Array(8))).map((b) => b.toString(16).padStart(2, "0")).join("");

export default function Argon2Lab() {
  const [pw, setPw] = useState("MyPassw0rd!");
  const [m, setM] = useState(19456); // মেমোরি KiB (প্রায় ১৯ MiB, argon2 crate এর ডিফল্ট)
  const [t, setT] = useState(2);
  const [p, setP] = useState(1);
  const [hashes, setHashes] = useState([]);
  const [verifyPw, setVerifyPw] = useState("");
  const [verifyRes, setVerifyRes] = useState(null);

  async function hashIt() {
    const salt = randSalt();
    const h = await fakeHash(pw, salt);
    const saltB64 = btoa(salt).replace(/=+$/, "");
    const full = "$argon2id$v=19$m=" + m + ",t=" + t + ",p=" + p + "$" + saltB64 + "$" + h;
    setHashes((x) => [{ salt, full }, ...x].slice(0, 3));
  }

  async function verify() {
    if (!hashes[0]) return;
    const h = await fakeHash(verifyPw, hashes[0].salt);
    setVerifyRes(hashes[0].full.endsWith("$" + h));
  }

  const parallelOn1GiB = Math.floor((1024 * 1024) / m); // ১ GiB মেমোরিতে একসাথে কয়টা চেষ্টা

  return (
    <div className="card bg-base-200 border border-base-300">
      <div className="card-body gap-3">
        <h3 className="font-bold">🔒 argon2 ল্যাব</h3>
        <div className="alert alert-info text-xs py-2">
          এটা সিমুলেশন। আসল argon2id ইচ্ছে করে ধীর ও মেমোরি-নির্ভর। এখানে hash এর মান নকল, কিন্তু salt-এর প্রভাব আর cost-এর হিসাব সঠিক ধারণা দেয়।
        </div>

        <label className="text-sm">পাসওয়ার্ড:
          <input className="input input-bordered input-sm ml-2 font-mono" value={pw} onChange={(e) => setPw(e.target.value)} /></label>

        <div className="flex flex-wrap gap-4 text-sm">
          <label>m (মেমোরি): <b>{Math.round(m / 1024)} MiB</b>
            <input type="range" min="4096" max="131072" step="4096" value={m} onChange={(e) => setM(Number(e.target.value))} className="range range-xs w-36 ml-2" /></label>
          <label>t (পুনরাবৃত্তি): <b>{t}</b>
            <input type="range" min="1" max="6" value={t} onChange={(e) => setT(Number(e.target.value))} className="range range-xs w-24 ml-2" /></label>
          <label>p (সমান্তরাল): <b>{p}</b>
            <input type="range" min="1" max="4" value={p} onChange={(e) => setP(Number(e.target.value))} className="range range-xs w-24 ml-2" /></label>
        </div>

        <div className="bg-base-100 rounded p-2 text-xs border border-base-300">
          প্রতিটা চেষ্টায় আক্রমণকারীর <b>{Math.round(m / 1024)} MiB</b> মেমোরি লাগে। ১ GiB মেমোরির GPU তে একসাথে সর্বোচ্চ ~<b>{parallelOn1GiB}</b> টা চেষ্টা চালানো যায়
          (সাধারণ দ্রুত hash এ হাজার হাজার)। m বাড়ালে এই সংখ্যা কমে, আক্রমণ ধীর হয়। তোমার ডিভাইসেও login ধীর হয়, তাই ~০.২–০.৫ সেকেন্ডে থামাও।
        </div>

        <button className="btn btn-primary btn-sm w-fit" onClick={hashIt}>hash_password() চালাও (একাধিকবার চাপো)</button>

        {hashes.map((h, i) => (
          <div key={i} className="text-xs font-mono break-all bg-neutral text-neutral-content rounded p-2">
            <span className="text-warning">salt: {h.salt}</span><br />{h.full}
          </div>
        ))}
        {hashes.length > 1 && <p className="text-xs text-success">লক্ষ করো: একই পাসওয়ার্ড, কিন্তু প্রতিবার আলাদা salt তাই hash সম্পূর্ণ আলাদা। দুইজন একই পাসওয়ার্ড দিলেও DB তে মিলবে না, rainbow table কাজ করবে না।</p>}

        {hashes[0] && (
          <div className="flex flex-wrap gap-2 items-center">
            <input className="input input-bordered input-sm font-mono" placeholder="verify_password() এর জন্য পাসওয়ার্ড"
              value={verifyPw} onChange={(e) => setVerifyPw(e.target.value)} />
            <button className="btn btn-sm" onClick={verify}>সর্বশেষ hash এর সাথে মেলাও</button>
            {verifyRes !== null && <span className={"badge " + (verifyRes ? "badge-success" : "badge-error")}>{verifyRes ? "মিলেছে ✓" : "মেলেনি ✗"}</span>}
          </div>
        )}
        <p className="text-xs opacity-70">hash string এর ভেতরেই algorithm, m/t/p ও salt থাকে, তাই আলাদা salt কলাম লাগে না।</p>
      </div>
    </div>
  );
}
