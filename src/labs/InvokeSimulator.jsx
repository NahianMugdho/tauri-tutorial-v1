// InvokeSimulator.jsx — "Rust" function এর JS সিমুলেশন: invoke() এর ফল নিজে চালিয়ে দেখো
import { useState } from "react";

// প্রজেক্ট ১ এর Rust (f64, Result) এর সমতুল্য
function rustF64(a, op, b) {
  switch (op) {
    case "+": return { ok: a + b, line: '"+" => Ok(a + b)' };
    case "-": return { ok: a - b, line: '"-" => Ok(a - b)' };
    case "*": return { ok: a * b, line: '"*" => Ok(a * b)' };
    case "/":
      if (b === 0) return { err: "শূন্য দিয়ে ভাগ করা যায় না!", line: 'if b == 0.0 { Err(String::from("শূন্য দিয়ে ভাগ করা যায় না!")) }' };
      return { ok: a / b, line: '"/" => Ok(a / b)' };
    default: return { err: "অজানা অপারেটর: " + op, line: '_ => Err(format!("অজানা অপারেটর: {}", operator))' };
  }
}

// প্রজেক্ট ২ এর Rust (i32, String) এর সমতুল্য
function rustI32(val, a, b) {
  const t = (x) => Math.trunc(x); // i32 এ দশমিক নেই
  a = t(a); b = t(b);
  switch (val) {
    case 1: return { ok: String(a + b), line: "1 => add(a, b)" };
    case 2: return { ok: String(a - b), line: "2 => sub(a, b)" };
    case 3: return { ok: String(a * b), line: "3 => mul(a, b)" };
    case 4:
      if (b === 0) return { ok: "0", line: "4 => div(a, b)   // div() এর ভেতর if b == 0 { return 0; }" };
      return { ok: String(t(a / b)), line: "4 => div(a, b)" };
    default: return { ok: "Invalid operation", line: '_ => return "Invalid operation".to_string()' };
  }
}

export default function InvokeSimulator({ mode = "f64" }) {
  const [a, setA] = useState("12");
  const [b, setB] = useState("0");
  const [op, setOp] = useState(mode === "f64" ? "/" : "4");
  const [out, setOut] = useState(null);

  function run() {
    const x = parseFloat(a), y = parseFloat(b);
    if (Number.isNaN(x) || Number.isNaN(y)) { setOut({ js: "React এ validation: সঠিক number দিন!", kind: "warn" }); return; }
    if (mode === "f64") {
      const r = rustF64(x, op, y);
      setOut(r.err
        ? { kind: "err", js: "catch (error) → " + JSON.stringify(r.err), line: r.line, call: 'invoke("calculate", { a: ' + x + ', operator: "' + op + '", b: ' + y + " })" }
        : { kind: "ok", js: "result = " + r.ok, line: r.line, call: 'invoke("calculate", { a: ' + x + ', operator: "' + op + '", b: ' + y + " })" });
    } else {
      const r = rustI32(Number(op), x, y);
      setOut({ kind: "ok", js: "res = " + JSON.stringify(r.ok), line: r.line, call: 'invoke("calculate", { val: ' + op + ", a: " + Math.trunc(x) + ", b: " + Math.trunc(y) + " })" });
    }
  }

  const ops = mode === "f64" ? [["+", "+"], ["-", "−"], ["*", "×"], ["/", "÷"]] : [["1", "Add"], ["2", "Sub"], ["3", "Mul"], ["4", "Div"]];

  return (
    <div className="card bg-base-200 border border-base-300">
      <div className="card-body gap-3">
        <h3 className="font-bold">🧪 invoke() সিমুলেটর ({mode === "f64" ? "প্রজেক্ট ১: Result<f64,String>" : "প্রজেক্ট ২: i32 → String"})</h3>
        <p className="text-xs opacity-70">ব্রাউজারে আসল Rust চলে না; এটা Rust এর যুক্তির JS প্রতিলিপি, শুধু আচরণ বোঝানোর জন্য। ১২ ÷ ০ চালিয়ে দুই প্রজেক্টের পার্থক্য দেখো।</p>
        <div className="flex flex-wrap gap-2 items-center">
          <input className="input input-bordered input-sm w-24" value={a} onChange={(e) => setA(e.target.value)} />
          <select className="select select-bordered select-sm" value={op} onChange={(e) => setOp(e.target.value)}>
            {ops.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
          <input className="input input-bordered input-sm w-24" value={b} onChange={(e) => setB(e.target.value)} />
          <button className="btn btn-primary btn-sm" onClick={run}>invoke() চালাও</button>
        </div>
        {out && (
          <div className="text-sm space-y-2">
            {out.call && <code className="block bg-neutral text-neutral-content rounded p-2 text-xs overflow-x-auto">React → {out.call}</code>}
            {out.line && <code className="block bg-neutral text-warning rounded p-2 text-xs overflow-x-auto">Rust → {out.line}</code>}
            <div className={"alert py-2 " + (out.kind === "ok" ? "alert-success" : out.kind === "err" ? "alert-error" : "alert-warning")}>
              <span className="font-mono text-xs">{out.js}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
