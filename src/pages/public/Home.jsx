import { useEffect, useState } from "react";
import { getPublicPosts } from "../../services/post.service";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      const data = await getPublicPosts();
      setPosts(data);
      setLoading(false);
    }
    loadPosts();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading posts...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      {posts.length === 0 && (
        <p className="text-center text-gray-400">No public failures yet.</p>
      )}

      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-slate-900 border border-slate-800 rounded-xl p-5"
        >
          <h2 className="text-xl font-semibold mb-1">{post.title}</h2>

          <p className="text-sm text-slate-400 mb-2">
            by {post.authorName} • {post.category}
          </p>

          <p className="text-slate-200">{post.description}</p>
        </div>
      ))}
    </div>
  );
}
