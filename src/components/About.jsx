import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skills = [
  { name: "Machine Learning", value: 95 },
  { name: "Deep Learning", value: 90 },
  { name: "Retrieval-Augmented Generation", value: 95 },
  { name: "Software Engineering", value: 88 },
];

const timeline = [
  {
    year: "2024",
    title: "Machine Learning and Deep Learning",
  },
  {
    year: "2025",
    title: "DSA,Competitive Programming and Full Stack",
  },
  {
    year: "2026",
    title: "RAG Systems & AI Research",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <SectionHeading
          title="About Me"
          subtitle="Who I Am"
        />

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h2 className="text-5xl font-black leading-tight">

              Building
              <span className="text-blue-500">
                {" "}Intelligent Systems
              </span>

            </h2>

            <p className="mt-8 text-lg text-gray-400 leading-9">

              I'm Atharva Gaur, a Computer Science student specializing in
              Artificial Intelligence and Machine Learning at VIT Vellore.

              My passion lies in designing intelligent systems that combine
              Machine Learning, Retrieval-Augmented Generation, and Software
              Engineering to solve practical real-world problems.

              Beyond building models, I enjoy creating complete AI products
              from data preprocessing to deployment.

            </p>

            <div className="mt-14 space-y-7">

              {skills.map((skill) => (

                <div key={skill.name}>

                  <div className="flex justify-between mb-2">

                    <span className="font-semibold">
                      {skill.name}
                    </span>

                    <span className="text-blue-400">
                      {skill.value}%
                    </span>

                  </div>

                  <div className="h-3 rounded-full bg-slate-800 overflow-hidden">

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${skill.value}%`,
                      }}
                      transition={{
                        duration: 1.5,
                      }}
                      viewport={{ once: true }}
                      className="h-full rounded-full bg-linear-to-r from-blue-500 to-cyan-400"
                    />

                  </div>

                </div>

              ))}

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="relative">

              <div className="absolute left-5 top-0 h-full w-1 bg-linear-to-b from-blue-500 to-cyan-400 rounded-full" />

              <div className="space-y-12">

                {timeline.map((item, index) => (

                  <motion.div
                    key={index}
                    whileHover={{
                      x: 10,
                    }}
                    className="relative pl-16"
                  >

                    <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.6)]" />

                    <p className="text-blue-400 font-bold">

                      {item.year}

                    </p>

                    <h3 className="text-2xl font-bold mt-1">

                      {item.title}

                    </h3>

                  </motion.div>

                ))}

              </div>

            </div>

            {/* Floating Stats */}

            <div className="grid grid-cols-2 gap-6 mt-16">

              {[
                ["CGPA", "9.53"],
                ["Projects", "8+"],
                ["DSA", "200+"],
                ["Focus", "AI + ML"],
              ].map(([title, value]) => (

                <motion.div
                  key={title}
                  whileHover={{
                    y: -8,
                    scale: 1.04,
                  }}
                  className="rounded-3xl border border-blue-500/20 bg-slate-900/60 backdrop-blur-xl p-8"
                >

                  <p className="text-gray-400">

                    {title}

                  </p>

                  <h2 className="text-3xl font-bold mt-2 text-blue-400">

                    {value}

                  </h2>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;