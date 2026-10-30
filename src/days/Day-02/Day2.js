
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050608] px-4">

      {/* Counter Card */}
      <div className="w-full max-w-md rounded-3xl border border-sky-400/20 bg-[#11151b] p-8 text-center shadow-2xl shadow-sky-950/30">

        {/* Heading */}
        <p className="mb-3 text-sm font-bold tracking-[4px] text-sky-400">
          REACT USESTATE
        </p>

        <h1 className="mb-8 text-3xl font-extrabold text-white">
          Counter <span className="text-rose-400">Application</span>
        </h1>

        {/* Counter Display */}
        <div className="mb-8 rounded-2xl border border-sky-400/20 bg-[#050608] p-8">

          <p className="mb-3 text-sm font-semibold tracking-widest text-gray-500">
            CURRENT COUNT
          </p>

          <h2
            className={`text-7xl font-black transition-all duration-300 ${
              count < 0 ? "text-rose-400" : "text-sky-400"
            }`}
          >
            {count}
          </h2>

          <p className="mt-3 text-xs text-gray-500">
            {count === 0
              ? "Counter is at zero"
              : count > 0
              ? "Positive value"
              : "Negative value"}
          </p>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-4">

          {/* Increment */}
          <button
            onClick={increment}
            className="rounded-xl bg-sky-500 px-5 py-4 font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-sky-300 hover:shadow-lg hover:shadow-sky-500/30 active:scale-95"
          >
            + Increment
          </button>

          {/* Decrement */}
          <button
            onClick={decrement}
            className="rounded-xl border border-rose-400/30 bg-rose-500/10 px-5 py-4 font-bold text-rose-400 transition-all duration-300 hover:-translate-y-1 hover:bg-rose-500 hover:text-white hover:shadow-lg hover:shadow-rose-500/30 active:scale-95"
          >
            - Decrement
          </button>

        </div>

        {/* Reset */}
        <button
          onClick={reset}
          className="mt-5 w-full rounded-xl border border-gray-700 bg-gray-800 px-5 py-4 font-bold text-white transition-all duration-300 hover:border-sky-400/40 hover:bg-gray-700 active:scale-95"
        >
          ↻ Reset Counter
        </button>

        {/* Footer */}
        <p className="mt-8 text-xs tracking-wide text-gray-600">
          BUILT WITH REACT & TAILWIND CSS
        </p>

      </div>
    </div>
  );
}

export default Counter;
