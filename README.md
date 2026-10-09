# Tauri + React + Rust — ইন্টারেক্টিভ টিউটোরিয়াল সাইট

Vite + React 18, React Router v6 (createBrowserRouter), Tailwind CSS + DaisyUI, Axios।

## চালানো
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ ফোল্ডারে
```
Vercel এ deploy: `vercel.json` এ SPA rewrite দেওয়া আছে।

## ফোল্ডার
- `src/data/`   — ৫টা প্রজেক্টের কনটেন্ট (ধাপ, ফাইল-ক্রম, কোড, কমেন্ট, কুইজ)
- `src/labs/`   — ইন্টারেক্টিভ উইজেট (পাইপলাইন, invoke সিমুলেটর, ফাইল ম্যাপ, JWT, rate limit, TOTP, cache, argon2)
- `src/pages/`  — Home, Projects, Project, Lab, NotFound
- `src/components/`, `layouts/`, `routes/`, `context/`, `hooks/`, `utils/`, `firebase/`

নতুন প্রজেক্ট যোগ করতে `src/data/` এ ফাইল বানিয়ে `projects.js` এ যোগ করো।
