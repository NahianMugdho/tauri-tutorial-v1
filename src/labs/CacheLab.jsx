// CacheLab.jsx — API cache: HIT/MISS, TTL ও invalidate (moka cache এর সমতুল্য)
import { useEffect, useRef, useState } from "react";

const DB = { tasks: ["ডিজাইন রিভিউ", "Rust command লেখা", "টেস্ট চালানো"] };

export default function CacheLab() {
  const [ttl, setTtl] = useState(20);
  const cache = useRef(null); // { data, at }
  const [tasks, setTasks] = useState(null);
  const [badge, setBadge] = useState(null);
  const [log, setLog] = useState([]);
  const [busy, setBusy] = useState(false);
  const [, setTick] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTick((x) => x + 1), 500);
    return () => clearInterval(t);
  }, []);

  const push = (s) => setLog((l) => [s, ...l].slice(0, 8));
  const age = cache.current ? (Date.now() - cache.current.at) / 1000 : null;
  const alive = cache.current && age < ttl;
  if (cache.current && !alive) cache.current = null; // TTL শেষ → entry মুছে গেল

  async function getTasks() {
    setBusy(true);
    const t0 = performance.now();
    if (cache.current) {
      setTasks([...cache.current.data]);
      setBadge("HIT");
      push("GET list_tasks → cache HIT (" + Math.round(performance.now() - t0) + " ms), DB ছোঁয়া হয়নি");
    } else {
      await new Promise((r) => setTimeout(r, 700)); // ধীর DB query এর অনুকরণ
      cache.current = { data: [...DB.tasks], at: Date.now() };
      setTasks([...DB.tasks]);
      setBadge("MISS");
      push("GET list_tasks → cache MISS, DB থেকে এল (" + Math.round(performance.now() - t0) + " ms), cache এ রাখা হলো");
    }
    setBusy(false);
  }

  function addTask() {
    DB.tasks.unshift("নতুন task #" + (DB.tasks.length + 1));
    cache.current = null; // invalidate
    push("add_task → DB তে insert, cache.invalidate(\"tasks:7\") → পুরনো cache বাতিল");
  }

  return (
    <div className="card bg-base-200 border border-base-300">
      <div className="card-body gap-3">
        <h3 className="font-bold">⚡ API Cache ল্যাব</h3>
        <label className="text-sm">TTL: <b>{ttl} সেকেন্ড</b>
          <input type="range" min="5" max="60" step="5" value={ttl} onChange={(e) => setTtl(Number(e.target.value))} className="range range-xs w-48 ml-2" />
        </label>
        <div className="flex gap-2 flex-wrap items-center">
          <button className="btn btn-primary btn-sm" onClick={getTasks} disabled={busy}>
            {busy ? <span className="loading loading-spinner loading-xs"></span> : "list_tasks() ডাকো"}
          </button>
          <button className="btn btn-sm" onClick={addTask}>add_task() (invalidate)</button>
          <span className={"badge " + (alive ? "badge-success" : "badge-ghost")}>
            cache: {alive ? "আছে, বয়স " + age.toFixed(0) + "s / " + ttl + "s" : "খালি"}
          </span>
          {badge && <span className={"badge " + (badge === "HIT" ? "badge-success" : "badge-warning")}>শেষ ফল: {badge}</span>}
        </div>
        {alive && <progress className="progress progress-success w-full" value={ttl - age} max={ttl}></progress>}
        {tasks && <ul className="text-sm space-y-1">{tasks.map((t, i) => <li key={i} className="p-2 bg-base-100 rounded">{t}</li>)}</ul>}
        <div className="bg-base-100 rounded p-2 text-xs space-y-1 min-h-[60px]">
          {log.map((l, i) => <div key={i}>{l}</div>)}
          {log.length === 0 && <div className="opacity-60">বারবার list_tasks() চাপো: প্রথমবার ধীর (MISS), পরেরবার দ্রুত (HIT)। add_task চাপলে আবার MISS।</div>}
        </div>
        <p className="text-xs opacity-70">নিয়ম: key এ user id রাখো (tasks:7) যাতে একজনের ডেটা আরেকজন না পায়। write হলে invalidate করো, নইলে পুরনো ডেটা দেখাবে।</p>
      </div>
    </div>
  );
}
