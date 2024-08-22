import "../style/Projects.css";
import CardProject from "./CardProject";
import lemon from "../assets/lemon.jpg";
import img from "../assets/img.jpg";
import img1 from "../assets/img1.jpg";

export default function Projects({ projectsRef }) {
  return (
    <div
      ref={projectsRef}
      className="projects"
    >
      <CardProject
        title={"The Little Lemon"}
        image={lemon}
      />
      <CardProject
        title={"Awesome"}
        image={img}
      />
      <CardProject
        title={"Amazing"}
        image={img1}
      />
    </div>
  );
}
