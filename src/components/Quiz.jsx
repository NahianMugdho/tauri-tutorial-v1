// Quiz.jsx — ছোট MCQ কুইজ
import { useState } from "react";

export default function Quiz({ items }) {
  const [picked, setPicked] = useState({});
  const score = items.filter((q, i) => picked[i] === q.answer).length;
  const answered = Object.keys(picked).length;

  return (
    <div className="space-y-4">
      {items.map((q, i) => (
        <div key={i} className="card bg-base-200 border border-base-300">
          <div className="card-body p-4 gap-2">
            <p className="font-semibold">{i + 1}. {q.q}</p>
            <div className="flex flex-col gap-2">
              {q.options.map((o, j) => {
                const chosen = picked[i] === j;
                const show = picked[i] !== undefined;
                const cls = show ? (j === q.answer ? "btn-success" : chosen ? "btn-error" : "btn-ghost") : "btn-outline";
                return (
                  <button key={j} disabled={show} className={"btn btn-sm justify-start " + cls}
                    onClick={() => setPicked((p) => ({ ...p, [i]: j }))}>{o}</button>
                );
              })}
            </div>
          </div>
        </div>
      ))}
      {answered === items.length && <div className="alert alert-info">স্কোর: {score}/{items.length}</div>}
    </div>
  );
}
