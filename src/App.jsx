import "./App.css";
import "./scroll.css";
import Header from "./Header.jsx";
import AboutMe from "./AboutMe.jsx";
import EducationAndExperience from "./EducationAndExperience.jsx";
import ToolsAndSkills from "./ToolsAndSkills.jsx";
import Contact from "./Contact.jsx";
import { useRef } from "react";

export default function App() {
  const aboutMeRef = useRef(null);
  const educationRef = useRef(null);
  const toolsAndSkillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToAboutMe = scrollTo(aboutMeRef);
  const scrollToEducation = scrollTo(educationRef);
  const scrollToToolsAndSkills = scrollTo(toolsAndSkillsRef);
  const scrollToContact = scrollTo(contactRef);

  return (
    <div className="app">
      <Header
        scrollToAboutMe={scrollToAboutMe}
        scrollToEducation={scrollToEducation}
        scrollToToolsAndSkills={scrollToToolsAndSkills}
        scrollToContact={scrollToContact}
      />
      <div className="scroll-container">
        <AboutMe aboutMeRef={aboutMeRef} />
        <EducationAndExperience educationRef={educationRef} />
        <ToolsAndSkills toolsAndSkillsRef={toolsAndSkillsRef} />
        <Contact contactRef={contactRef} />
      </div>
    </div>
  );
}

function scrollTo(ref) {
  return () => ref.current?.scrollIntoView({ behavior: "smooth" });
}
