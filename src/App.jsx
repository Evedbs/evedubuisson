import "./App.css";
import Header from "./components/Header.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Projects from "./components/Projects.jsx";
import ToolsAndSkills from "./components/ToolsAndSkills.jsx";
import Contact from "./components/Contact.jsx";
import Loading from "./components/loading.jsx";
import { useRef, useState } from "react";

export default function App() {
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const toolsAndSkillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToAboutMe = scrollTo(aboutMeRef);
  const scrollToProjects = scrollTo(projectsRef);
  const scrollToToolsAndSkills = scrollTo(toolsAndSkillsRef);
  const scrollToContact = scrollTo(contactRef);

  const [showNavigation, setShowNavigation] = useState(false);

  function scrollTo(ref) {
    return () => ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Loading />
      <div className="app">
        <Header
          scrollToAboutMe={scrollToAboutMe}
          scrollToProjects={scrollToProjects}
          scrollToToolsAndSkills={scrollToToolsAndSkills}
          scrollToContact={scrollToContact}
          showNavigation={showNavigation}
          setShowNavigation={setShowNavigation}
        />
        <div className="scrollContainer">
          <AboutMe aboutMeRef={aboutMeRef} />
          <Projects projectsRef={projectsRef} />
          <ToolsAndSkills toolsAndSkillsRef={toolsAndSkillsRef} />
          <Contact contactRef={contactRef} />
        </div>
      </div>
    </>
  );
}
