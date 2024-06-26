import "../styles/EducationAndExperience.css";
import { EXPERIENCE } from "../constants/EXPERIENCE";

function Section({ date, description }) {
  return (
    <>
      <p>{date}</p>
      <h2>{description}</h2>
    </>
  );
}

export default function EducationAndExperience({ educationRef }) {
  return (
    <div
      ref={educationRef}
      className="education"
    >
      {EXPERIENCE.map((section) => (
        <Section
          key={section.date}
          date={section.date}
          description={section.description}
        />
      ))}
    </div>
  );
}
