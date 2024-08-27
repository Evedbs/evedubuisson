import "../style/Projects.css";
import CardProject from "./CardProject";
import lemon from "../assets/lemon.jpg";
import img from "../assets/img.jpg";
import img1 from "../assets/img1.jpg";
import littleLemonLogo from "../assets/littleLemonLogo.png";

export default function Projects({ projectsRef }) {
  return (
    <div
      ref={projectsRef}
      className="projects"
    >
      <CardProject
        title={"The Little Lemon"}
        image={littleLemonLogo}
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
