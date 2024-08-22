import "../style/AboutMe.css";
import Button from "./Button";

export default function AboutMe({ aboutMeRef }) {
  return (
    <div
      ref={aboutMeRef}
      className="aboutMe"
    >
      <div className="aboutMeImage"></div>
      <div className="aboutMeContent">
        <div className="aboutMeBody">
          <h2>{"Hello, my name is Eve, I'm an UX/UI engineer."}</h2>
          <p className="aboutMeBody">
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
          </p>
        </div>
        <Button label={"DOWNLOAD CV"} />
      </div>
    </div>
  );
}
