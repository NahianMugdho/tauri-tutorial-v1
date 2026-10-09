// CodeBlock.jsx — কোড দেখানো + Copy বাটন
import { useState } from "react";

export default function CodeBlock({ code, lang = "", title }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch { /* clipboard পাওয়া না গেলে কিছু করবে না */ }
  }

  return (
    <div className="rounded-lg overflow-hidden border border-base-300 my-3">
      <div className="flex items-center justify-between bg-base-300 px-3 py-1 text-xs">
        <span className="opacity-80">{title || lang}</span>
        <button className="btn btn-xs btn-ghost" onClick={copy}>
          {copied ? "✓ কপি হয়েছে" : "Copy"}
        </button>
      </div>
      <pre className="bg-neutral text-neutral-content p-3 overflow-x-auto text-[13px] leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}
