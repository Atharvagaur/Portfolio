import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import projects from "../data/project"; // <-- adjust if your filename is projects.js

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <SectionHeading
          title="Featured Projects"
          subtitle="Portfolio"
        />

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;