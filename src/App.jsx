import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
