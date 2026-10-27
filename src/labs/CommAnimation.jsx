// CommAnimation.jsx — React ↔ Tauri bridge ↔ Rust: কোন বিন্দুতে জোড়া লাগে, অ্যানিমেশনে
// ৪টা দৃশ্য: ০) অ্যাপ চালু ১) invoke → Ok ২) Err → catch ৩) Rust → React ইভেন্ট
// সংযোগ বিন্দু ①–⑤ SVG এর মাঝের bridge এ জ্বলে ওঠে; নিচে দুই দিকের কোড দেখায়।
import { useEffect, useState } from "react";
import CodeBlock from "../components/CodeBlock";

// লেন (আড়াআড়ি রাস্তা) এর y অবস্থান
const LANE = { start: 80, req: 140, res: 200, evt: 260 };

// সংযোগ বিন্দু: কোথায় বসে আর কোন নিয়ম না মানলে ভাঙে
const CPS = {
  1: { x: 345, y: LANE.req, label: "কমান্ডের নাম", rule: 'invoke("greet") এর স্ট্রিং আর Rust এর fn greet + generate_handler![greet] হুবহু এক হতে হবে। না মিললে কম্পাইল এরর আসে না, রানটাইমে invoke() ব্যর্থ হয়।' },
  2: { x: 415, y: LANE.req, label: "আর্গুমেন্ট (JSON)", rule: "JS অবজেক্টের key camelCase (productType), Rust প্যারামিটার snake_case (product_type)। Tauri নিজে রূপান্তর করে; মানগুলো JSON হয়ে যায়, তাই টাইপ serde দিয়ে মিলতে হয়।" },
  3: { x: 380, y: LANE.res, label: "ফেরত মান", rule: "Rust এর Ok(T) হয় await এর মান, Err(E) হয় catch এর error। T ও E serde::Serialize হতে হবে; struct এ rename_all = \"camelCase\" দিলে JS এ camelCase নামে আসে।" },
  4: { x: 380, y: LANE.evt, label: "ইভেন্ট emit ↔ listen", rule: "Rust এর emit(\"নাম\", data) ↔ JS এর listen(\"নাম\", cb): নাম হুবহু এক। listen আগে চালু না থাকলে ইভেন্ট হারিয়ে যায়; কম্পোনেন্ট সরলে unlisten করো।" },
  5: { x: 380, y: LANE.start, label: "WebView লিংক (devUrl)", rule: "tauri.conf.json: dev এ devUrl (Vite এর পোর্ট), build এ frontendDist (../dist)। window ও React এখানেই প্রথম জোড়া লাগে; Vite এর পোর্ট আর devUrl মিলতে হবে।" },
};

