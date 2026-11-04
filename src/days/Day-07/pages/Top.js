import { NavLink } from "react-router-dom";

function Navbar() {
  const navStyle = ({ isActive }) =>
    `px-4 py-2 rounded-lg transition duration-300 ${
      isActive
        ? "bg-cyan-500 text-black font-bold"
        : "text-gray-300 hover:bg-slate-700 hover:text-white"
    }`;

  return (
    <nav className="bg-slate-900 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-5">

        <h1 className="text-2xl font-bold text-cyan-400">
          MyWebsite
        </h1>

        <div className="flex gap-3">
          <NavLink to="/day7" className={navStyle}>
            Home
          </NavLink>

          <NavLink to="/day7/about" className={navStyle}>
            About
          </NavLink>

          <NavLink to="/day7/contact" className={navStyle}>
            Contact
          </NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;