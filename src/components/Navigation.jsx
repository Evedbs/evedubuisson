import "../style/Navigation.css";
import Icons from "./Icons";
import cross from "../assets/cross.svg";

export default function Navigation({
  scrollToAboutMe,
  scrollToProjects,
  scrollToToolsAndSkills,
  scrollToContact,
  showNavigation,
  setShowNavigation,
}) {
  return (
    <div className="navigationRoot">
      <div className="backgroundOnImage">
        <div className="containerImage">
          <img
            src={cross}
            onClick={() => setShowNavigation(false)}
          />
        </div>
        <div
          className="containerLinks"
          onClick={() => setShowNavigation(false)}
        >
          <span
            className="spanNavigation"
            onClick={scrollToAboutMe}
          >
            About Me
          </span>
          <span
            className="spanNavigation"
            onClick={scrollToProjects}
          >
            Projects
          </span>
          <span
            className="spanNavigation"
            onClick={scrollToToolsAndSkills}
          >
            Tools and Skills
          </span>
          <span
            className="spanNavigation"
            onClick={scrollToContact}
          >
            Contact
          </span>
          <Icons />
        </div>
      </div>
    </div>
  );
}