const MODES = [
  {
    key: "start",
    label: "০ অ্যাপ চালু",
    steps: [
      { pos: [635, LANE.start], side: "rust", title: "npm run tauri dev", desc: "Tauri CLI আগে beforeDevCommand চালায় (Vite সার্ভার, localhost:1420), তারপর Rust অ্যাপ বানিয়ে চালায় ও একটা নেটিভ window খোলে।",
        rust: '// src-tauri/tauri.conf.json\n"build": {\n  "beforeDevCommand": "npm run dev",\n  "devUrl": "http://localhost:1420",\n  "beforeBuildCommand": "npm run build",\n  "frontendDist": "../dist"\n}' },
      { pos: [380, LANE.start], side: "bridge", cp: 5, title: "window এর WebView devUrl থেকে পেজ আনে", desc: "build করা অ্যাপে এই পেজ আসে frontendDist (../dist) থেকে। React আর Rust এখানেই প্রথম জোড়া লাগে।",
        react: "// vite.config.js\nserver: { port: 1420, strictPort: true }   // devUrl এর পোর্টের সাথে মিলতে হবে",
        rust: '// tauri.conf.json\n"devUrl": "http://localhost:1420"' },
      { pos: [125, LANE.start], side: "react", title: "React চালু", desc: "WebView index.html লোড করে, তাতে main.jsx → App render হয়। এখন থেকে JS এ invoke() ও listen() চলে।",
        react: '// src/main.jsx\nReactDOM.createRoot(document.getElementById("root")).render(<App />);' },
    ],
  },
  {
    key: "invoke",
    label: "১ invoke → Ok",
    steps: [
      { pos: [125, LANE.req], side: "react", title: "React: invoke() ডাকে", desc: "বাটন চাপলে await invoke(...) চলে। প্রথম আর্গুমেন্ট command এর নাম, দ্বিতীয়টা JSON আর্গুমেন্ট।",
        react: 'const msg = await invoke("greet", { name: "Mugdho" });' },
      { pos: [CPS[1].x, CPS[1].y], side: "bridge", cp: 1, title: "সংযোগ ①: নাম মেলে", desc: "Bridge নামটা দেখে generate_handler! এর তালিকায় খোঁজে। তালিকায় না থাকলে এখানেই থেমে যায়।",
        react: 'invoke("greet", ...)', rust: ".invoke_handler(tauri::generate_handler![greet])" },
      { pos: [CPS[2].x, CPS[2].y], side: "bridge", cp: 2, title: "সংযোগ ②: আর্গুমেন্ট JSON হয়ে পৌঁছায়", desc: "{ name: \"Mugdho\" } Rust এর প্যারামিটারে বসে। key এর নাম মিলতে হয় (camelCase ↔ snake_case নিজে রূপান্তর হয়)।",
        react: '{ name: "Mugdho" }', rust: "fn greet(name: &str) -> String" },
      { pos: [635, LANE.req], side: "rust", title: "Rust: function চলে", desc: "#[tauri::command] চিহ্নিত function এখন আসল কাজ করে।",
        rust: '#[tauri::command]\nfn greet(name: &str) -> String {\n    format!("Hello, {name}!")\n}' },
      { pos: [635, LANE.res], side: "rust", title: "Rust: ফলাফল তৈরি", desc: "ফেরত মান serde দিয়ে JSON হয়ে ফেরার পথে ওঠে।",
        rust: 'format!("Hello, {name}!")   // → "Hello, Mugdho!"' },
      { pos: [CPS[3].x, CPS[3].y], side: "bridge", cp: 3, title: "সংযোগ ③: ফেরত মান", desc: "Ok মান JSON হয়ে bridge পার হয়। এই পথেই সব ফলাফল ফেরে।",
        rust: "Ok → await এর মান", react: "const msg = await invoke(...)" },
      { pos: [125, LANE.res], side: "react", title: "React: await শেষ", desc: "Promise resolve হয়েছে, setMsg দিয়ে স্ক্রিনে দেখানো যায়।",
        react: 'setMsg(msg);   // "Hello, Mugdho!"' },
    ],
  },
  {
    key: "err",
    label: "২ Err → catch",
    steps: [
      { pos: [125, LANE.req], side: "react", title: "React: invoke() try/catch এ", desc: "Rust এর Err যেহেতু rejected Promise হয়, invoke সবসময় try/catch এ রাখো।",
        react: 'try {\n  await invoke("greet", { name: "" });\n} catch (e) {\n  setError(String(e));\n}' },
      { pos: [CPS[1].x, CPS[1].y], side: "bridge", cp: 1, title: "সংযোগ ①: নাম মেলে", desc: "নাম ঠিক থাকলে কল Rust এ পৌঁছায়।",
        react: 'invoke("greet", ...)', rust: ".invoke_handler(tauri::generate_handler![greet])" },
      { pos: [635, LANE.res], side: "rust", err: true, title: "Rust: Err ফেরত", desc: "নাম খালি, তাই function Err দেয়। Result<T, String> ব্যবহার করলে এই বার্তা সরাসরি JS এ যায়।",
        rust: '#[tauri::command]\nfn greet(name: &str) -> Result<String, String> {\n    if name.is_empty() {\n        return Err("নাম খালি".into());\n    }\n    Ok(format!("Hello, {name}!"))\n}' },
      { pos: [CPS[3].x, CPS[3].y], side: "bridge", cp: 3, err: true, title: "সংযোগ ③: Err ফেরার পথে", desc: "Err(E) JS এ গিয়ে rejected Promise হয়।",
        rust: 'Err("নাম খালি")', react: "catch (e) …" },
      { pos: [125, LANE.res], side: "react", err: true, title: "React: catch ধরে", desc: "e এর মান Rust এর Err এর String। UI তে বাংলা বার্তা দেখানো যায়।",
        react: 'setError(String(e));   // "নাম খালি"' },
    ],
  },
  {
    key: "event",
    label: "৩ Rust → React ইভেন্ট",
    steps: [
      { pos: [125, LANE.evt], side: "react", title: "React: আগে listen চালু", desc: "ইভেন্ট আসার আগেই শ্রোতা বসাতে হয়। listen() একটা Promise দেয়, সেটা দিয়ে পরে unlisten করতে হয়।",
        react: 'useEffect(() => {\n  const unlisten = listen("devices-changed", (e) => setDevices(e.payload));\n  return () => { unlisten.then((fn) => fn()); };\n}, []);' },
      { pos: [635, LANE.evt], side: "rust", title: "Rust: কিছু ঘটল, emit", desc: "React কিছু চায়নি; Rust নিজে থেকে জানাচ্ছে (যেমন ব্যাকগ্রাউন্ড থ্রেডে ফোন লাগানো ধরা পড়ল)।",
        rust: "use tauri::Emitter;\n\n// ব্যাকগ্রাউন্ড থ্রেডে\nlet _ = handle.emit(\"devices-changed\", &list);" },
      { pos: [CPS[4].x, CPS[4].y], side: "bridge", cp: 4, title: "সংযোগ ④: ইভেন্টের নাম মেলে", desc: "যে window ইভেন্টটা শুনছে, bridge সেখানে payload পৌঁছে দেয়।",
        rust: 'emit("devices-changed", &list)', react: 'listen("devices-changed", cb)' },
      { pos: [125, LANE.evt], side: "react", title: "React: callback চলে", desc: "e.payload তে Rust এর পাঠানো ডেটা; state বদলে UI আপডেট হয়। পলিং লাগেনি।",
        react: "(e) => setDevices(e.payload)" },
    ],
  },
];

