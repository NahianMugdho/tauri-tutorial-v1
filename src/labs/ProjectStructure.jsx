// ProjectStructure.jsx — নতুন Tauri v2 + React প্রজেক্টের সাধারণ ফাইল স্ট্রাকচার (ইন্টারেক্টিভ)
// ⚡ চিহ্নিত ফাইলগুলোতেই React আর Rust জোড়া লাগে; ক্লিক করলে কাজ, কখন চলে ও কোড দেখাবে।
import { useState } from "react";
import CodeBlock from "../components/CodeBlock";

const SIDE_COLOR = {
  Rust: "badge-warning",
  React: "badge-info",
  Config: "badge-ghost",
  "React ↔ Rust": "badge-accent",
  Generated: "badge-outline",
};

// depth = ইনডেন্টেশন; link = সংযোগ বিন্দু (এই সাইটের React↔Rust অ্যানিমেশনের ①–⑤ এর সাথে মেলে)
const ITEMS = [
  { id: "root", depth: 0, name: "my-app/", dir: true, side: "Config", edit: null,
    role: "প্রজেক্টের রুট। এখান থেকেই npm run tauri dev চালাও (src-tauri এর ভেতর থেকে নয়)।", when: "সব কমান্ড এই ফোল্ডার থেকে।" },

  { id: "pkg", depth: 1, name: "package.json", side: "Config", edit: "মাঝেমধ্যে",
    role: "npm dependency ও স্ক্রিপ্ট। \"tauri\" স্ক্রিপ্ট থাকায় npm run tauri dev কাজ করে।",
    when: "npm install ও npm run ... এর সময়।",
    link: "npm run tauri dev → Tauri CLI → Rust অ্যাপ + Vite একসাথে চালু",
    lang: "json", code: '"scripts": {\n  "dev": "vite",\n  "build": "vite build",\n  "preview": "vite preview",\n  "tauri": "tauri"\n}' },

  { id: "html", depth: 1, name: "index.html", side: "React", edit: "সাধারণত না",
    role: "WebView প্রথমে এই পেজ লোড করে। <div id=\"root\"> এর ভেতরে React বসে।", when: "window খোলার পর প্রথম।",
    lang: "html", code: '<div id="root"></div>\n<script type="module" src="/src/main.jsx"></script>' },

  { id: "vite", depth: 1, name: "vite.config.js", side: "Config", edit: "সাধারণত না",
    role: "Vite সার্ভারের পোর্ট (১৪২০)। tauri.conf.json এর devUrl এর সাথে মিলতে হয়।", when: "npm run dev / build এর সময়।",
    link: "⑤ পোর্ট ১৪২০ ↔ devUrl", lang: "js", code: "server: { port: 1420, strictPort: true }" },

  { id: "public", depth: 1, name: "public/", dir: true, side: "React", edit: "প্রয়োজনে",
    role: "যেসব স্ট্যাটিক ফাইল (আইকন, ছবি) সরাসরি সার্ভ হবে।", when: "build এ dist এ কপি হয়।" },

  { id: "src", depth: 1, name: "src/", dir: true, side: "React", edit: "হ্যাঁ",
    role: "React ফ্রন্টএন্ড। তোমার UI কোড এখানে।", when: "—" },
  { id: "main", depth: 2, name: "main.jsx", side: "React", edit: "সাধারণত না",
    role: "React এর entry। App কে #root এ render করে। Router/Provider বসাতে হলে এখানে।", when: "index.html লোড হলে চলে।",
    lang: "jsx", code: 'ReactDOM.createRoot(document.getElementById("root")).render(\n  <React.StrictMode><App /></React.StrictMode>\n);' },
  { id: "app", depth: 2, name: "App.jsx", side: "React ↔ Rust", edit: "হ্যাঁ", linkPoint: true,
    role: "প্রধান কম্পোনেন্ট। এখানে (বা hooks এ) invoke() দিয়ে Rust কে ডাকা ও listen() দিয়ে ইভেন্ট শোনা হয়।",
    when: "main.jsx render করলে; বাটন চাপলে invoke() চলে।",
    link: "① নাম ② আর্গুমেন্ট ③ ফেরত মান (invoke) ও ④ listen: জাভাস্ক্রিপ্ট দিক",
    lang: "jsx", code: 'import { invoke } from "@tauri-apps/api/core";\n\nasync function greet() {\n  setGreetMsg(await invoke("greet", { name }));\n}' },
  { id: "css", depth: 2, name: "App.css", side: "React", edit: "হ্যাঁ", role: "স্টাইল।", when: "App.jsx এ import থাকলে লোড হয়।" },
  { id: "assets", depth: 2, name: "assets/", dir: true, side: "React", edit: "প্রয়োজনে", role: "import করা ছবি, SVG।", when: "—" },

  { id: "tauri", depth: 1, name: "src-tauri/", dir: true, side: "Rust", edit: "হ্যাঁ",
    role: "Rust ব্যাকএন্ড ও Tauri কনফিগ। তোমার Rust কোড ও অনুমতির ফোল্ডার এখানে।", when: "—" },
  { id: "cargo", depth: 2, name: "Cargo.toml", side: "Config", edit: "নতুন crate লাগলে",
    role: "Rust এর package.json: dependency ও [lib] নাম। main.rs এ <নাম>_lib::run() এই নাম থেকে আসে।", when: "cargo build/check এর সময়।",
    lang: "toml", code: '[lib]\nname = "my_app_lib"\ncrate-type = ["staticlib", "cdylib", "rlib"]\n\n[dependencies]\ntauri = { version = "2", features = [] }\ntauri-plugin-opener = "2"\nserde = { version = "1", features = ["derive"] }\nserde_json = "1"' },
  { id: "build", depth: 2, name: "build.rs", side: "Rust", edit: "কখনো না",
    role: "Tauri এর build স্ক্রিপ্ট; tauri_build::build() ডাকে।", when: "cargo build এর আগে।" },
  { id: "conf", depth: 2, name: "tauri.conf.json", side: "Config", edit: "হ্যাঁ (নাম, window, identifier)", linkPoint: true,
    role: "অ্যাপের নাম, window এর মাপ, আইকন, আর কোন ফ্রন্টএন্ড দেখাবে।",
    when: "dev ও build দুই সময়ই পড়া হয়।",
    link: "⑤ devUrl (dev) / frontendDist (build): window ↔ React এর লিংক",
    lang: "json", code: '"build": {\n  "beforeDevCommand": "npm run dev",\n  "devUrl": "http://localhost:1420",\n  "beforeBuildCommand": "npm run build",\n  "frontendDist": "../dist"\n}' },
  { id: "caps", depth: 2, name: "capabilities/", dir: true, side: "Config", edit: "প্লাগইন লাগলে",
    role: "JS কোন Tauri API ডাকতে পারবে তার অনুমতির ফোল্ডার।", when: "—" },
  { id: "capjson", depth: 3, name: "default.json", side: "Config", edit: "প্লাগইন লাগলে",
    role: "core ও প্লাগইন API এর অনুমতি। প্লাগইন (যেমন opener) JS থেকে ডাকতে এখানে permission লাগে। ডিফল্টে নিজের #[tauri::command] আলাদা অনুমতি ছাড়াই ডাকা যায়।",
    when: "build/run এর সময় Tauri পড়ে; অনুমতি না থাকলে প্লাগইন কল ব্লক হয়।",
    lang: "json", code: '{\n  "identifier": "default",\n  "windows": ["main"],\n  "permissions": ["core:default", "opener:default"]\n}' },
  { id: "icons", depth: 2, name: "icons/", dir: true, side: "Config", edit: "নিজের আইকন চাইলে",
    role: "ইনস্টলার ও window এর আইকন। বদলাতে: npm run tauri icon my-icon.png (1024×1024 PNG)।", when: "bundle তৈরির সময়।" },
  { id: "rsrc", depth: 2, name: "src/", dir: true, side: "Rust", edit: "হ্যাঁ", role: "Rust সোর্স কোড।", when: "—" },
  { id: "mainrs", depth: 3, name: "main.rs", side: "Rust", edit: "কখনো না",
    role: "exe এর entry। শুধু lib.rs এর run() ডাকে (Android/iOS সমর্থনের জন্য আলাদা করা)।", when: "অ্যাপ চালু হওয়ার সাথে সাথে।",
    lang: "rust", code: "fn main() {\n    my_app_lib::run()\n}" },
  { id: "librs", depth: 3, name: "lib.rs", side: "React ↔ Rust", edit: "হ্যাঁ", linkPoint: true,
    role: "তোমার Rust কোড এখানে: #[tauri::command] function, তাদের generate_handler! এ রেজিস্টার, আর emit() দিয়ে ইভেন্ট পাঠানো।",
    when: "অ্যাপ চালু হলে run() চলে; React invoke করলে সংশ্লিষ্ট command চলে।",
    link: "① নাম ② আর্গুমেন্ট ③ ফেরত মান ও ④ emit: Rust দিক",
    lang: "rust", code: '#[tauri::command]\nfn greet(name: &str) -> String {\n    format!("Hello, {}!", name)\n}\n\n#[cfg_attr(mobile, tauri::mobile_entry_point)]\npub fn run() {\n    tauri::Builder::default()\n        .plugin(tauri_plugin_opener::init())\n        .invoke_handler(tauri::generate_handler![greet])   // ← নাম এখানে না থাকলে invoke ব্যর্থ\n        .run(tauri::generate_context!())\n        .expect("error while running tauri application");\n}' },

  { id: "gen", depth: 1, name: "node_modules/, dist/, src-tauri/target/, src-tauri/gen/", side: "Generated", edit: "কখনো না",
    role: "নিজে তৈরি হয়: npm install, build আউটপুট, Rust বিল্ড, Tauri এর জেনারেট করা schema। কমিট করবে না (.gitignore এ থাকে)।", when: "install/build এর সময় তৈরি হয়।" },
];

