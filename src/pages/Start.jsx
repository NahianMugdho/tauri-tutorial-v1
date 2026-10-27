// Start.jsx — সাইটের শুরু: ০) Tauri প্রজেক্ট কীভাবে বানাবে, ফাইল স্ট্রাকচার, React↔Rust সংযোগের অ্যানিমেশন
// ট্যাব: ১) প্রজেক্ট তৈরি ২) ফাইল স্ট্রাকচার ৩) React↔Rust অ্যানিমেশন
import { useState } from "react";
import { Link } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";
import ProjectStructure from "../labs/ProjectStructure";
import CommAnimation from "../labs/CommAnimation";
import { projects } from "../data/projects";
import useProgress from "../hooks/useProgress";

const TABS = [
  ["create", "১. প্রজেক্ট তৈরি"],
  ["structure", "২. ফাইল স্ট্রাকচার"],
  ["comm", "৩. React ↔ Rust অ্যানিমেশন"],
];

// প্রশ্ন ও উত্তর (npm create tauri-app@latest)
const PROMPTS = [
  ["Project name", "যেকোনো নাম, যেমন my-app"],
  ["Identifier", "com.তোমার-নাম.my-app (পছন্দমতো দিলেও চলে)"],
  ["Frontend language", "TypeScript / JavaScript"],
  ["Package manager", "npm"],
  ["UI template", "React"],
  ["UI flavor", "JavaScript"],
];

const CHECKS = [
  "Node.js, Rust ও OS এর বিল্ড টুল ইনস্টল করেছি",
  "npm create tauri-app@latest চালিয়ে প্রজেক্ট বানিয়েছি",
  "npm install করেছি",
  "npm run tauri dev দিয়ে ডেমো উইন্ডো খুলেছি",
  "ফাইল স্ট্রাকচার ও সংযোগ বিন্দু (App.jsx, lib.rs, tauri.conf.json) বুঝেছি",
];

