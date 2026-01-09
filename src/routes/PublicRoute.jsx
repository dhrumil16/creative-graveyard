import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PublicRoute({ children }) {
  const { user } = useAuth();

  // If already logged in, don't allow login/signup page
  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
}
