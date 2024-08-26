import "../style/Header.css";
import Navigation from "./Navigation";
import bento from "../assets/menuBento.svg";

function NavigationHidden({ showNavigation, setShowNavigation }) {
  return (
    <div className="containerNavigationHidden">
      <div className="containerNameWork">
        <span className="name">Eve Dubuisson</span>
        <span className="work">UX engineer</span>
      </div>
      <div className="containerBento">
        <img
          src={bento}
          onClick={() => setShowNavigation(true)}
          className="bento"
        />
      </div>
    </div>
  );
}

export default function Header({
  showNavigation,
  setShowNavigation,
  scrollToAboutMe,
  scrollToProjects,
  scrollToToolsAndSkills,
  scrollToContact,
}) {
  return (
    <div className="header">
      {showNavigation === true ? (
        <div className="navigation">
          <Navigation
            scrollToAboutMe={scrollToAboutMe}
            scrollToProjects={scrollToProjects}
            scrollToToolsAndSkills={scrollToToolsAndSkills}
            scrollToContact={scrollToContact}
            showNavigation={showNavigation}
            setShowNavigation={setShowNavigation}
          />
        </div>
      ) : (
        <NavigationHidden
          showNavigation={showNavigation}
          setShowNavigation={setShowNavigation}
        />
      )}
    </div>
  );
}
