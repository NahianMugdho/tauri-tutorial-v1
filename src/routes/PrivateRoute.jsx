// PrivateRoute.jsx — এই সাইটে login লাগে না, তাই pass-through।
// Firebase Auth যোগ করলে এখানে user চেক করে <Navigate to="/login" /> দেবে।
export default function PrivateRoute({ children }) {
  return children;
}
