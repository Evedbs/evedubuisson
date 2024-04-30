import "./App.css";
import Header from "./Header.jsx";
import AboutMe from "./AboutMe.jsx";
import EducationAndExperience from "./EducationAndExperience.jsx";
import ToolsAndSkills from "./ToolsAndSkills.jsx";
import Form from "./Contact.jsx";
import { useRef } from "react";

export default function App() {
  return (
    <div className="box">
      <div>
        <Header />
      </div>
      <div className="a">
        <AboutMe />
      </div>
      <div className="eae">
        <EducationAndExperience />
      </div>
      <div className="tas">
        <ToolsAndSkills />
      </div>
      <div className="f">
        <Form />
      </div>
    </div>
  );
}
