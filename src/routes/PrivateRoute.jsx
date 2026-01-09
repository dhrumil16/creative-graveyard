import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import Spinner from "../helper/Spinner";

export default function PrivateRoute() {
  const { user, loading } = useAuth();
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // ⏳ SHOW SPINNER HERE
  if (loading || !minTimeElapsed) {
    return (
      <div className="fixed inset-0 bg-[#020617]/80 backdrop-blur-sm flex items-center justify-center z-50">
        <Spinner />
      </div>
    );
  }

  // 🚫 AUTH RESOLVED BUT NOT LOGGED IN
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // ✅ AUTHENTICATED
  return <Outlet />;
}
