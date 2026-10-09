// প্রজেক্ট ২ — PDF ২: পুরনো Rust CLI calculator কে Tauri + React অ্যাপে রূপান্তর
const project = {
  slug: "calculator-cli-to-tauri",
  no: 2,
  title: "CLI Calculator → Tauri অ্যাপ",
  level: "শুরু",
  stack: ["Tauri", "React (JSX)", "Rust (i32)"],
  widget: "calc-i32",
  intro:
    "তোমার Rust CLI কোডের add/sub/mul/div হুবহু রেখে শুধু input() বাদ দাও। stdin এর বদলে React এর input থেকে ডেটা আসবে। এখানে menu-style (1=Add, 2=Sub...) অপারেশন সিলেক্ট করা হয়।",
  steps: [
    { title: "Prerequisites", desc: "Rust, Node.js LTS, Tauri CLI, Windows এ C++ Build Tools + WebView2।" },
    { title: "প্রজেক্ট তৈরি", desc: "npm create tauri-app@latest, React + JavaScript বেছে নাও।" },
    { title: "Rust Backend", desc: "পুরনো add/sub/mul/div রাখো, শুধু calculate command যোগ করো।" },
    { title: "React Frontend", desc: "App.jsx এ input, অপারেশন বাটন এবং invoke()।" },
    { title: "Run ও Build", desc: "npm run tauri dev, npm run tauri build।" },
  ],
  setupCommands: [
    "cargo install tauri-cli",
    "npm create tauri-app@latest   # name: calculator-app, React, JavaScript, npm",
    "cd calculator-app",
    "npm install",
    "npm run tauri dev",
  ],
  files: [
    {
      n: 1,
      path: "(আগের) CLI main.rs — তুলনার জন্য",
      lang: "rust",
      side: "Rust",
      role: "এটা পুরনো CLI কোড, যা আমরা রূপান্তর করব। শুধু বোঝার জন্য, কোথাও বসাতে হবে না।",
      why: "আগে দেখো কী বদলাবে। input() বাদ, বাকি logic থাকবে।",
      code: `// পুরনো CLI ভার্সন (উদাহরণ)
use std::io;

fn read_i32() -> i32 {
    let mut s = String::new();
    io::stdin().read_line(&mut s).unwrap(); // ← এটা Tauri তে লাগবে না
    s.trim().parse().unwrap()
}

fn main() {
    println!("1=Add 2=Sub 3=Mul 4=Div");
    let val = read_i32();
    let a = read_i32();
    let b = read_i32();
    let result = match val {
        1 => a + b,
        2 => a - b,
        3 => a * b,
        4 => a / b,
        _ => 0,
    };
    println!("Result = {}", result); // ← এটা হবে React এ দেখানো
}`,
    },
    {
      n: 2,
      path: "src-tauri/src/lib.rs  (PDF এ main.rs)",
      lang: "rust",
      side: "Rust",
      role: "calculate command। React থেকে val, a, b আসে, String result ফেরত যায়।",
      why: "backend আগে। নতুন Tauri v2 টেমপ্লেটে logic lib.rs এ থাকে; PDF এর পুরনো v1 টেমপ্লেটে main.rs এ ছিল।",
      code: `// src-tauri/src/lib.rs   (Tauri v1 হলে এই কোড main.rs এ বসবে)

// এই চারটা function হুবহু CLI থেকে নেওয়া
fn add(a: i32, b: i32) -> i32 { a + b }
fn sub(a: i32, b: i32) -> i32 { a - b }
fn mul(a: i32, b: i32) -> i32 { a * b }
fn div(a: i32, b: i32) -> i32 {
    if b == 0 { return 0; } // division by zero check (0 ফেরত দেয়, error নয়)
    a / b
}

// ★ এই function টাই React থেকে call হবে ★
#[tauri::command]
fn calculate(val: i32, a: i32, b: i32) -> String {
    let result = match val {
        1 => add(a, b),
        2 => sub(a, b),
        3 => mul(a, b),
        4 => div(a, b),
        _ => return "Invalid operation".to_string(),
    };
    result.to_string() // সংখ্যাকে text বানিয়ে React কে পাঠাও
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        // command register করো, নইলে React ডাকতে পারবে না
        .invoke_handler(tauri::generate_handler![calculate])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}`,
    },
    {
      n: 3,
      path: "src/App.jsx",
      lang: "jsx",
      side: "React ↔ Rust",
      role: "UI + invoke। CLI এর input() এর কাজ এখন React এর input ও state করে।",
      why: "Rust এর command এর নাম ও parameter ঠিক হয়ে গেছে, এখন React এ ডাকো।",
      code: `// src/App.jsx
import { useState } from "react";
// Tauri v2: "@tauri-apps/api/core"   (PDF এর v1 এ ছিল "@tauri-apps/api/tauri")
import { invoke } from "@tauri-apps/api/core";

function App() {
  const [a, setA] = useState("");           // প্রথম সংখ্যা (text হিসেবে)
  const [b, setB] = useState("");           // দ্বিতীয় সংখ্যা
  const [operation, setOperation] = useState(1); // 1=Add ... 4=Div
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // বাটনের তালিকা। val = Rust এর match এর সংখ্যা
  const operations = [
    { val: 1, label: "Add (+)" },
    { val: 2, label: "Subtract (−)" },
    { val: 3, label: "Multiply (×)" },
    { val: 4, label: "Divide (÷)" },
  ];

  async function handleCalculate() {
    setError("");
    const numA = parseInt(a);
    const numB = parseInt(b);

    // frontend validation: ভুল input Rust এ যাওয়ার আগেই আটকাও
    if (isNaN(numA) || isNaN(numB)) {
      setError("সঠিক number দিন!");
      return;
    }
    if (operation === 4 && numB === 0) {
      setError("শূন্য দিয়ে ভাগ করা যাবে না!");
      return;
    }

    // ★ Rust এর calculate() function call হচ্ছে এখানে ★
    const res = await invoke("calculate", {
      val: operation, // Rust parameter: val
      a: numA,        // Rust parameter: a
      b: numB,        // Rust parameter: b
    });

    setResult(res); // Rust এর String ফেরত
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Calculator</h1>

      <div style={styles.row}>
        <input style={styles.input} type="number" placeholder="প্রথম সংখ্যা (a)"
          value={a} onChange={(e) => setA(e.target.value)} />
        <input style={styles.input} type="number" placeholder="দ্বিতীয় সংখ্যা (b)"
          value={b} onChange={(e) => setB(e.target.value)} />
      </div>

      <div style={styles.opRow}>
        {operations.map((op) => (
          <button key={op.val}
            style={{
              ...styles.opBtn,
              background: operation === op.val ? "#185FA5" : "transparent",
              color: operation === op.val ? "#fff" : "inherit",
            }}
            onClick={() => setOperation(op.val)}>
            {op.label}
          </button>
        ))}
      </div>

      <button style={styles.calcBtn} onClick={handleCalculate}>Calculate</button>

      {error && <p style={styles.error}>{error}</p>}
      {result !== null && !error && (
        <div style={styles.result}>Result = <strong>{result}</strong></div>
      )}
    </div>
  );
}

// inline style object (আলাদা CSS ফাইল লাগছে না)
const styles = {
  container: { maxWidth: 420, margin: "60px auto", padding: 32, borderRadius: 16,
    border: "1px solid #e0e0e0", fontFamily: "sans-serif" },
  title: { textAlign: "center", marginBottom: 24, fontSize: 24 },
  row: { display: "flex", gap: 12, marginBottom: 16 },
  input: { flex: 1, padding: "10px 14px", borderRadius: 8, border: "1px solid #ccc", fontSize: 16 },
  opRow: { display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" },
  opBtn: { flex: 1, padding: "8px 4px", borderRadius: 8, border: "1px solid #ccc",
    cursor: "pointer", fontSize: 13, minWidth: 80 },
  calcBtn: { width: "100%", padding: 12, background: "#185FA5", color: "#fff",
    border: "none", borderRadius: 8, fontSize: 16, cursor: "pointer" },
  error: { color: "#E24B4A", textAlign: "center", marginTop: 12 },
  result: { textAlign: "center", marginTop: 20, fontSize: 22, padding: 16,
    background: "#EAF3DE", color: "#222", borderRadius: 8 },
};

export default App;`,
    },
  ],
  connection: {
    explain: [
      "CLI তে input() ছিল stdin থেকে; এখন React এর state (a, b, operation) সেই কাজ করে।",
      "match val { 1 => add... } হুবহু একই আছে, শুধু #[tauri::command] এর ভেতরে।",
      "println! এর বদলে Rust String ফেরত দেয়, React সেটা setResult দিয়ে দেখায়।",
      "প্রজেক্ট ১ এর সাথে পার্থক্য: এখানে Result<..> নেই, তাই div by zero এ Rust 0 ফেরত দেয়। ভুল ধরাটা frontend এ করা হয়েছে।",
      "ভালো অভ্যাস হলো প্রজেক্ট ১ এর মতো Result<T, String> ব্যবহার করা, যাতে Rust নিজেই error জানায়।",
    ],
    rustTitle: "Rust",
    rust: `#[tauri::command]
fn calculate(val: i32, a: i32, b: i32) -> String { /* ... */ }

.invoke_handler(tauri::generate_handler![calculate])`,
    reactTitle: "React",
    react: `const res = await invoke("calculate", { val: 1, a: 7, b: 3 });
// res = "10"  (Rust থেকে String)`,
  },
  example: {
    title: "পূর্ণ উদাহরণ: 7 × 3",
    flow: [
      "১) a=7, b=3, Multiply বাটন চাপো → operation=3",
      "২) Calculate চাপলে validation পাস",
      "৩) invoke(\"calculate\", {val:3, a:7, b:3}) → Rust এ match 3 => mul(7,3)",
      "৪) Rust \"21\" ফেরত দেয়",
      "৫) setResult(\"21\") → স্ক্রিনে Result = 21",
    ],
    runCommands: ["npm run tauri dev", "npm run tauri build   # installer: src-tauri/target/release/bundle/"],
    output: "Desktop window খুলবে, terminal লাগবে না।",
  },
  troubleshoot: [
    ["Rust dependency সমস্যা", "cd src-tauri && cargo update"],
    ["node_modules সমস্যা", "rm -rf node_modules && npm install"],
    ["import error @tauri-apps/api/tauri", "Tauri v2 তে এটা /core হয়েছে"],
  ],
  quiz: [
    { q: "CLI এর input() এর বদলে এখানে কী কাজ করে?", options: ["React state ও input", "println!", "cargo"], answer: 0 },
    { q: "div(a, 0) এ এই প্রজেক্টের Rust কী ফেরত দেয়?", options: ["Err", "0", "panic"], answer: 1 },
  ],
};

export default project;
