// FileMap.jsx — ইন্টারেক্টিভ ফাইল ম্যাপ: কোন ফাইল কী করে, কখন চলে, কাকে ডাকে
import { useState } from "react";
import CodeBlock from "../components/CodeBlock";

const SIDE_COLOR = {
  Rust: "badge-warning",
  React: "badge-info",
  "React ↔ Rust": "badge-accent",
  Config: "badge-ghost",
  Database: "badge-success",
};

export default function FileMap({ files }) {
  const [sel, setSel] = useState(0);
  const f = files[sel];

  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="card bg-base-200 border border-base-300 md:col-span-1">
        <div className="card-body p-3 gap-1">
          <h3 className="font-bold text-sm mb-1">📁 ফাইল ম্যাপ (ক্লিক করো)</h3>
          {files.map((x, i) => (
            <button key={x.path} onClick={() => setSel(i)}
              className={"text-left rounded p-2 text-xs border " + (i === sel ? "border-primary bg-base-100" : "border-transparent hover:bg-base-100")}>
              <div className="flex items-center gap-2">
                <span className="badge badge-sm badge-outline">{x.n}</span>
                <span className="font-mono break-all">{x.path}</span>
              </div>
              <div className="mt-1 flex gap-1 items-center">
                <span className={"badge badge-xs " + (SIDE_COLOR[x.side] || "")}>{x.side}</span>
                {x.edit === false && <span className="badge badge-xs badge-outline">সাধারণত হাত দেবে না</span>}
                {x.edit === true && <span className="badge badge-xs badge-primary">তুমি লিখবে</span>}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="md:col-span-2 space-y-3">
        <div className="card bg-base-200 border border-base-300">
          <div className="card-body gap-2">
            <h3 className="font-mono font-bold break-all">{f.path}</h3>
            <p><b>কাজ:</b> {f.role}</p>
            {f.when && <p><b>কখন চলে:</b> {f.when}</p>}
            {f.calls && f.calls.length > 0 && (
              <div>
                <b>কাকে ডাকে / কী চালু করে:</b>
                <ul className="list-disc ml-5 text-sm">
                  {f.calls.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>
            )}
            <p className="text-sm opacity-80">💡 {f.why}</p>
          </div>
        </div>
        <CodeBlock code={f.code} lang={f.lang} title={f.path} />
      </div>
    </div>
  );
}
