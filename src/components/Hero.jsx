import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { fadeUp } from "../lib/motion";
import { scrollToSection } from "../hooks/useLenis";

const Hero = () => {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 700], [0, 110]);
  const parallaxOpacity = useTransform(scrollY, [0, 550], [1, 0]);

  return (
    <section id="home" className="relative flex min-h-screen items-center">
      <motion.div
        style={{ y: parallaxY, opacity: parallaxOpacity }}
        className="container-site pt-32 pb-20"
      >
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="font-mono text-xs font-medium tracking-[0.35em] text-accent uppercase"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.1}
          className="mt-5 font-display text-[clamp(3.25rem,9vw,7rem)] leading-[0.95] font-medium tracking-tight text-ink"
        >
          Atharva
          <br />
          <em className="font-light text-accent">Gaur.</em>
        </motion.h1>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
          className="mt-7 h-8 font-mono text-lg text-muted md:text-xl"
        >
          <TypeAnimation
            sequence={[
              "AI & Machine Learning Engineer",
              1600,
              "RAG & Agentic AI Developer",
              1600,
              "Deep Learning Enthusiast",
              1600,
              "Competitive Programmer",
              1600,
            ]}
            speed={45}
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.3}
          className="mt-8 max-w-xl text-lg leading-8 text-muted"
        >
          I build intelligent systems end to end — from data pipelines and
          model training to RAG applications and deployed products — with
          clean, efficient code.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.4}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => scrollToSection("#projects")}
            className="rounded-full bg-ink px-7 py-3.5 font-semibold text-paper transition-colors hover:bg-accent hover:text-white"
          >
            View Projects
          </button>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}
            className="rounded-full border border-line px-7 py-3.5 font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Contact Me
          </a>

          <div className="ml-1 flex items-center gap-4 text-xl text-muted">
            <a
              href="https://github.com/atharvagaur"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-accent"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/atharvagaur7487"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-accent"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.55}
          className="mt-20 flex flex-wrap gap-x-12 gap-y-4 border-t border-line pt-6 font-mono text-xs tracking-widest text-muted uppercase"
        >
          <span>Vellore, India</span>
          <span>B.Tech CS — AI & ML</span>
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to internships
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
