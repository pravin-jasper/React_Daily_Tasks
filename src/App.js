
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Day1 from "./days/Day-01/Day1";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day1" element={<Day1 />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;