export default function ProjectStructure() {
  const [sel, setSel] = useState("app");
  const [onlyLinks, setOnlyLinks] = useState(false);
  const cur = ITEMS.find((i) => i.id === sel);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-3">
        <label className="label cursor-pointer gap-2">
          <input type="checkbox" className="toggle toggle-warning toggle-sm" checked={onlyLinks} onChange={(e) => setOnlyLinks(e.target.checked)} />
          <span className="label-text">শুধু সংযোগ বিন্দু (⚡) হাইলাইট করো</span>
        </label>
        <span className="text-xs opacity-70">⚡ = যেখানে React আর Rust জোড়া লাগে: App.jsx, lib.rs, tauri.conf.json</span>
      </div>

      <div className="grid md:grid-cols-5 gap-4">
        <div className="card bg-base-200 border border-base-300 md:col-span-2">
          <div className="card-body p-3 gap-0">
            {ITEMS.map((it) => {
              const dim = onlyLinks && !it.linkPoint;
              return (
                <button key={it.id} onClick={() => setSel(it.id)}
                  style={{ paddingLeft: 8 + it.depth * 16 }}
                  className={"text-left rounded py-1 pr-2 text-sm font-mono flex items-center gap-2 border " + (sel === it.id ? "border-primary bg-base-100" : "border-transparent hover:bg-base-100") + (dim ? " opacity-30" : "")}>
                  <span>{it.dir ? "📁" : "📄"}</span>
                  <span className="break-all">{it.name}</span>
                  {it.linkPoint && <span title="সংযোগ বিন্দু">⚡</span>}
                </button>
              );
            })}
          </div>
        </div>

        <div className="md:col-span-3 space-y-3">
          <div className="card bg-base-200 border border-base-300">
            <div className="card-body gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-mono font-bold break-all">{cur.name}</h3>
                <span className={"badge badge-sm " + (SIDE_COLOR[cur.side] || "")}>{cur.side}</span>
                {cur.edit && <span className="badge badge-sm badge-outline">হাত দেবে: {cur.edit}</span>}
                {cur.linkPoint && <span className="badge badge-sm badge-warning">⚡ সংযোগ বিন্দু</span>}
              </div>
              <p><b>কাজ:</b> {cur.role}</p>
              {cur.when && <p><b>কখন চলে:</b> {cur.when}</p>}
              {cur.link && <p className="text-sm"><b>সংযোগ:</b> {cur.link}</p>}
            </div>
          </div>
          {cur.code && <CodeBlock code={cur.code} lang={cur.lang} title={cur.name} />}
        </div>
      </div>
    </div>
  );
}
