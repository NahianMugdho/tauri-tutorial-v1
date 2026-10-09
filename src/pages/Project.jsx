// Project.jsx — একটা প্রজেক্টের পেজ
// ট্যাব: ১) ধাপ ২) ফাইল ও কোড (ক্রম) ৩) React↔Rust সংযোগ ৪) পূর্ণ উদাহরণ ৫) ল্যাব ৬) কুইজ
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { findProject, projects } from "../data/projects";
import CodeBlock from "../components/CodeBlock";
import Quiz from "../components/Quiz";
import FileMap from "../labs/FileMap";
import InvokeSimulator from "../labs/InvokeSimulator";
import TokenLab from "../labs/TokenLab";
import RateLimitLab from "../labs/RateLimitLab";
import TotpLab from "../labs/TotpLab";
import CacheLab from "../labs/CacheLab";
import Argon2Lab from "../labs/Argon2Lab";
import NotFound from "./NotFound";
import useProgress from "../hooks/useProgress";

const TABS = [
  ["steps", "১. ধাপ"],
  ["files", "২. ফাইল ও কোড"],
  ["connect", "৩. React↔Rust"],
  ["example", "৪. পূর্ণ উদাহরণ"],
  ["lab", "৫. ল্যাব"],
  ["quiz", "৬. কুইজ"],
];

