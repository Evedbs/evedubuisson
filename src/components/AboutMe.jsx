import "../style/AboutMe.css";
import Button from "./Button";
import resume from "../assets/resume.pdf";
import woman from "../assets/woman.png";

export default function AboutMe({ aboutMeRef }) {
  return (
    <div
      ref={aboutMeRef}
      className="aboutMe"
    >
      <div className="containerImageAboutMe">
        <img
          src={woman}
          className="imageAboutMe"
        />
      </div>
      <div className="aboutMeContent">
        <div className="aboutMeBody">
          <h2>{"Hello, my name is Eve, I'm an UX/UI engineer."}</h2>
          <p className="aboutMeBody">
            I like to build{" "}
            <span className="emAboutMe">
              accessible, intuitive and minimalistic designs.
            </span>
          </p>
          <p className="aboutMeBody">
            {
              "The gathering of views and experiences always lead us to the best version of our project, so I'm impatient to discover the universe of my future challenge, in this ever-changing environment."
            }
          </p>
        </div>
        <Button
          href={resume}
          label={"DOWNLOAD RESUME"}
        />
      </div>
    </div>
  );
}
