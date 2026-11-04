import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./pages/Top";
import Home from "./pages/First";
import About from "./pages/About";
import Contact from "./pages/Contact";

function Day7() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/day7" replace />} />
      </Routes>
    </div>
  );
}

export default Day7;