// ProgressContext.jsx — কোন ফাইল/ধাপ "করে ফেলেছি" তা localStorage এ রাখে
import { createContext, useEffect, useState } from "react";

export const ProgressContext = createContext(null);

export default function ProgressProvider({ children }) {
  const [done, setDone] = useState(() => {
    try { return JSON.parse(localStorage.getItem("tauri-progress") || "{}"); }
    catch { return {}; }
  });

  useEffect(() => {
    try { localStorage.setItem("tauri-progress", JSON.stringify(done)); } catch { /* ignore */ }
  }, [done]);

  const toggle = (key) => setDone((d) => ({ ...d, [key]: !d[key] }));
  const count = (prefix) => Object.keys(done).filter((k) => k.startsWith(prefix) && done[k]).length;

  return (
    <ProgressContext.Provider value={{ done, toggle, count }}>
      {children}
    </ProgressContext.Provider>
  );
}
