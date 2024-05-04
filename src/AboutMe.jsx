import "./AboutMe.css";
import "./scroll.css";

export default function AboutMe({ aboutMeRef }) {
  return (
    <div
      ref={aboutMeRef}
      className="about-me-content about-me-font about-me-scroll"
    >
      <p>Hello, my name is Eve Dubuisson, I'm UX/UI engineer</p>
      <p>
        Graduate of Licence in foreign languages, I switched to computer science
        eight months ago. I like to code designes.
      </p>
      <button className="downloadCV">Download CV</button>
    </div>
  );
}
