import "./EducationAndExperience.css";

const sections = [
  { date: "September 2023 - now", description: "Personal project" },
  {
    date: "September 2020 - July 2023",
    description: "Licence in foreign languages (spanish, russian and italian)",
  },
  { date: "July 2020", description: "Literary Baccalaureate" },
];

function Section({ date, description }) {
  return (
    <>
      <p>{date}</p>
      <h2>{description}</h2>
      <hr />
    </>
  );
}

export default function EducationAndExperience() {
  return (
    <div className="content">
      {sections.map((section) => (
        <Section
          key={section.date}
          date={section.date}
          description={section.description}
        />
      ))}
    </div>
  );
}