export default function Start() {
  const [tab, setTab] = useState("create");
  const { done, toggle, count } = useProgress();
  const checked = count("start:");

  return (
    <div className="space-y-4">
      <section className="space-y-1">
        <span className="badge badge-secondary">শুরু করার আগে</span>
        <h1 className="text-2xl md:text-3xl font-bold">০) Tauri + React: প্রজেক্ট বানানো, ফাইল স্ট্রাকচার ও সংযোগ</h1>
        <p className="opacity-80">
          প্রজেক্ট ১ এ যাওয়ার আগে এই তিনটা বিষয় একবার দেখে নাও: নতুন প্রজেক্ট কীভাবে তৈরি হয়, কোন ফাইল কী করে, আর React ও Rust ঠিক কোন কোন বিন্দুতে জোড়া লাগে।
        </p>
        <progress className="progress progress-success w-full" value={checked} max={CHECKS.length}></progress>
      </section>

      <div role="tablist" className="tabs tabs-boxed flex-wrap">
        {TABS.map(([k, l]) => (
          <button key={k} role="tab" className={"tab " + (tab === k ? "tab-active" : "")} onClick={() => setTab(k)}>{l}</button>
        ))}
      </div>

      {tab === "create" && (
        <div className="space-y-4">
          <section className="space-y-2">
            <h2 className="text-lg font-bold">ক) আগে যা ইনস্টল থাকতে হবে</h2>
            <table className="table table-sm bg-base-200">
              <thead><tr><th>টুল</th><th>Windows</th><th>Linux (Debian/Ubuntu)</th></tr></thead>
              <tbody>
                <tr><td>Node.js (LTS) ও npm</td><td>nodejs.org থেকে</td><td>nodejs ও npm প্যাকেজ, বা nvm</td></tr>
                <tr><td>Rust</td><td>rustup.rs থেকে rustup</td><td>rustup.rs থেকে rustup</td></tr>
                <tr><td>C/C++ বিল্ড টুল</td><td>Visual Studio C++ Build Tools</td><td>build-essential</td></tr>
                <tr><td>WebView</td><td>WebView2 (Windows 10/11 এ সাধারণত আছে)</td><td>libwebkit2gtk-4.1-dev</td></tr>
              </tbody>
            </table>
            <p className="text-sm opacity-80">Linux এ একসাথে সব:</p>
            <CodeBlock lang="bash" title="Linux terminal" code={"sudo apt update\nsudo apt install -y build-essential curl wget file libwebkit2gtk-4.1-dev \\\n  libssl-dev libxdo-dev libayatana-appindicator3-dev librsvg2-dev"} />
            <p className="text-xs opacity-70">iPhone Battery প্রজেক্টে (প্রজেক্ট ৬) ফোনের সাথে যোগাযোগের জন্য অতিরিক্ত usbmuxd লাগে; সেটা ওই প্রজেক্টেই আছে।</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold">খ) প্রজেক্ট তৈরি</h2>
            <CodeBlock lang="bash" title="terminal" code="npm create tauri-app@latest" />
            <p className="text-sm">কমান্ড কয়েকটা প্রশ্ন করবে:</p>
            <table className="table table-sm bg-base-200">
              <thead><tr><th>প্রশ্ন</th><th>উত্তর</th></tr></thead>
              <tbody>{PROMPTS.map(([q, a]) => <tr key={q}><td className="font-mono text-xs">{q}</td><td className="text-sm">{a}</td></tr>)}</tbody>
            </table>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold">গ) প্রথম রান</h2>
            <CodeBlock lang="bash" title="terminal" code={"cd my-app\nnpm install\nnpm run tauri dev"} />
            <p className="text-sm">প্রথমবার Rust এর dependencies কম্পাইল হতে কয়েক মিনিট লাগে। একটা ডেমো উইন্ডো খুললে বুঝবে সেটআপ ঠিক আছে।</p>
            <div className="alert alert-warning text-sm py-2">
              <div className="space-y-1">
                <div><b>npm run dev নয়, npm run tauri dev চালাতে হয়।</b> শুধু dev চালালে Vite সার্ভার ওঠে কিন্তু Tauri উইন্ডো ওঠে না।</div>
                <div><b>অ্যাপ চলে নেটিভ উইন্ডোতে, ব্রাউজারে নয়।</b> ব্রাউজারে localhost:1420 খুললে window.__TAURI_INTERNALS__ থাকে না, তাই invoke করলে <code>Cannot read properties of undefined (reading 'invoke')</code> এরর আসে।</div>
              </div>
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold">ঘ) ইনস্টলার বানানো (build)</h2>
            <CodeBlock lang="bash" title="terminal" code="npm run tauri build" />
            <p className="text-sm">ইনস্টলার পাবে <code>src-tauri/target/release/bundle/</code> এ (Windows: msi, nsis; Linux: deb, appimage)। প্রতিটা OS এর ইনস্টলার সেই OS এই বানাতে হয়।</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold">চেকলিস্ট</h2>
            <ul className="space-y-1">
              {CHECKS.map((c, i) => {
                const key = "start:" + i;
                return (
                  <li key={key} className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="checkbox checkbox-success checkbox-sm" checked={!!done[key]} onChange={() => toggle(key)} />
                    <span>{c}</span>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      )}

      {tab === "structure" && (
        <div className="space-y-3">
          <p className="text-sm opacity-80">নতুন প্রজেক্টে কোন ফোল্ডারে কী থাকে। ফাইলে ক্লিক করে দেখো সেটা কী করে, কখন চলে ও হাত দিতে হবে কিনা।</p>
          <ProjectStructure />
        </div>
      )}

      {tab === "comm" && (
        <div className="space-y-3">
          <p className="text-sm opacity-80">
            React ও Rust সরাসরি কথা বলে না; মাঝে Tauri এর IPC bridge থাকে। ▶ চাপো বা ধাপে ধাপে যাও, আর ①–⑤ বিন্দুগুলো দেখো: এগুলোই সেই জায়গা যেখানে দুই দিকের নাম বা ডেটা মিলতে হয়।
          </p>
          <CommAnimation />
        </div>
      )}

      <div className="flex justify-between pt-4">
        <Link className="btn btn-ghost" to="/">← পাইপলাইন</Link>
        <Link className="btn btn-primary" to={"/project/" + projects[0].slug}>প্রজেক্ট ১ শুরু করো →</Link>
      </div>
    </div>
  );
}
