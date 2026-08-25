import { motion } from "framer-motion";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import CardSpotlight from "./CardSpotlight";
import ProjectThumbnail from "./ProjectThumbnails";
import { fadeUp } from "../lib/motion";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      custom={(index % 2) * 0.12}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-card transition-colors duration-300 hover:border-accent/50"
    >
      <CardSpotlight className="flex flex-1 flex-col">
        <ProjectThumbnail
          title={project.title}
          tagline={project.tagline}
          variant={project.variant}
          stats={project.stats}
        />

        <div className="relative z-20 flex flex-1 flex-col p-7">
          <p className="leading-7 text-muted">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="cursor-default rounded-full border border-line px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between pt-8">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="group/link inline-flex items-center gap-2.5 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-transparent hover:bg-ink hover:text-paper"
            >
              <FaGithub />
              GitHub
              <FaArrowRight
                size={12}
                className="-translate-x-1 opacity-0 transition-all group-hover/link:translate-x-0 group-hover/link:opacity-100"
              />
            </a>
            <span className="font-mono text-xs text-muted">
              P.{String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>
      </CardSpotlight>
    </motion.article>
  );
};

export default ProjectCard;
