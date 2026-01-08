import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const { login } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 w-full max-w-sm">
        <h2 className="text-xl font-semibold text-slate-100 mb-2">Login</h2>

        <p className="text-sm text-slate-400 mb-6">
          Login to share failures or manage your profile.
        </p>

        <button
          onClick={() => login()}
          className="w-full px-4 py-2 rounded-lg bg-teal-500 text-slate-950 font-medium hover:bg-teal-400 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}
