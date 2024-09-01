import "../style/Projects.css";
import CardProject from "./CardProject";
import littleLemonLogo from "../assets/drawingLemon.jpg";
import soon from "../assets/soon.png";

export default function Projects({ projectsRef }) {
  return (
    <div
      ref={projectsRef}
      className="projects"
    >
      <CardProject
        title={"The Little Lemon"}
        subtitle={"Showcase website for a restaurant"}
        image={littleLemonLogo}
        className="enableProject"
      />
      <CardProject
        title={"Social Media"}
        image={soon}
      />
      <CardProject
        title={"Lucky Shrub"}
        subtitle={"A website to learn about garden types"}
        image={soon}
      />
    </div>
  );
}
