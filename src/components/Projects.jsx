import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="section-pad border-t border-line">
      <div className="container-site">
        <SectionHeading eyebrow="Selected Work" title="Projects." index="03" />

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