export default function Project() {
  const { slug } = useParams();
  const p = findProject(slug);
  const [tab, setTab] = useState("steps");
  const [openFile, setOpenFile] = useState(0);
  const { done, toggle, count } = useProgress();

  if (!p) return <NotFound />;
  const idx = projects.indexOf(p);
  const next = projects[idx + 1];
  const fin = count("file:" + p.slug);

  return (
    <div className="space-y-4">
      <div>
        <div className="flex gap-2 items-center flex-wrap">
          <span className="badge badge-primary">প্রজেক্ট {p.no}</span>
          <span className="badge badge-outline">{p.level}</span>
          {p.stack.map((s) => <span key={s} className="badge badge-ghost">{s}</span>)}
        </div>
        <h1 className="text-2xl font-bold mt-2">{p.title}</h1>
        <p className="opacity-80 mt-1">{p.intro}</p>
        <progress className="progress progress-success w-full mt-2" value={fin} max={p.files.length}></progress>
      </div>

      <div role="tablist" className="tabs tabs-boxed flex-wrap">
        {TABS.map(([k, l]) => (
          <button key={k} role="tab" className={"tab " + (tab === k ? "tab-active" : "")} onClick={() => setTab(k)}>{l}</button>
        ))}
      </div>

      {/* ১) ধাপ */}
      {tab === "steps" && (
        <div className="space-y-3">
          <ol className="steps steps-vertical w-full">
            {p.steps.map((s, i) => (
              <li key={i} className="step step-primary text-left">
                <div className="text-left ml-2">
                  <div className="font-semibold">{s.title}</div>
                  <div className="text-sm opacity-80">{s.desc}</div>
                </div>
              </li>
            ))}
          </ol>
          <h3 className="font-bold">শুরুর কমান্ড</h3>
          <CodeBlock code={p.setupCommands.join("\n")} lang="bash" title="terminal" />
        </div>
      )}

      {/* ২) ফাইল ও কোড, সঠিক ক্রমে */}
      {tab === "files" && (
        <div className="space-y-3">
          <div className="alert alert-info text-sm py-2">
            ফাইলগুলো যে ক্রমে লিখবে সেই ক্রমে সাজানো। লেখা শেষ হলে ✔ দাও, উপরে প্রগ্রেস বাড়বে।
          </div>
          {p.files.map((f, i) => {
            const key = "file:" + p.slug + ":" + f.n;
            const open = openFile === i;
            return (
              <div key={f.n} className={"card border " + (done[key] ? "border-success bg-base-200" : "border-base-300 bg-base-200")}>
                <div className="card-body p-3 gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <input type="checkbox" className="checkbox checkbox-success checkbox-sm" checked={!!done[key]} onChange={() => toggle(key)} />
                    <span className="badge badge-primary">ধাপ {f.n}</span>
                    <button className="font-mono text-sm font-bold text-left flex-1 break-all" onClick={() => setOpenFile(open ? -1 : i)}>{f.path}</button>
                    <span className="badge badge-outline badge-sm">{f.side}</span>
                    <button className="btn btn-ghost btn-xs" onClick={() => setOpenFile(open ? -1 : i)}>{open ? "বন্ধ" : "খোলো"}</button>
                  </div>
                  <p className="text-sm"><b>কাজ:</b> {f.role}</p>
                  {open && (
                    <>
                      <p className="text-sm opacity-80">💡 <b>কেন এখন?</b> {f.why}</p>
                      <CodeBlock code={f.code} lang={f.lang} title={f.path} />
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ৩) React ↔ Rust সংযোগ */}
      {tab === "connect" && (
        <div className="space-y-3">
          <h2 className="text-lg font-bold">React আর Rust যেখানে জোড়া লাগে</h2>
          <ul className="list-disc ml-5 space-y-1 text-sm">
            {p.connection.explain.map((e, i) => <li key={i}>{e}</li>)}
          </ul>
          <div className="grid md:grid-cols-2 gap-3">
            <CodeBlock code={p.connection.react} lang="js" title={p.connection.reactTitle} />
            <CodeBlock code={p.connection.rust} lang="rust" title={p.connection.rustTitle} />
          </div>
          <div className="bg-base-200 rounded p-3 text-sm border border-base-300">
            <b>নামের নিয়ম মনে রাখো:</b> command এর নাম হুবহু এক; Rust এ snake_case (access_token) ↔ JS এ camelCase (accessToken); Rust এর Ok ↔ await এর মান; Rust এর Err ↔ catch।
          </div>
        </div>
      )}

      {/* ৪) পূর্ণ উদাহরণ */}
      {tab === "example" && (
        <div className="space-y-3">
          <h2 className="text-lg font-bold">{p.example.title}</h2>
          <ol className="space-y-2">
            {p.example.flow.map((f, i) => <li key={i} className="p-2 bg-base-200 rounded border border-base-300 text-sm">{f}</li>)}
          </ol>
          <h3 className="font-bold">চালাও</h3>
          <CodeBlock code={p.example.runCommands.join("\n")} lang="bash" title="terminal" />
          <p className="text-sm">📦 {p.example.output}</p>
          <h3 className="font-bold">সমস্যা হলে</h3>
          <table className="table table-sm bg-base-200">
            <thead><tr><th>সমস্যা</th><th>সমাধান</th></tr></thead>
            <tbody>{p.troubleshoot.map(([a, b]) => <tr key={a}><td className="font-mono text-xs">{a}</td><td className="text-sm">{b}</td></tr>)}</tbody>
          </table>
        </div>
      )}

      {/* ৫) ল্যাব */}
      {tab === "lab" && (
        <div className="space-y-4">
          {p.widget === "calc-f64" && <InvokeSimulator mode="f64" />}
          {p.widget === "calc-i32" && (
            <>
              <InvokeSimulator mode="i32" />
              <InvokeSimulator mode="f64" />
            </>
          )}
          {p.widget === "filemap" && <FileMap files={p.files} />}
          {p.widget === "security" && (
            <>
              <TokenLab />
              <RateLimitLab />
              <TotpLab />
              <CacheLab />
              <Argon2Lab />
            </>
          )}
        </div>
      )}

      {/* ৬) কুইজ */}
      {tab === "quiz" && <Quiz items={p.quiz} />}

      <div className="flex justify-between pt-4">
        {idx > 0 ? <Link className="btn btn-ghost" to={"/project/" + projects[idx - 1].slug}>← আগের প্রজেক্ট</Link> : <span />}
        {next ? <Link className="btn btn-primary" to={"/project/" + next.slug} onClick={() => setTab("steps")}>পরের প্রজেক্ট →</Link> : <Link className="btn btn-primary" to="/lab">সিকিউরিটি ল্যাব →</Link>}
      </div>
    </div>
  );
}
