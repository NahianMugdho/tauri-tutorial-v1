// NotFound.jsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-3">
      <h1 className="text-5xl font-bold">404</h1>
      <p>এই পেজটা পাওয়া যায়নি।</p>
      <Link to="/" className="btn btn-primary">হোমে যাও</Link>
    </div>
  );
}
