import Project from "./Project";
import INFO from "../data/user";
function Projects() {
  return (
    <div className="projects">
      {INFO.projects.map((project, index) => (
        <div className="all-projects-project" key={index}>
          <Project
            logo={project.logo}
            title={project.title}
            description={project.description}
            linkText={project.linkText}
            link={project.link}
          />
        </div>
      ))}
    </div>
  );
}
export default Projects;
