function About() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">

      <h1 className="text-4xl md:text-6xl font-bold mb-5">
        About <span className="text-cyan-400">Us</span>
      </h1>

      <p className="text-gray-400 text-lg max-w-xl">
        We are learning React.js and building modern web
        applications using reusable components and React Router.
      </p>

    </section>
  );
}

export default About;