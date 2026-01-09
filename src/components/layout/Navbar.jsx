import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // ✅ FIXED
import { logoutUser } from "../../services/auth.service";

export default function Navbar() {
  const { user } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logoutUser();
    navigate("/login");
  }

  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-md transition ${
      isActive ? "bg-emerald-500 text-black" : "text-white hover:bg-white/10"
    }`;

  return (
    <nav className="w-full px-6 py-4 bg-[#020617] border-b border-white/10 flex justify-between items-center">
      <div className="text-xl font-bold text-white">Creative Graveyard</div>

      <div className="flex items-center gap-3">
        <NavLink to="/" className={linkClass}>
          Explore
        </NavLink>
        <NavLink to="/trending" className={linkClass}>
          Trending
        </NavLink>

        {!user && (
          <>
            <NavLink to="/login" className={linkClass}>
              Login
            </NavLink>
            <NavLink to="/signup" className={linkClass}>
              Signup
            </NavLink>
          </>
        )}

        {user && (
          <>
            <NavLink to="/profile" className={linkClass}>
              Profile
            </NavLink>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-md bg-red-500 text-black font-medium"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
