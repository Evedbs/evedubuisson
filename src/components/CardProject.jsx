import "../style/CardProject.css";

export default function CardProject({ image, title }) {
  return (
    <div className="cardRoot">
      <div className="containerCardImage">
        <img
          className="projectImage"
          src={image}
          alt="web site project"
        />
      </div>
      <div className="containerTitle">
        <span className="projectTitle">{title}</span>
      </div>
    </div>
  );
}
