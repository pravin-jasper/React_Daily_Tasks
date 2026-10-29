
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const tasks = Array.from({ length: 15 }, (_, index) => ({
  name: `Day ${index + 1}`,
  path: `/day${index + 1}`,
  number: String(index + 1).padStart(2, "0"),
}));

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinkClass = (path) =>
    `group relative flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5
     text-sm font-medium transition-all duration-300 ease-out
     hover:-translate-y-0.5 active:scale-95
     ${
       isActive(path)
         ? "bg-emerald-800 text-emerald-50 shadow-lg shadow-emerald-950/60 ring-1 ring-emerald-600/50"
         : "text-neutral-300 hover:bg-emerald-900/50 hover:text-emerald-300"
     }`;

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-900/70 bg-[#171a18]/95 text-neutral-100 shadow-2xl shadow-black/30 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Main Navbar */}
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="group flex shrink-0 items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-700 via-green-900 to-[#17251d] text-xl font-black text-emerald-100 shadow-lg shadow-emerald-950/60 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:border-emerald-400">
              R
            </div>

            <div>
              <h1 className="text-lg font-extrabold tracking-tight text-neutral-100 sm:text-xl">
                React
                <span className="text-emerald-400">Learning</span>
              </h1>

              <p className="text-xs tracking-wide text-neutral-400">
                Learn. Build. Repeat.
              </p>
            </div>
          </Link>

          {/* Desktop Home and Task Count */}
          <div className="hidden items-center gap-3 md:flex">
            <Link to="/" className={navLinkClass("/")}>
              <span className="text-lg">⌂</span>
              Home
            </Link>

            <div className="h-8 w-px bg-neutral-700" />

            <div className="rounded-xl border border-emerald-800/80 bg-[#202a23] px-4 py-2 text-center transition-all duration-300 hover:border-emerald-500/60 hover:bg-[#25352a]">
              <p className="text-sm font-bold text-emerald-400">
                15 Tasks
              </p>
              <p className="text-xs text-neutral-400">
                Your learning journey
              </p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-700 bg-[#202522] text-emerald-400 transition-all duration-300 hover:border-emerald-600 hover:bg-emerald-950 active:scale-90 md:hidden"
          >
            <span
              className={`text-2xl transition-transform duration-300 ${
                menuOpen ? "rotate-90" : ""
              }`}
            >
              {menuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 overflow-x-auto pb-4 [scrollbar-width:thin] [scrollbar-color:#166534_#171a18] md:flex">
          {tasks.map((task) => (
            <Link
              key={task.path}
              to={task.path}
              className={navLinkClass(task.path)}
            >
              <span
                className={`text-xs transition-colors duration-300 ${
                  isActive(task.path)
                    ? "text-emerald-200"
                    : "text-neutral-500 group-hover:text-emerald-400"
                }`}
              >
                {task.number}
              </span>

              {task.name}

              {isActive(task.path) && (
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`grid transition-all duration-300 ease-in-out md:hidden ${
            menuOpen
              ? "grid-rows-[1fr] pb-5 opacity-100"
              : "grid-rows-[0fr] pb-0 opacity-0"
          }`}
        >
          <nav className="overflow-hidden">
            <div className="mb-4 rounded-2xl border border-neutral-700/80 bg-[#202522] p-3 shadow-inner shadow-black/20">
              {/* Mobile Home Link */}
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className={`mb-3 flex items-center justify-between rounded-xl border px-4 py-3 font-semibold transition-all duration-300 ${
                  isActive("/")
                    ? "border-emerald-600 bg-emerald-900 text-emerald-50"
                    : "border-transparent text-neutral-200 hover:border-emerald-800 hover:bg-emerald-950/60"
                }`}
              >
                <span>⌂ Home</span>
                <span className="text-emerald-400">→</span>
              </Link>

              {/* 15 Days */}
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                {tasks.map((task) => (
                  <Link
                    key={task.path}
                    to={task.path}
                    onClick={() => setMenuOpen(false)}
                    className={`flex flex-col items-center justify-center gap-1 rounded-xl border px-2 py-3 transition-all duration-300 hover:-translate-y-1 active:scale-95 ${
                      isActive(task.path)
                        ? "border-emerald-500 bg-emerald-800 text-white shadow-lg shadow-emerald-950/50"
                        : "border-neutral-700/70 bg-[#171a18] text-neutral-300 hover:border-emerald-700 hover:bg-emerald-950/60 hover:text-emerald-300"
                    }`}
                  >
                    <span className="text-xs font-medium text-emerald-400">
                      {task.number}
                    </span>

                    <span className="text-xs font-semibold">
                      {task.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <p className="text-center text-xs tracking-wide text-neutral-500">
              <span className="text-emerald-500">✦</span>{" "}
              Keep learning, one day at a time!
            </p>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
