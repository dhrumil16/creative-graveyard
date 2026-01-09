import { useState } from "react";
import { createPost } from "../../services/post.service";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Startup");
  const [isPublic, setIsPublic] = useState(true);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    await createPost({
      title,
      description,
      category,
      isPublic,
      isAnonymous,
      user,
    });

    setLoading(false);
    navigate("/");
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Share a Failure</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          required
          placeholder="Title"
          className="w-full p-3 rounded-lg bg-slate-900 border border-slate-800"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          required
          placeholder="What went wrong?"
          rows={5}
          className="w-full p-3 rounded-lg bg-slate-900 border border-slate-800"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          className="w-full p-3 rounded-lg bg-slate-900 border border-slate-800"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Startup</option>
          <option>Design</option>
          <option>Student</option>
          <option>Business</option>
          <option>Personal</option>
        </select>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={isPublic}
            onChange={() => setIsPublic(!isPublic)}
          />
          Public post
        </label>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={isAnonymous}
            onChange={() => setIsAnonymous(!isAnonymous)}
          />
          Post anonymously
        </label>

        <button
          disabled={loading}
          className="px-6 py-3 rounded-xl bg-teal-500 text-slate-950 hover:bg-teal-400 transition"
        >
          {loading ? "Posting..." : "Post Failure"}
        </button>
      </form>
    </div>
  );
}
