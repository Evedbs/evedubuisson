import "../style/Contact.css";
import { Alert, Collapse, Snackbar, TextField } from "@mui/material";
import Button from "./Button";
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import woman1 from "../assets/woman2.png";

export default function Contact({ contactRef }) {
  const form = useRef();
  const imageRef = useRef();

  const [fields, setFields] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      fields.fullName === "" ||
      fields.email === "" ||
      fields.message === ""
    ) {
      setError(true);
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
    setOpen(true);
  };

  return (
    <div
      className="contact"
      ref={contactRef}
    >
      <Collapse in={open}>
        <Snackbar
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
          open={open}
          message=""
        >
          <Alert
            sx={{ margin: "32px" }}
            variant="outlined"
            severity="success"
            onClose={() => {
              setOpen(false);
            }}
          >
            Message sent successfully
          </Alert>
        </Snackbar>
      </Collapse>
      <Collapse in={error}>
        <Snackbar
          autoHideDuration={3000}
          onClose={() => setError(false)}
          open={error}
          message="una pequena alerta"
        >
          <Alert
            sx={{ margin: "32px" }}
            variant="outlined"
            severity="error"
            onClose={() => {
              setError(false);
            }}
          >
            Please complete all fields correctly.
          </Alert>
        </Snackbar>
      </Collapse>
      <div className="containerContact">
        <div className="containerContentContact">
          <h2>{"Get in touch"}</h2>
          <form
            ref={form}
            className="formContact"
          >
            <TextField
              required
              id="standard-required"
              type="text"
              name="user_name"
              variant="standard"
              placeholder="John Doe"
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
          <div className="muiButton">
            <Button
              label={"SEND"}
              onClick={sendEmail}
            />
          </div>
        </div>
        <div className="containerImageContact">
          <img
            src={woman1}
            className="imageContact"
          />
        </div>
      </div>
    </div>
  );
}
