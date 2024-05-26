import "./Icons.css";
import gmailIcon from "./assets/gmailIcon.svg";
import linkedinIcon from "./assets/linkedinIcon.svg";
import phoneCallIcon from "./assets/phoneCallIcon.svg";
import pdfFile from "./assets/pdfFile.svg";

export default function Icons() {
  return (
    <div className="iconList">
      <img
        src={gmailIcon}
        className="icon"
      />
      <img
        src={linkedinIcon}
        className="icon"
      />
      <img
        src={phoneCallIcon}
        className="icon"
      />
      <img
        src={pdfFile}
        className="icon"
      />
    </div>
  );
}
