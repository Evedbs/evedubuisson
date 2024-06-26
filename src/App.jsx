import "./App.css";
import Header from "./components/Header.jsx";
import AboutMe from "./components/AboutMe.jsx";
import EducationAndExperience from "./components/EducationAndExperience.jsx";
import ToolsAndSkills from "./components/ToolsAndSkills.jsx";
import Contact from "./components/Contact.jsx";
import { useRef } from "react";
import Icons from "./components/Icons.jsx";

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
      <Icons />
      <Header
        scrollToAboutMe={scrollToAboutMe}
        scrollToEducation={scrollToEducation}
        scrollToToolsAndSkills={scrollToToolsAndSkills}
        scrollToContact={scrollToContact}
      />
      <div className="scrollContainer">
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
