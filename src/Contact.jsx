import "./Contact.css";

const fields = [{ name: "Name" }, { name: "Email" }, { name: "Message" }];

function Field({ placeholder, className }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={className}
    />
  );
}

export default function Contact() {
  return (
    <div className="form">
      {fields.map((field) => (
        <Field
          key={field.name}
          placeholder={field.name}
          className={field.name}
        />
      ))}
      <button
        type="submit"
        className="Send"
      >
        Send
      </button>
    </div>
  );
}
