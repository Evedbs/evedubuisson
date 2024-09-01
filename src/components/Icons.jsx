import "../style/Icons.css";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Icons() {
  return (
    <div className="iconList">
      <a
        target="_blank"
        className="aIcons"
        href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqZhDcccFkjKFZdZnNqfNjZLpmXSlPKdSWCslwZfPFmrkWNgKBkwXMXrfVxdCSKdhRhsmL"
      >
        <EmailIcon />
      </a>
      <a
        className="aIcons"
        href="https://www.linkedin.com/in/eve-dubuisson/"
        target="_blank"
      >
        <LinkedInIcon />
      </a>
      <a
        className="aIcons"
        href="https://github.com/Evedbs"
        target="_blank"
      >
        <GitHubIcon />
      </a>
    </div>
  );
}
