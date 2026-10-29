
import { Link } from "react-router-dom";

const topics = [
  {
    number: "01",
    title: "Components",
    description:
      "Build reusable UI components and understand how React applications are structured.",
    icon: "◈",
    color: "text-sky-400",
    border: "hover:border-sky-400/60",
    glow: "hover:shadow-sky-500/10",
    tag: "UI FOUNDATION",
  },
  {
    number: "02",
    title: "State & Hooks",
    description:
      "Manage changing data, handle user interactions, and create dynamic experiences.",
    icon: "⌘",
    color: "text-rose-400",
    border: "hover:border-rose-400/60",
    glow: "hover:shadow-rose-500/10",
    tag: "INTERACTIVITY",
  },
  {
    number: "03",
    title: "API Integration",
    description:
      "Fetch external data, handle loading states, and display real-time information.",
    icon: "⟡",
    color: "text-sky-400",
    border: "hover:border-sky-400/60",
    glow: "hover:shadow-sky-500/10",
    tag: "DATA & LOGIC",
  },
  {
    number: "04",
    title: "React Routing",
    description:
      "Build multi-page experiences and navigate between screens using React Router.",
    icon: "⌁",
    color: "text-rose-400",
    border: "hover:border-rose-400/60",
    glow: "hover:shadow-rose-500/10",
    tag: "NAVIGATION",
  },
];

function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050608] text-white selection:bg-rose-500/30">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="absolute -right-40 top-72 h-96 w-96 rounded-full bg-rose-500/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative px-5 pb-20 pt-20 sm:px-8 sm:pt-28 lg:pb-28 lg:pt-32">
        <div className="mx-auto max-w-5xl text-center">
          {/* Eyebrow */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-sky-400/20 bg-sky-400/[0.06] px-5 py-2.5 shadow-lg shadow-sky-950/20">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
            </span>

            <span className="text-xs font-bold tracking-[0.22em] text-sky-300 sm:text-sm">
              THE REACT LEARNING EXPERIENCE
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Turn Ideas Into
            <br />

            <span className="bg-gradient-to-r from-sky-300 via-cyan-400 to-sky-500 bg-clip-text text-transparent">
              Interactive
            </span>{" "}
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 bg-clip-text text-transparent">
              Reality.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg">
            My React learning journey — exploring modern web development,
            mastering essential concepts, and transforming knowledge into
            real-world projects one step at a time.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/day1"
              className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-sky-500 px-8 py-4 font-bold text-[#050608] shadow-lg shadow-sky-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-300 hover:shadow-xl hover:shadow-sky-400/30 active:scale-95 sm:w-auto"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />

              <span className="relative">Start Learning</span>
              <span className="relative text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <a
              href="#learning-topics"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-8 py-4 font-semibold text-neutral-300 transition-all duration-300 hover:-translate-y-1 hover:border-rose-400/40 hover:bg-rose-400/[0.06] hover:text-rose-300 active:scale-95 sm:w-auto"
            >
              Explore Topics
              <span className="text-rose-400">↓</span>
            </a>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/[0.08] bg-white/[0.025] py-6 backdrop-blur-sm sm:mt-20">
            <div className="px-2">
              <p className="text-3xl font-black text-sky-400 sm:text-4xl">
                15
              </p>
              <p className="mt-2 text-[10px] font-semibold tracking-widest text-neutral-500 sm:text-xs">
                TASKS
              </p>
            </div>

            <div className="px-2">
              <p className="text-3xl font-black text-rose-400 sm:text-4xl">
                04
              </p>
              <p className="mt-2 text-[10px] font-semibold tracking-widest text-neutral-500 sm:text-xs">
                CORE TOPICS
              </p>
            </div>

            <div className="px-2">
              <p className="text-3xl font-black text-white sm:text-4xl">
                01
              </p>
              <p className="mt-2 text-[10px] font-semibold tracking-widest text-neutral-500 sm:text-xs">
                GOAL
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Topics */}
      <section
        id="learning-topics"
        className="relative px-5 pb-24 sm:px-8 lg:pb-32"
      >
        <div className="mx-auto max-w-6xl">
          {/* Section Heading */}
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-bold tracking-[0.25em] text-rose-400">
                WHAT'S INSIDE
              </p>

              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Learning{" "}
                <span className="text-neutral-500">Pathway</span>
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-neutral-400">
                The essential building blocks for creating powerful React
                applications.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              Explore the fundamentals
            </div>
          </div>

          {/* Topic Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((topic) => (
              <article
                key={topic.number}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1014] p-6 transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-[#11151b] hover:shadow-2xl ${topic.border} ${topic.glow}`}
              >
                {/* Card Accent */}
                <div
                  className={`absolute left-0 top-0 h-1 w-0 transition-all duration-500 group-hover:w-full ${
                    topic.color.includes("rose")
                      ? "bg-rose-400"
                      : "bg-sky-400"
                  }`}
                />

                <div className="mb-8 flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${topic.color}`}
                  >
                    {topic.icon}
                  </div>

                  <span className="font-mono text-sm text-neutral-600 transition-colors duration-300 group-hover:text-neutral-300">
                    /{topic.number}
                  </span>
                </div>

                <p
                  className={`mb-3 text-[10px] font-bold tracking-[0.2em] ${topic.color}`}
                >
                  {topic.tag}
                </p>

                <h3 className="text-xl font-bold text-neutral-100 transition-colors duration-300 group-hover:text-white">
                  {topic.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-neutral-400">
                  {topic.description}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-white/[0.07] pt-5">
                  <span className="text-xs text-neutral-500">
                    Core concept
                  </span>

                  <span
                    className={`text-lg transition-all duration-300 group-hover:translate-x-1 ${topic.color}`}
                  >
                    ↗
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative px-5 pb-20 sm:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-sky-400/20 bg-gradient-to-br from-[#0d1820] via-[#0b1017] to-[#1b0d16] px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-sky-500/10 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-20 h-56 w-56 rounded-full bg-rose-500/10 blur-[80px]" />

          <div className="relative">
            <p className="text-xs font-bold tracking-[0.25em] text-sky-400">
              YOUR NEXT CHAPTER STARTS HERE
            </p>

            <h2 className="mt-5 text-3xl font-black sm:text-4xl">
              Ready to build something{" "}
              <span className="text-rose-400">awesome?</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-neutral-400">
              Take the first step, experiment with code, and turn each
              concept into something you can be proud of.
            </p>

            <Link
              to="/day1"
              className="mt-8 inline-flex items-center gap-3 rounded-xl border border-sky-300/30 bg-sky-400/10 px-7 py-3.5 font-bold text-sky-300 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-sky-400 hover:text-black hover:shadow-lg hover:shadow-sky-400/20 active:scale-95"
            >
              Begin Your Journey
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/[0.08] px-5 py-7 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-sm font-bold text-neutral-300">
            React<span className="text-sky-400">Learning</span>
          </p>

          <p className="text-xs text-neutral-500">
            Built with React & Tailwind CSS
          </p>

          <p className="text-xs text-neutral-500">
            Learn <span className="text-sky-400">•</span> Build{" "}
            <span className="text-rose-400">•</span> Grow
          </p>
        </div>
      </footer>
    </main>
  );
}

export default Home;
