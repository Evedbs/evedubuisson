import "../style/Contact.css";
import { TextField } from "@mui/material";
import Button from "./Button";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact({ contactRef }) {
  const form = useRef();
  const [fields, setFields] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      fields.fullName === "" ||
      fields.email === "" ||
      fields.message === ""
    ) {
      alert("non");
      return;
    }

    emailjs
      .sendForm("service_zfmoe75", "template_e422sbt", form.current, {
        publicKey: "bW68I-BVKwe7jivh5",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    setFields({ fullName: "", email: "", message: "" });
  };
  return (
    <>
      <div
        className="contact"
        ref={contactRef}
      >
        <div className="containerImageContact"></div>
        <div className="containerContact">
          <form
            ref={form}
            className="containerContact"
          >
            <TextField
              required
              id="standard-required"
              type="text"
              name="user_name"
              variant="standard"
              placeholder="John"
              label="Full name"
              value={fields.fullName}
              onChange={(e) =>
                setFields({ ...fields, fullName: e.target.value })
              }
            />
            <TextField
              required
              id="standard-required"
              label="Email"
              variant="standard"
              placeholder="JohnDoe@gmail.com"
              type="email"
              name="user_email"
              value={fields.email}
              onChange={(e) => setFields({ ...fields, email: e.target.value })}
            />
            <TextField
              required
              id="standard-required"
              label="Message"
              variant="standard"
              placeholder="The overview of your universe is interesting, let's schedule a job interview."
              name="message"
              value={fields.message}
              onChange={(e) =>
                setFields({ ...fields, message: e.target.value })
              }
            />
          </form>
          <Button
            label={"SEND"}
            onClick={sendEmail}
          />
        </div>
      </div>
    </>
  );
}
