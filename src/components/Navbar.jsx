// Navbar.jsx — উপরের মেনু + মোট প্রগ্রেস
import { NavLink, Link } from "react-router-dom";
import useProgress from "../hooks/useProgress";
import { projects } from "../data/projects";

export default function Navbar() {
  const { count } = useProgress();
  const total = projects.reduce((s, p) => s + p.files.length, 0);
  const finished = count("file:");
  const pct = total ? Math.round((finished / total) * 100) : 0;

  const link = ({ isActive }) => (isActive ? "active" : "");
  return (
    <div className="navbar bg-base-200 sticky top-0 z-30 border-b border-base-300">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-lg">🦀 Tauri × React শিখি</Link>
      </div>
      <ul className="menu menu-horizontal px-1 gap-1">
        <li><NavLink to="/" end className={link}>পাইপলাইন</NavLink></li>
        <li><NavLink to="/projects" className={link}>প্রজেক্ট</NavLink></li>
        <li><NavLink to="/lab" className={link}>সিকিউরিটি ল্যাব</NavLink></li>
      </ul>
      <div className="hidden md:flex items-center gap-2 pl-3" title="ফাইল-ধাপ সম্পন্ন">
        <progress className="progress progress-success w-28" value={pct} max="100"></progress>
        <span className="text-xs opacity-70">{pct}%</span>
      </div>
    </div>
  );
}
