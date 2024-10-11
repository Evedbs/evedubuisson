import "../style/Button.css";

export default function Button({ href, label, onClick }) {
  return (
    <div className="containerButton">
      <a
        className="aButton"
        target="_blank"
        href={href}
      >
        <div
          className="border"
          onClick={onClick}
        >
          <div className="label">
            <span className="span">{label}</span>
          </div>
        </div>
      </a>
    </div>
  );
}
