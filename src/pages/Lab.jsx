// Lab.jsx — সিকিউরিটি ল্যাব: JWT/refresh, token limit, 2FA, cache, argon2 আলাদা আলাদা
import { useState } from "react";
import TokenLab from "../labs/TokenLab";
import RateLimitLab from "../labs/RateLimitLab";
import TotpLab from "../labs/TotpLab";
import CacheLab from "../labs/CacheLab";
import Argon2Lab from "../labs/Argon2Lab";

const LABS = [
  ["jwt", "🪙 JWT + Refresh + Token limit", TokenLab],
  ["rate", "🚦 Rate limit", RateLimitLab],
  ["totp", "📱 2FA (TOTP)", TotpLab],
  ["cache", "⚡ API Cache", CacheLab],
  ["argon", "🔒 argon2", Argon2Lab],
];

export default function Lab() {
  const [sel, setSel] = useState("jwt");
  const Cur = LABS.find((l) => l[0] === sel)[2];
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">🔬 সিকিউরিটি ল্যাব</h1>
      <p className="text-sm opacity-80">প্রজেক্ট ৪ ও ৫ এ যা যা বানিয়েছ, এখানে প্রতিটা অংশ আলাদা করে চালিয়ে বোঝো।</p>
      <div role="tablist" className="tabs tabs-boxed flex-wrap">
        {LABS.map(([k, l]) => <button key={k} role="tab" className={"tab " + (sel === k ? "tab-active" : "")} onClick={() => setSel(k)}>{l}</button>)}
      </div>
      <Cur />
    </div>
  );
}
