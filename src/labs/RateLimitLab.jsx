// RateLimitLab.jsx — sliding window rate limit (Rust এর rate_limit::check এর সমতুল্য)
import { useEffect, useRef, useState } from "react";

export default function RateLimitLab() {
  const [max, setMax] = useState(5);
  const [windowSec, setWindowSec] = useState(30);
  const attempts = useRef([]); // সময়ের তালিকা (ms)
  const [msg, setMsg] = useState(null);
  const [, setTick] = useState(0);

  // প্রতি ৩০০ms এ নতুন করে আঁকো যাতে পুরনো চেষ্টা window থেকে বেরিয়ে যেতে দেখা যায়
  useEffect(() => {
    const t = setInterval(() => setTick((x) => x + 1), 300);
    return () => clearInterval(t);
  }, []);

  const now = Date.now();
  attempts.current = attempts.current.filter((t) => now - t < windowSec * 1000);
  const used = attempts.current.length;
  const oldest = attempts.current[0];
  const waitLeft = oldest ? Math.max(0, Math.ceil((windowSec * 1000 - (now - oldest)) / 1000)) : 0;

  function tryLogin() {
    const n = Date.now();
    attempts.current = attempts.current.filter((t) => n - t < windowSec * 1000); // retain
    if (attempts.current.length >= max) {
      setMsg({ bad: true, text: "🚫 Err: অনেকবার চেষ্টা করেছ, কিছুক্ষণ পরে আবার চেষ্টা করো (বাকি " + waitLeft + " সে.)" });
      return;
    }
    attempts.current.push(n);
    setMsg({ bad: false, text: "ভুল পাসওয়ার্ড (চেষ্টা গোনা হলো: " + attempts.current.length + "/" + max + ")" });
  }

  return (
    <div className="card bg-base-200 border border-base-300">
      <div className="card-body gap-3">
        <h3 className="font-bold">🚦 Rate limit ল্যাব (brute force ঠেকানো)</h3>
        <div className="flex flex-wrap gap-4 text-sm">
          <label>সর্বোচ্চ চেষ্টা: <b>{max}</b>
            <input type="range" min="2" max="10" value={max} onChange={(e) => setMax(Number(e.target.value))} className="range range-xs w-40 ml-2" /></label>
          <label>সময়সীমা: <b>{windowSec} সে.</b>
            <input type="range" min="10" max="60" step="5" value={windowSec} onChange={(e) => setWindowSec(Number(e.target.value))} className="range range-xs w-40 ml-2" /></label>
        </div>

        <div className="flex gap-1 flex-wrap">
          {Array.from({ length: max }).map((_, i) => (
            <div key={i} className={"w-8 h-8 rounded border flex items-center justify-center text-xs " + (i < used ? "bg-error text-error-content border-error" : "bg-base-100 border-base-300")}>
              {i < used ? "✗" : ""}
            </div>
          ))}
        </div>
        <p className="text-xs opacity-70">লাল ঘর = window এর ভেতরের চেষ্টা। {windowSec} সেকেন্ড পার হলে ঘর নিজে খালি হবে (sliding window)।</p>

        <button className="btn btn-sm btn-error w-fit" onClick={tryLogin}>ভুল পাসওয়ার্ড দিয়ে Login চেষ্টা</button>
        {msg && <div className={"alert py-2 text-sm " + (msg.bad ? "alert-error" : "alert-warning")}>{msg.text}</div>}
        <p className="text-xs opacity-70">একই যুক্তি 2FA কোডেও (key = "2fa:user"): ৬ সংখ্যায় মাত্র ১০ লক্ষ সম্ভাবনা, limit না থাকলে অনুমান করে ভাঙা যায়।</p>
      </div>
    </div>
  );
}
