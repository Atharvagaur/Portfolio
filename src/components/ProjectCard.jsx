import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectThumbnail from "./ProjectThumbnails";

const accentMap = {
  1: "blue",
  2: "cyan",
  3: "violet",
};

const subtitleMap = {
  1: "Machine Learning & Fraud Analytics",
  2: "Retrieval-Augmented Generation",
  3: "Deep Learning & NLP",
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.45 }}
      className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl hover:border-blue-500/40"
    >
      <ProjectThumbnail
        title={project.title}
        subtitle={subtitleMap[project.id]}
        accent={accentMap[project.id]}
        stats={project.stats}
      />

      <div className="p-7">
        <p className="leading-7 text-gray-400">
          {project.description}
        </p>

        {/* Tech Stack */}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-gray-300 transition hover:border-blue-500 hover:bg-blue-500/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div className="mt-8 flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-700"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;