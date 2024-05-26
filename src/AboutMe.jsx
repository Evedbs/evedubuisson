import "./AboutMe.css";

export default function AboutMe({ aboutMeRef }) {
  return (
    <div
      ref={aboutMeRef}
      className="aboutMe"
    >
      <h2>{"Hello, my name is Eve Dubuisson, I'm an UX/UI engineer."}</h2>
      <p>
        {
          "Graduate of Licence in foreign languages, I switched to computer science eight months ago. I like to code designs."
        }
      </p>
      <button className="downloadCV">{"Download CV"}</button>
    </div>
  );
}
