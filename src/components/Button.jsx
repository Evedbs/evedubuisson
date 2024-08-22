import "../style/Button.css";

export default function Button({ label }) {
  return (
    <div className="border">
      <div className="label">
        <span className="span">{label}</span>
      </div>
    </div>
  );
}
