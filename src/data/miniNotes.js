// প্রজেক্ট ৩ — একদম ছোট "Mini Notes": প্রতিটা ফাইল কোথায় কী কাজে লাগে বোঝার জন্য
const project = {
  slug: "mini-notes-file-map",
  no: 3,
  title: "Mini Notes — ফাইল ম্যাপ প্রজেক্ট",
  level: "শুরু → মধ্যম",
  stack: ["Tauri v2", "React", "Rust State"],
  widget: "filemap",
  intro:
    "এই ছোট অ্যাপে তুমি নাম দিয়ে greet করবে আর নোট যোগ/দেখবে। কোড ছোট, কিন্তু Tauri প্রজেক্টের প্রায় সব গুরুত্বপূর্ণ ফাইল এখানে আছে। ইন্টারেক্টিভ ফাইল ম্যাপে প্রতিটা ফাইলে ক্লিক করে দেখো সেটা কখন চলে ও কে কাকে ডাকে।",
  steps: [
    { title: "প্রজেক্ট তৈরি", desc: "npm create tauri-app@latest → mini-notes, React + JavaScript।" },
    { title: "ফাইল ম্যাপ দেখো", desc: "কোন ফাইল কী করে তা আগে বুঝে নাও (ইন্টারেক্টিভ ম্যাপ)।" },
    { title: "Rust: state ও command", desc: "lib.rs এ Notes state, greet, add_note, list_notes।" },
    { title: "Permission", desc: "capabilities/default.json এ কী অনুমতি আছে তা দেখো।" },
    { title: "React: App.jsx", desc: "input, বাটন, invoke(), নোটের তালিকা।" },
    { title: "চালাও", desc: "npm run tauri dev।" },
  ],
  setupCommands: [
    "npm create tauri-app@latest   # mini-notes, React, JavaScript, npm",
    "cd mini-notes",
    "npm install",
    "npm run tauri dev",
  ],
  // files = সম্পাদনার ক্রম (n)। edit=false মানে সাধারণত হাত দেওয়া লাগে না
  files: [
    {
      n: 1,
      path: "src-tauri/src/lib.rs",
      lang: "rust",
      side: "Rust",
      edit: true,
      role: "আপনার Rust logic ও command। সবচেয়ে গুরুত্বপূর্ণ Rust ফাইল।",
      when: "অ্যাপ চালু হলে run() চলে; React invoke করলে সংশ্লিষ্ট command চলে।",
      calls: ["main.rs ডাকে lib.rs এর run()"],
      why: "প্রথমে backend। এখানে command এর নাম ঠিক করলে React এর কাজ সহজ হয়।",
      code: `// src-tauri/src/lib.rs
use std::sync::Mutex;
use tauri::State;

// অ্যাপের "memory": নোটগুলোর তালিকা। Mutex = একসাথে একজনই বদলাতে পারবে
struct Notes(Mutex<Vec<String>>);

// command ১: নাম নিয়ে শুভেচ্ছা ফেরত
#[tauri::command]
fn greet(name: String) -> String {
    format!("হ্যালো, {}! Rust থেকে বলছি 🦀", name)
}

// command ২: নোট যোগ। State<Notes> মানে Tauri নিজে state টা দিয়ে দেয়
#[tauri::command]
fn add_note(text: String, notes: State<Notes>) -> Result<usize, String> {
    if text.trim().is_empty() {
        return Err("খালি নোট যোগ করা যায় না".into());
    }
    let mut list = notes.0.lock().map_err(|e| e.to_string())?;
    list.push(text);
    Ok(list.len()) // এখন মোট কয়টা নোট
}

// command ৩: সব নোট ফেরত (Vec<String> → JS এ Array)
#[tauri::command]
fn list_notes(notes: State<Notes>) -> Vec<String> {
    notes.0.lock().unwrap().clone()
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .manage(Notes(Mutex::new(Vec::new()))) // state রেজিস্টার
        .invoke_handler(tauri::generate_handler![greet, add_note, list_notes])
        .run(tauri::generate_context!())
        .expect("Tauri চালু করা যায়নি");
}`,
    },
    {
      n: 2,
      path: "src/App.jsx",
      lang: "jsx",
      side: "React ↔ Rust",
      edit: true,
      role: "UI। ফর্ম, বাটন এবং invoke() দিয়ে Rust ডাকা।",
      when: "main.jsx এটাকে render করে। বাটন চাপলে invoke() চলে।",
      calls: ["invoke('greet')", "invoke('add_note')", "invoke('list_notes')"],
      why: "Rust এর তিনটা command তৈরি, এখন UI থেকে ডাকো।",
      code: `// src/App.jsx
import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";

export default function App() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState("");

  // অ্যাপ খোলার সময় একবার নোট লোড করো
  useEffect(() => { loadNotes(); }, []);

  async function loadNotes() {
    const list = await invoke("list_notes"); // Rust → Array
    setNotes(list);
  }

  async function handleGreet() {
    // Rust parameter name: String  ⇒  JS key: name
    setGreeting(await invoke("greet", { name }));
  }

  async function handleAdd() {
    setError("");
    try {
      await invoke("add_note", { text }); // Rust এ Ok হলে এখানে আসে
      setText("");
      loadNotes(); // তালিকা নতুন করে আনো
    } catch (e) {
      setError(String(e)); // Rust এর Err("...")
    }
  }

  return (
    <div style={{ maxWidth: 420, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h2>Mini Notes</h2>

      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="তোমার নাম" />
      <button onClick={handleGreet}>Greet</button>
      <p>{greeting}</p>

      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="নতুন নোট" />
      <button onClick={handleAdd}>Add</button>
      {error && <p style={{ color: "crimson" }}>{error}</p>}

      <ul>{notes.map((n, i) => <li key={i}>{n}</li>)}</ul>
    </div>
  );
}`,
    },
    {
      n: 3,
      path: "src-tauri/capabilities/default.json",
      lang: "json",
      side: "Config",
      edit: false,
      role: "Permission তালিকা: window কোন কোন core কাজ করতে পারবে।",
      when: "Build/run এর সময় Tauri পড়ে। অনুমতি না থাকলে plugin বা API ব্লক হয়।",
      calls: [],
      why: "নিজের #[tauri::command] এর জন্য আলাদা permission লাগে না, কিন্তু plugin (fs, dialog ইত্যাদি) যোগ করলে এখানে লিখতে হয়।",
      code: `{
  "$schema": "../gen/schemas/desktop-schema.json",
  "identifier": "default",
  "description": "main window এর অনুমতি",
  "windows": ["main"],
  "permissions": [
    "core:default",
    "opener:default"
  ]
}`,
    },
    {
      n: 4,
      path: "src-tauri/tauri.conf.json",
      lang: "json",
      side: "Config",
      edit: false,
      role: "অ্যাপের নাম, window সাইজ, build কমান্ড, bundle।",
      when: "dev ও build দুই সময়ই পড়া হয়। beforeDevCommand এ Vite চালু হয়।",
      calls: ["npm run dev (Vite) চালু করে"],
      why: "অ্যাপ কাজ করার পর title/size বদলাতে এখানে আসো।",
      code: `{
  "productName": "mini-notes",
  "identifier": "com.yourname.mininotes",
  "build": {
    "beforeDevCommand": "npm run dev",       // tauri dev এ আগে React সার্ভার চালু
    "devUrl": "http://localhost:1420",       // window এ এই URL লোড হয়
    "beforeBuildCommand": "npm run build",   // tauri build এ আগে React build
    "frontendDist": "../dist"                // build হওয়া React ফাইল
  },
  "app": {
    "windows": [{ "title": "Mini Notes", "width": 480, "height": 640 }]
  },
  "bundle": { "active": true, "targets": "all", "icon": ["icons/icon.png"] }
}`,
    },
    {
      n: 5,
      path: "src-tauri/Cargo.toml",
      lang: "toml",
      side: "Rust",
      edit: false,
      role: "Rust এর package.json। dependency (crate) এর তালিকা।",
      when: "cargo build এর সময়। নতুন crate দরকার হলে এখানে যোগ করবে।",
      calls: [],
      why: "পরের প্রজেক্টগুলোতে (argon2, sqlx ইত্যাদি) এখানেই dependency বসাতে হবে।",
      code: `[package]
name = "mini-notes"
version = "0.1.0"
edition = "2021"

[lib]
name = "mini_notes_lib"
crate-type = ["staticlib", "cdylib", "rlib"]

[build-dependencies]
tauri-build = { version = "2", features = [] }

[dependencies]
tauri = { version = "2", features = [] }
tauri-plugin-opener = "2"
serde = { version = "1", features = ["derive"] }
serde_json = "1"`,
    },
    {
      n: 6,
      path: "src-tauri/src/main.rs",
      lang: "rust",
      side: "Rust",
      edit: false,
      role: "Rust এর entry point। শুধু lib.rs এর run() ডাকে।",
      when: "exe চালু হওয়ার সাথে সাথে প্রথমে চলে।",
      calls: ["lib.rs → run()"],
      why: "সাধারণত হাত দিতে হয় না।",
      code: `// src-tauri/src/main.rs
// release এ Windows এ আলাদা কালো console window দেখাবে না
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    mini_notes_lib::run(); // Cargo.toml এর [lib] name এখানে
}`,
    },
    {
      n: 7,
      path: "src/main.jsx",
      lang: "jsx",
      side: "React",
      edit: false,
      role: "React এর entry point। App কে index.html এর #root এ বসায়।",
      when: "window এ HTML লোড হলে চলে।",
      calls: ["App.jsx কে render করে"],
      why: "সাধারণত হাত দিতে হয় না।",
      code: `// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`,
    },
    {
      n: 8,
      path: "index.html",
      lang: "html",
      side: "React",
      edit: false,
      role: "একমাত্র HTML পেজ। #root div আর main.jsx script থাকে।",
      when: "Tauri window প্রথমে এই পেজ খোলে।",
      calls: ["src/main.jsx লোড করে"],
      why: "সাধারণত হাত দিতে হয় না।",
      code: `<!doctype html>
<html lang="bn">
  <head>
    <meta charset="UTF-8" />
    <title>Mini Notes</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`,
    },
    {
      n: 9,
      path: "vite.config.js",
      lang: "js",
      side: "Config",
      edit: false,
      role: "Vite (React build tool) এর config। port 1420 Tauri এর জন্য।",
      when: "npm run dev / build এর সময়।",
      calls: [],
      why: "port মিলে না গেলে Tauri window ফাঁকা দেখায়।",
      code: `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  clearScreen: false,
  server: { port: 1420, strictPort: true }, // tauri.conf.json এর devUrl এর সাথে মেলা চাই
});`,
    },
    {
      n: 10,
      path: "package.json",
      lang: "json",
      side: "Config",
      edit: false,
      role: "Node dependency ও script (dev, build, tauri)।",
      when: "npm install, npm run ... এর সময়।",
      calls: [],
      why: "নতুন JS লাইব্রেরি এখানে আসে।",
      code: `{
  "name": "mini-notes",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "tauri": "tauri"            // npm run tauri dev ⇒ এই script
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "@tauri-apps/api": "^2",    // invoke() এখান থেকে আসে
    "@tauri-apps/plugin-opener": "^2"
  },
  "devDependencies": {
    "@tauri-apps/cli": "^2",
    "@vitejs/plugin-react": "^4.3.1",
    "vite": "^5.4.0"
  }
}`,
    },
  ],
  connection: {
    explain: [
      "invoke(\"add_note\", { text }) → Rust এর add_note(text: String, notes: State<Notes>)।",
      "State<Notes> JS থেকে পাঠাতে হয় না। Tauri নিজে .manage(...) করা state ইনজেক্ট করে।",
      "Result<usize, String>: Ok(সংখ্যা) → await এর মান; Err(msg) → catch।",
      "Vec<String> রিটার্ন করলে JS এ সরাসরি Array পাও।",
    ],
    rustTitle: "Rust (lib.rs)",
    rust: `#[tauri::command]
fn add_note(text: String, notes: State<Notes>) -> Result<usize, String> { /* ... */ }

.manage(Notes(Mutex::new(Vec::new())))
.invoke_handler(tauri::generate_handler![greet, add_note, list_notes])`,
    reactTitle: "React (App.jsx)",
    react: `await invoke("add_note", { text });      // State পাঠাতে হয় না
const list = await invoke("list_notes"); // ["নোট ১", "নোট ২"]`,
  },
  example: {
    title: "পূর্ণ উদাহরণ: একটা নোট যোগ করা",
    flow: [
      "১) exe চালু → main.rs → lib.rs এর run() → window খোলে (tauri.conf.json এর সেটিং)",
      "২) window index.html লোড করে → main.jsx → App.jsx",
      "৩) App খুলতেই useEffect → invoke(\"list_notes\") → খালি তালিকা",
      "৪) তুমি 'দুধ কিনব' লিখে Add চাপো → invoke(\"add_note\", {text})",
      "৫) Rust Notes state এ push করে Ok(1) ফেরত দেয়",
      "৬) React loadNotes() আবার ডাকে → তালিকায় নোট দেখায়",
    ],
    runCommands: ["npm run tauri dev"],
    output: "নোটগুলো Rust এর memory তে থাকে; অ্যাপ বন্ধ করলে হারায় (ডেটাবেস দেখতে পরের প্রজেক্টে যাও)।",
  },
  troubleshoot: [
    ["Window ফাঁকা", "vite.config.js এর port ও tauri.conf.json এর devUrl মিলিয়ে দেখো"],
    ["command not found", "generate_handler! এ নাম যোগ করেছ কিনা দেখো"],
    ["state error", ".manage(...) বাদ পড়লে State<Notes> পাওয়া যাবে না"],
  ],
  quiz: [
    { q: "অ্যাপ চালু হলে সবার আগে কোন Rust ফাইল চলে?", options: ["lib.rs", "main.rs", "Cargo.toml"], answer: 1 },
    { q: "নতুন Rust crate কোথায় যোগ করবে?", options: ["package.json", "Cargo.toml", "vite.config.js"], answer: 1 },
    { q: "State<Notes> কি JS থেকে পাঠাতে হয়?", options: ["হ্যাঁ", "না, Tauri নিজে দেয়", "শুধু release এ"], answer: 1 },
  ],
};

export default project;
