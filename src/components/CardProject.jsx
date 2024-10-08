import "../style/CardProject.css";

export default function CardProject({
  image,
  title,
  subtitle,
  className = "",
  href,
}) {
  return (
    <a
      target="_blank"
      className="projectLink"
      href={href}
    >
      <div className="cardRoot">
        <div className={`containerCardImage ${className}`}>
          <img
            className="projectImage"
            src={image}
            alt="web site project"
          />
        </div>
        <div className="containerTitleSubtitle">
          <span className="projectTitle">{title}</span>
          <span className="subtitleProject">{subtitle}</span>
        </div>
      </div>
    </a>
  );
}
