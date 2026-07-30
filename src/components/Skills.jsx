import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaTools,
} from "react-icons/fa";

const skillData = [
  {
    title: "AI & Machine Learning",
    icon: <FaBrain />,
    color: "from-blue-500 to-cyan-400",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "Scikit-Learn",
      "XGBoost",
      "LightGBM",
      "LangChain",
      "RAG",
      "LLMs",
      "Transformers",
      "NLP",
    ],
  },

  {
    title: "Full Stack Development",
    icon: <FaLaptopCode />,
    color: "from-violet-500 to-fuchsia-500",
    skills: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
      "Tailwind CSS",
      "JavaScript",
      "NextJS",
      "HTML",
      "CSS",
      "Vite",
    ],
  },

  {
    title: "Programming Languages",
    icon: <FaCode />,
    color: "from-green-500 to-emerald-400",
    skills: [
      "Python",
      "C++",
      "JavaScript",
      "C",
      "SQL",
    ],
  },

  {
    title: "Computer Science",
    icon: <FaServer />,
    color: "from-orange-500 to-yellow-400",
    skills: [
      "Data Structures",
      "Algorithms",
      "Operating Systems",
      "DBMS",
      "Computer Networks",
      "Object-Oriented Programming",
    ],
  },

  {
    title: "Tools & Platforms",
    icon: <FaTools />,
    color: "from-pink-500 to-rose-400",
    skills: [
      "Git",
      "GitHub",
      "Linux",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "VS Code",
      "Jupyter",
      "Google Colab",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-32 px-6 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        <SectionHeading
          title="Technical Skills"
          subtitle="Technologies I Work With"
        />

        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {skillData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
                duration: 0.6,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-8"
            >
              {/* Glow */}

              <div
                className={`absolute inset-0 bg-linear-to-br ${category.color} opacity-0 blur-3xl transition duration-500 group-hover:opacity-15`}
              />

              <div className="relative">

                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${category.color} text-2xl text-white shadow-lg`}
                >
                  {category.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {category.title}
                </h3>

                <div className="mt-8 flex flex-wrap gap-3">

                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{
                        scale: 1.08,
                      }}
                      className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-gray-300 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                    >
                      {skill}
                    </motion.span>
                  ))}

                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;