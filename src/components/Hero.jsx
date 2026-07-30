import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import HeroGraphics from "./HeroGraphics";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24"
    >
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-blue-400 text-xl font-medium">
            Hello, I'm
          </p>

          <h1 className="mt-3 text-6xl lg:text-7xl font-black leading-tight">
            ATHARVA
            <br />
            <span className="text-blue-500">
              GAUR
            </span>
          </h1>

          <div className="mt-6 text-2xl font-semibold text-gray-300 h-10">
            <TypeAnimation
              sequence={[
                "AI & Machine Learning Engineer",
                1500,
                "Deep Learning Enthusiast",
                1500,
                "RAG Developer",
                1500,
                "Competitive Programmer",
                1500,
              ]}
              speed={45}
              repeat={Infinity}
            />
          </div>

          <p className="mt-8 text-lg text-gray-400 leading-8 max-w-xl">
            Passionate about building intelligent AI systems,
            designing scalable machine learning solutions,
            developing Retrieval-Augmented Generation (RAG)
            applications, and solving challenging algorithmic
            problems through clean and efficient code.
          </p>

          <div className="flex gap-5 mt-10">

            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-700 shadow-lg shadow-blue-500/30"
            >
              View Projects
            </button>

            <a
              href="#contact"
              className="rounded-xl border border-blue-500 px-8 py-4 font-semibold text-blue-400 transition duration-300 hover:bg-blue-500 hover:text-white"
            >
              Contact Me
            </a>

          </div>

          <div className="flex items-center gap-6 mt-10 text-3xl text-gray-300">

            <a
              href="https://github.com/atharvagaur"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-blue-400 hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/atharvagaur7487"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-blue-400 hover:scale-110"
            >
              <FaLinkedin />
            </a>

          </div>
        </motion.div>

        {/* Right Graphic */}

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <HeroGraphics />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;