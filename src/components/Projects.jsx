import "../style/Projects.css";
import CardProject from "./CardProject";
import { PROJECTS } from "../constants/PROJECTS";

export default function Projects({ projectsRef }) {
  return (
    <div
      ref={projectsRef}
      className="projects"
    >
      {PROJECTS.map((project) => (
        <CardProject
          key={project.title}
          title={project.title}
          subtitle={project.subtitle}
          image={project.image}
          href={project.href}
          className={project.enabled && "enableProject"}
          enabled={project.enabled}
        />
      ))}

      {/* <CardProject
        title={PROJECTS[0].title}
        subtitle={PROJECTS[0].subtitle}
        image={PROJECTS.image}
        href={"https://lillemonrestaurant.netlify.app/"}
        className="enableProject"
      />
      <div>
        <CardProject
          title={"Sweet Recipes"}
          subtitle={"A recipe listing website"}
          image={screenshot}
        />
      </div>
      <CardProject
        title={"Social Media"}
        subtitle={"An application to discuss about current events"}
        image={soon}
      /> */}
    </div>
  );
}
