import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-teal-500 text-slate-950 flex items-center justify-center font-bold">
            CG
          </div>
          <span className="text-lg font-semibold text-slate-100">
            Creative Graveyard
          </span>
        </Link>

        {/* Nav actions */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link className="text-slate-400 hover:text-slate-100 transition">
            Explore
          </Link>

          <Link className="text-slate-400 hover:text-slate-100 transition">
            Trending
          </Link>

          <Link className="px-4 py-2 rounded-lg bg-teal-500 text-slate-950 hover:bg-teal-400 transition">
            Share Failure
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
