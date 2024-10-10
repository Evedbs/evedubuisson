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
        href={"https://lillemonrestaurant.netlify.app/"}
        className="enableProject"
      />
      <CardProject
        title={"Sweet Recipes"}
        subtitle={"A dessert listing website"}
        image={soon}
      />
      <CardProject
        title={"Social Media"}
        subtitle={"An application to discuss about current events"}
        image={soon}
      />
    </div>
  );
}
