import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { getUserPosts } from "../../services/post.service";

export default function MyPosts() {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    async function loadPosts() {
      const data = await getUserPosts(user.uid);
      setPosts(data);
      setLoading(false);
    }

    loadPosts();
  }, [user]);

  if (loading) {
    return <p className="text-center mt-10">Loading your posts...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold mb-6">My Failures</h1>

      {posts.length === 0 && (
        <p className="text-gray-400">You haven’t shared any failures yet.</p>
      )}

      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-slate-900 border border-slate-800 rounded-xl p-4"
          >
            <h2 className="font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-400">{post.category}</p>
            <p className="text-slate-200 mt-2">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
