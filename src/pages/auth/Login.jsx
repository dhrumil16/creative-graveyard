import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginWithEmail, loginWithGoogle } from "../../services/auth.service";
import { toast } from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    try {
      setLoading(true);
      await loginWithEmail({ email, password });
      toast.success("Login successful");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleLogin() {
    try {
      await loginWithGoogle();
      toast.success("Logged in with Google");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#020617] via-[#020617] to-[#1e1b4b]">
      <div className="w-full max-w-md bg-[#0b1026]/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">
          Login
        </h2>

        <form onSubmit={handleLogin}>
          <input
            className="w-full mb-4 px-4 py-3 rounded-lg bg-[#020617] text-white placeholder-gray-400 focus:outline-none"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="w-full mb-5 px-4 py-3 rounded-lg bg-[#020617] text-white placeholder-gray-400 focus:outline-none"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            disabled={loading}
            className="w-full bg-emerald-500 hover:bg-emerald-600 transition py-3 rounded-lg font-semibold text-black"
          >
            Login
          </button>
        </form>

        <div className="text-center text-gray-400 my-4">or</div>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-white hover:bg-gray-100 transition py-3 rounded-lg font-semibold text-black"
        >
          Continue with Google
        </button>

        <p className="text-center text-gray-400 mt-5">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-emerald-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
