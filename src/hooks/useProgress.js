// useProgress.js — ProgressContext ব্যবহারের ছোট hook (useAuth এর মতো)
import { useContext } from "react";
import { ProgressContext } from "../context/ProgressContext";

export default function useProgress() {
  return useContext(ProgressContext);
}