const SIDE_STROKE = { react: "stroke-info", rust: "stroke-warning", bridge: "stroke-secondary" };

export default function CommAnimation() {
  const [mi, setMi] = useState(1);
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);

  const mode = MODES[mi];
  const last = mode.steps.length - 1;
  const step = mode.steps[idx];

  useEffect(() => {
    if (!playing) return;
    if (idx >= last) { setPlaying(false); return; }
    const t = setTimeout(() => setIdx((i) => i + 1), 1900);
    return () => clearTimeout(t);
  }, [playing, idx, last]);

  function pickMode(i) { setMi(i); setIdx(0); setPlaying(false); }
  function jump(cp) {
    for (let m = 0; m < MODES.length; m++) {
      const s = MODES[m].steps.findIndex((x) => x.cp === cp);
      if (s >= 0) { setMi(m); setIdx(s); setPlaying(false); return; }
    }
  }
  function togglePlay() {
    if (idx >= last) setIdx(0);
    setPlaying((p) => !p);
  }

  const err = !!step.err;
  const boxCls = (side) =>
    "fill-base-200 " + (step.side === side ? SIDE_STROKE[side] + " stroke-[3]" : "stroke-base-300 stroke-[1.5]");

  return (
    <div className="space-y-4">
      <div role="tablist" className="tabs tabs-boxed flex-wrap">
        {MODES.map((m, i) => (
          <button key={m.key} role="tab" className={"tab " + (mi === i ? "tab-active" : "")} onClick={() => pickMode(i)}>{m.label}</button>
        ))}
      </div>

      <div className="card bg-base-200 border border-base-300">
        <div className="card-body p-3">
          <svg viewBox="0 0 760 330" className="w-full h-auto" role="img" aria-label="React, Tauri bridge ও Rust এর সংযোগ">
            <defs>
              <marker id="comm-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 z" className="fill-base-content/50" />
              </marker>
            </defs>

            {/* বাক্স: React | Bridge | Rust */}
            <rect x="20" y="20" width="200" height="290" rx="12" className={boxCls("react")} />
            <rect x="300" y="20" width="160" height="290" rx="12" strokeDasharray="6 4" className={boxCls("bridge")} />
            <rect x="540" y="20" width="200" height="290" rx="12" className={boxCls("rust")} />
            <text x="120" y="42" textAnchor="middle" className="fill-base-content text-[14px] font-bold">React (WebView)</text>
            <text x="380" y="42" textAnchor="middle" className="fill-base-content text-[14px] font-bold">Tauri IPC bridge</text>
            <text x="640" y="42" textAnchor="middle" className="fill-base-content text-[14px] font-bold">Rust (Tauri core)</text>

            {/* লেন */}
            {[
              [LANE.start, "ক) পেজ লোড", 540, 220, "index.html → main.jsx", "window → devUrl"],
              [LANE.req, "খ) অনুরোধ", 220, 540, 'invoke("cmd", args)', "#[tauri::command]"],
              [LANE.res, "গ) উত্তর", 540, 220, "await / catch", "Ok(T) / Err(E)"],
              [LANE.evt, "ঘ) ইভেন্ট", 540, 220, 'listen("event", cb)', 'emit("event", data)'],
            ].map(([y, name, x1, x2, l, r]) => (
              <g key={y}>
                <line x1={x1} y1={y} x2={x2} y2={y} className="stroke-base-content/30" strokeWidth="2" markerEnd="url(#comm-arrow)" />
                <text x="120" y={y - 14} textAnchor="middle" className="fill-base-content/80 text-[11px] font-mono">{l}</text>
                <text x="640" y={y - 14} textAnchor="middle" className="fill-base-content/80 text-[11px] font-mono">{r}</text>
                <text x="380" y={y + 30} textAnchor="middle" className="fill-base-content/50 text-[10px]">{name}</text>
              </g>
            ))}

            {/* সংযোগ বিন্দু */}
            {Object.entries(CPS).map(([k, c]) => {
              const on = step.cp === Number(k);
              return (
                <g key={k} onClick={() => jump(Number(k))} className="cursor-pointer">
                  <circle cx={c.x} cy={c.y} r="14" className={(on ? "fill-warning stroke-warning animate-pulse" : "fill-base-100 stroke-base-content/40") + " stroke-2"} />
                  <text x={c.x} y={c.y + 5} textAnchor="middle" className={(on ? "fill-warning-content" : "fill-base-content") + " text-[14px] font-bold"}>{k}</text>
                </g>
              );
            })}

            {/* প্যাকেট */}
            <g style={{ transform: `translate(${step.pos[0]}px, ${step.pos[1]}px)`, transition: "transform 0.9s ease-in-out" }}>
              <circle r="11" className={err ? "fill-error" : "fill-primary"} />
              <text y="5" textAnchor="middle" className="text-[13px]">📦</text>
            </g>
          </svg>

          <div className="flex flex-wrap items-center gap-2">
            <button className="btn btn-sm btn-primary" onClick={togglePlay}>{playing ? "⏸ থামাও" : "▶ চালাও"}</button>
            <button className="btn btn-sm btn-ghost" disabled={idx === 0} onClick={() => { setPlaying(false); setIdx(idx - 1); }}>◀ আগে</button>
            <button className="btn btn-sm btn-ghost" disabled={idx === last} onClick={() => { setPlaying(false); setIdx(idx + 1); }}>পরে ▶</button>
            <button className="btn btn-sm btn-ghost" onClick={() => { setPlaying(false); setIdx(0); }}>↺</button>
            <div className="flex gap-1 flex-wrap">
              {mode.steps.map((s, i) => (
                <button key={i} onClick={() => { setPlaying(false); setIdx(i); }}
                  className={"btn btn-xs " + (i === idx ? "btn-primary" : i < idx ? "btn-outline btn-primary" : "btn-ghost")}>{i + 1}</button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={"alert items-start " + (err ? "alert-error" : "alert-info")}>
        <div className="space-y-1 w-full">
          <div className="font-bold">ধাপ {idx + 1}/{mode.steps.length}: {step.title}</div>
          <div className="text-sm">{step.desc}</div>
          {step.cp && <div className="text-sm mt-1"><b>নিয়ম ({step.cp}):</b> {CPS[step.cp].rule}</div>}
        </div>
      </div>

      {(step.react || step.rust) && (
        <div className="grid md:grid-cols-2 gap-3">
          {step.react ? <CodeBlock code={step.react} lang="js" title="React / JS দিক" /> : <div />}
          {step.rust ? <CodeBlock code={step.rust} lang="rust" title="Rust / Tauri দিক" /> : <div />}
        </div>
      )}

      <div>
        <h3 className="font-bold mb-2">সংযোগ বিন্দুগুলো (ক্লিক করলে সেই ধাপে যাবে)</h3>
        <div className="grid sm:grid-cols-2 gap-2">
          {Object.entries(CPS).map(([k, c]) => (
            <button key={k} onClick={() => jump(Number(k))}
              className={"text-left rounded border p-2 text-sm " + (step.cp === Number(k) ? "border-warning bg-base-200" : "border-base-300 bg-base-200 hover:border-primary")}>
              <span className="badge badge-warning mr-2">{k}</span><b>{c.label}</b>
              <div className="text-xs opacity-80 mt-1">{c.rule}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
