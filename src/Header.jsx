import "./Header.css";

export default function Header({
  scrollToAboutMe,
  scrollToEducation,
  scrollToToolsAndSkills,
  scrollToContact,
}) {
  return (
    <div className="header">
      <a onClick={scrollToAboutMe}>About me</a>
      <a onClick={scrollToEducation}>Education and experience</a>
      <a onClick={scrollToToolsAndSkills}>Tools and Skills</a>
      <a onClick={scrollToContact}>Contact</a>
    </div>
  );
}
