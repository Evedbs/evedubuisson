import "./Header.css";
import gmailIcon from "./assets/gmailIcon.svg";
import linkedinIcon from "./assets/linkedinIcon.svg";
import phoneCallIcon from "./assets/phoneCallIcon.svg";
import pdfFile from "./assets/pdfFile.svg";

export default function Header() {
  return (
    <>
      <div className="header">
        <a>About me</a>
        <a>Education and experience</a>
        <a>Tools and Skills</a>
        <a>Contact</a>
      </div>
      <div className="iconList">
        <img
          src={gmailIcon}
          className="gmailIcon"
        />
        <img
          src={linkedinIcon}
          className="linkedinIcon"
        />
        <img
          src={phoneCallIcon}
          className="phoneCallIcon"
        />
        <img
          className="pdfFile"
          src={pdfFile}
        />
      </div>
    </>
  );
}
