function Home() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">

      <h1 className="text-4xl md:text-6xl font-bold mb-5">
        Welcome to <span className="text-cyan-400">Home Page</span>
      </h1>

      <p className="text-gray-400 text-lg max-w-xl">
        This is the home page of my React Router application.
        Explore the website using the navigation menu.
      </p>

      <button className="mt-8 bg-cyan-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition">
        Get Started
      </button>

    </section>
  );
}

export default Home;