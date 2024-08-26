import "../style/Button.css";

export default function Button({ label, onClick }) {
  return (
    <div
      className="border"
      onClick={onClick}
    >
      <div className="label">
        <span className="span">{label}</span>
      </div>
    </div>
  );
}
