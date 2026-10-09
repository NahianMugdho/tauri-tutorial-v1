// axiosSecure.js — তোমার MERN গাইডের axiosSecure এর মতোই।
// Web ভার্সনে access token header-এ যায়; 401 এলে refresh করে আবার চেষ্টা করে।
// Tauri অ্যাপে এর সমান কাজ করে src-tauri এর secureInvoke (প্রজেক্ট ৪/৫ দেখো)।
import axios from "axios";

const axiosSecure = axios.create({ baseURL: import.meta.env.VITE_API_URL });
let accessToken = null;
export const setAccessToken = (t) => (accessToken = t);

axiosSecure.interceptors.request.use((cfg) => {
  if (accessToken) cfg.headers.Authorization = "Bearer " + accessToken;
  return cfg;
});

axiosSecure.interceptors.response.use(
  (r) => r,
  async (err) => {
    const original = err.config;
    if (err.response?.status === 401 && !original._retried) {
      original._retried = true; // একবারই retry
      const { data } = await axios.post("/auth/refresh", {}, { withCredentials: true });
      setAccessToken(data.accessToken);
      return axiosSecure(original);
    }
    return Promise.reject(err);
  }
);

export default axiosSecure;
