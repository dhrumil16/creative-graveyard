import React from "react";

const Spinner = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Spinner Ring */}
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 rounded-full border-4 border-emerald-500/20"></div>
        <div className="absolute inset-0 rounded-full border-4 border-emerald-500 border-t-transparent animate-[spin_1.2s_linear_infinite]
"></div>
      </div>

      {/* Loading text */}
      <p className="text-sm tracking-wide text-emerald-400">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Spinner;
