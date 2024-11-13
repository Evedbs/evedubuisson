import "../style/ToolsAndSkills.css";
import PolarAreaChart from "./SkillsDiagram";
export default function ToolsAndSkills({ toolsAndSkillsRef }) {
  return (
    <div
      ref={toolsAndSkillsRef}
      className="toolsAndSkills"
    >
      <PolarAreaChart />
      {/* <div className="toolsRoot">
        <div className="containerTitleValues">
          <span className="titleTools">DESIGN</span>
          <div className="containerValues">
            <span>Figma</span>
            <span>Bootstrap</span>
            <span>Material UI</span>
          </div>
        </div>
        <div className="containerTitleValues">
          <span className="titleTools">FRONT-END</span>
          <div className="containerValues">
            <span>React</span>
            <span>Javascript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Typescript</span>
          </div>
        </div>
        <div className="containerTitleValues">
          <span className="titleTools">BACK-END</span>
          <div className="containerValues">
            <span>Node</span>
            <span>MongoDB</span>
            <span>Mongoose</span>
            <span>Express</span>
            <span>SQL</span>
            <span>Sequelize</span>
            <span>MySQL Workbench</span>
          </div>
        </div>
        <div className="containerTitleValues">
          <span className="titleTools">OTHER</span>
          <div className="containerValues">
            <span>Git</span>
            <span>Vite</span>
          </div>
        </div>
      </div> */}
    </div>
  );
}
