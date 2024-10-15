import "../style/CardProject.css";

export default function CardProject({
  image,
  title,
  subtitle,
  className = "",
  href,
  enabled,
}) {
  return (
    <a
      target="_blank"
      className="projectLink"
      href={href}
    >
      <div className={"cardRoot"}>
        <div className={`containerCardImage ${className}`}>
          <img
            className={enabled ? "projectImage" : "projectImageDisabled"}
            src={image}
            alt="web site project"
          />
          <span className={enabled ? "soonDisabled" : "soon"}>SOON</span>
        </div>
        <div className="containerTitleSubtitle">
          <span className="projectTitle">{title}</span>
          <span className="subtitleProject">{subtitle}</span>
        </div>
      </div>
    </a>
  );
}
