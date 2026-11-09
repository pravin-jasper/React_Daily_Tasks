
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Day1 from "./days/Day-01/Day1";
import Day2 from "./days/Day-02/Day2";
import Day3 from "./days/Day-03/Day3";
import Day4 from "./days/Day-04/Day4";
import Day5 from "./days/Day-05/Day5";
import Day6 from "./days/Day-06/Day6";
import Day7 from "./days/Day-07/Day7";
import Day8 from "./days/Day-08/Day8";
import Day9 from "./days/Day-09/Day9";
import Day10 from "./days/Day-10/Day10";
import Day11 from "./days/Day-11/Day11";
import Day12 from "./days/Day-12/Day12";
function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day1" element={<Day1 />} />
        <Route path="/day2" element={<Day2 />} />
        <Route path="/day3" element={<Day3 />} />
        <Route path="/day4" element={<Day4 />} />
        <Route path="/day5" element={<Day5 />} />
        <Route path="/day6" element={<Day6 />} />
        <Route path="/day7/*" element={<Day7 />} />
        <Route path="/day8" element={<Day8 />} />
        <Route path="/day9" element={<Day9 />} />
        <Route path="/day10" element={<Day10 />} />
        <Route path="/day11" element={<Day11 />} />
        <Route path="/day12" element={<Day12 />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;
