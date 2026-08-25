import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const ease = [0.22, 1, 0.36, 1];

const facts = [
  { label: "Education", value: "VIT Vellore" },
  { label: "Degree", value: "B.Tech CSE (AI & ML)" },
  { label: "CGPA", value: "9.53" },
  { label: "Based in", value: "Vellore, India" },
];

const journey = [
  {
    year: "2024",
    title: "Machine Learning & Deep Learning foundations",
  },
  {
    year: "2025",
    title: "DSA, competitive programming & full-stack development",
  },
  {
    year: "2026",
    title: "RAG systems & AI research",
    current: true,
  },
];

const About = () => {
  return (
    <section id="about" className="section-pad">
      <div className="container-site">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading eyebrow="About" title="Building intelligent systems end to end." index="01" />

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <p className="text-xl leading-8 text-ink">
                I'm Atharva Gaur, a Computer Science student specializing in
                Artificial Intelligence and Machine Learning at VIT Vellore.
              </p>
              <p className="mt-6 leading-8 text-muted">
                My passion lies in designing intelligent systems that combine
                machine learning, Retrieval-Augmented Generation, and software
                engineering to solve practical real-world problems — from data
                preprocessing and model training all the way to deployment.
              </p>
              <p className="mt-4 leading-8 text-muted">
                Beyond building models, I enjoy the full product lifecycle:
                shipping complete AI products, writing performant code, and
                sharpening my problem-solving through competitive programming.
              </p>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease }}
              className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-line pt-8 sm:grid-cols-4"
            >
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 font-medium text-ink">{fact.value}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="lg:pt-24"
          >
            <p className="font-mono text-xs font-medium uppercase tracking-[0.35em] text-muted">
              Journey
            </p>

            <div className="mt-8 space-y-2 border-l border-line">
              {journey.map((item) => (
                <div
                  key={item.year}
                  className={`group border-l-2 py-5 pl-7 -ml-px transition-colors ${
                    item.current
                      ? "border-accent"
                      : "border-transparent hover:border-accent/50"
                  }`}
                >
                  <p
                    className={`font-mono text-sm font-semibold ${
                      item.current ? "text-accent" : "text-muted"
                    }`}
                  >
                    {item.year}
                    {item.current && (
                      <span className="ml-3 rounded-full bg-accent-soft px-2.5 py-1 text-[10px] uppercase tracking-widest text-accent">
                        Now
                      </span>
                    )}
                  </p>
                  <h3 className="mt-2 leading-snug font-medium text-ink">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
