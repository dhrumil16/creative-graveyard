import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupWithEmail, loginWithGoogle } from "../../services/auth.service";
import { toast } from "react-hot-toast";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignup(e) {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      toast.error("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      await signupWithEmail({ name, email, password });
      toast.success("Verification email sent. Please verify & login.");
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleSignup() {
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
          Sign up
        </h2>

        <form onSubmit={handleSignup}>
          <input
            className="w-full mb-4 px-4 py-3 rounded-lg bg-[#020617] text-white placeholder-gray-400 focus:outline-none"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="w-full mb-4 px-4 py-3 rounded-lg bg-[#020617] text-white placeholder-gray-400 focus:outline-none"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="w-full mb-4 px-4 py-3 rounded-lg bg-[#020617] text-white placeholder-gray-400 focus:outline-none"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            className="w-full mb-5 px-4 py-3 rounded-lg bg-[#020617] text-white placeholder-gray-400 focus:outline-none"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            disabled={loading}
            className="w-full bg-emerald-500 hover:bg-emerald-600 transition py-3 rounded-lg font-semibold text-black"
          >
            Sign up
          </button>
        </form>

        <div className="text-center text-gray-400 my-4">or</div>

        <button
          onClick={handleGoogleSignup}
          className="w-full bg-white hover:bg-gray-100 transition py-3 rounded-lg font-semibold text-black"
        >
          Continue with Google
        </button>

        <p className="text-center text-gray-400 mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-emerald-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
