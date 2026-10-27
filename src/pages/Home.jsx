// Home.jsx — সাইটের শুরু: প্রথমেই পুরো পাইপলাইনের ইন্টারেক্টিভ অ্যানিমেশন
import { Link } from "react-router-dom";
import PipelineAnimation from "../labs/PipelineAnimation";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">Tauri + React + Rust, হাতে-কলমে</h1>
        <p className="opacity-80 max-w-2xl mx-auto">
          প্রথমে দেখো একটা ক্লিক কীভাবে React থেকে Rust হয়ে ডেটাবেসে যায় আর ফিরে আসে। তারপর ৬টা প্রজেক্ট ধাপে ধাপে করো: কোন ফাইলের পর কোন ফাইল, কোথায় কী কাজ, সব কমেন্ট সহ।
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">০) শুরুর আগে: প্রজেক্ট তৈরি, ফাইল স্ট্রাকচার, React ↔ Rust সংযোগ</h2>
        <Link to="/start" className="card bg-base-200 border border-base-300 hover:border-primary transition">
          <div className="card-body p-4 gap-2">
            <p className="text-sm opacity-80">
              নতুন Tauri প্রজেক্ট কীভাবে বানাবে, কোন ফাইল কী করে, আর React ও Rust কোন কোন বিন্দুতে জোড়া লাগে তা অ্যানিমেশনে দেখো।
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="badge badge-primary">প্রজেক্ট তৈরি</span>
              <span className="badge badge-primary">ফাইল স্ট্রাকচার</span>
              <span className="badge badge-primary">সংযোগ বিন্দু ①–⑤</span>
            </div>
            <span className="btn btn-primary btn-sm self-start">শুরু করো →</span>
          </div>
        </Link>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">১) পুরো পাইপলাইন (ক্লিক বা ▶ চাপো)</h2>
        <PipelineAnimation />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">২) শেখার ক্রম</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {projects.map((p) => (
            <Link key={p.slug} to={"/project/" + p.slug} className="card bg-base-200 border border-base-300 hover:border-primary transition">
              <div className="card-body p-4 gap-1">
                <div className="flex items-center gap-2">
                  <span className="badge badge-primary">প্রজেক্ট {p.no}</span>
                  <span className="badge badge-outline">{p.level}</span>
                </div>
                <h3 className="font-bold">{p.title}</h3>
                <p className="text-sm opacity-80">{p.intro.slice(0, 110)}...</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {p.stack.slice(0, 5).map((s) => <span key={s} className="badge badge-ghost badge-sm">{s}</span>)}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to="/lab" className="btn btn-outline">🔬 সিকিউরিটি ল্যাব (JWT, refresh, 2FA, cache, argon2) →</Link>
        </div>
      </section>
    </div>
  );
}
