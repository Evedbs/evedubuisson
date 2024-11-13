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
          <h2 className="titleSecondaryAboutMe">
            {
              "Hello, my name is Eve, I'm an UX/UI Engineer and Front-End Developer."
            }
          </h2>
          <p className="aboutMeBody pBody">
            I like to build{" "}
            <span className="emAboutMe">
              accessible, intuitive and minimalistic designs.
            </span>
          </p>
          <p className="aboutMeBody pBody">
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
