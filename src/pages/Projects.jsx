// Projects.jsx — সব প্রজেক্টের তালিকা + প্রগ্রেস
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import useProgress from "../hooks/useProgress";

export default function Projects() {
  const { count } = useProgress();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">প্রজেক্টসমূহ (এই ক্রমে করো)</h1>
      <ol className="space-y-3">
        {projects.map((p) => {
          const done = count("file:" + p.slug);
          return (
            <li key={p.slug} className="card bg-base-200 border border-base-300">
              <div className="card-body p-4 gap-2">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <h2 className="font-bold text-lg">প্রজেক্ট {p.no}: {p.title}</h2>
                  <span className="badge badge-outline">{p.level}</span>
                </div>
                <p className="text-sm opacity-80">{p.intro}</p>
                <progress className="progress progress-success" value={done} max={p.files.length}></progress>
                <div className="flex justify-between items-center">
                  <span className="text-xs opacity-70">{done}/{p.files.length} ফাইল সম্পন্ন</span>
                  <Link className="btn btn-primary btn-sm" to={"/project/" + p.slug}>শুরু করো</Link>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
