import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: GitHub Pages এ সাইট চলে https://ইউজার.github.io/রিপো-নাম/ এ।
// তাই build এর সময় VITE_BASE=/রিপো-নাম/ দিতে হয় (GitHub Actions workflow এটা নিজে দেয়)।
// লোকালে dev চালালে "/" ই থাকে।
export default defineConfig({
  base:  "/tauri-tutorial-v1/",
  plugins: [react()],
});
