import "../styles/AboutMe.css";
import { Button } from "@mui/material";

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
      <Button
        variant="contained"
        color="error"
        size="large"
      >{`DOWNLOAD CV`}</Button>
    </div>
  );
}
