import "../styles/ToolsAndSkills.css";

const sections = [
  { name: "HTML5", level: "60" },
  { name: "CSS", level: "60" },
  { name: "JavaScript", level: "55" },
  { name: "React", level: "55" },
  { name: "Figma", level: "65" },
  { name: "Git/GitHub", level: "55" },
  { name: "TypeScript", level: "45" },
  { name: "Npmjs", level: "55" },
];
const sections1 = [
  { language: "French", level: "native" },
  { language: "English", level: "B2" },
  { language: "Spanish", level: "B2" },
  { language: "Russian", level: "B2" },
];

function ComputerScience({ name, level, className }) {
  return (
    <div className={className}>
      <p>
        {name + " "}
        {level}
      </p>
      <br />
    </div>
  );
}

export default function ToolsAndSkills({ toolsAndSkillsRef }) {
  return (
    <div
      ref={toolsAndSkillsRef}
      className="toolsAndSkills"
    >
      <div>
        {sections.map((section) => (
          <ComputerScience
            className={section.name}
            key={section.name}
            name={section.name}
            level={section.level}
          />
        ))}
      </div>
      <div>
        {sections1.map((section) => (
          <ComputerScience
            className={section.language}
            key={section.name}
            name={section.language}
            level={section.level}
          />
        ))}
      </div>
    </div>
  );
}
