import "../style/Contact.css";
import { TextField } from "@mui/material";
import Button from "./Button";

export default function Contact({ contactRef }) {
  return (
    <div
      className="contact"
      ref={contactRef}
    >
      <div className="containerImageContact"></div>
      <div className="containerContact">
        {/* <TextField
          className="light"
          InputLabelProps={{ style: { color: "white" } }}
          id="outlined-basic"
          label=" Your Full Name"
          variant="outlined"
        />
        <TextField
          className="light"
          InputLabelProps={{ style: { color: "white", borderColor: "white" } }}
          InputProps={{
            style: { borderColor: "white" },
            classes: {
              notchedOutline: "input-border",
            },
          }}
          inputProps={{ style: { borderColor: "white" } }}
          FormHelperTextProps={{ style: { borderColor: "white" } }}
          id="outlined-basic"
          label=" Your E-Mail Address"
          variant="outlined"
        />
        <TextField
          className="light"
          InputLabelProps={{ style: { color: "white" } }}
          id="outlined-basic"
          label="Your Message"
          variant="outlined"
        />
        <Button
          className="btnContact"
          variant="outlined"
          size="large"
        >
          Send
        </Button> */}
        <TextField
          required
          id="standard-required"
          label="First name"
          variant="standard"
          placeholder="John"
        />
        <TextField
          required
          id="standard-required"
          label="Last name"
          variant="standard"
          placeholder="Doe"
        />
        <TextField
          required
          id="standard-required"
          label="Email"
          variant="standard"
          placeholder="JohnDoe@gmail.com"
        />
        <TextField
          required
          id="standard-required"
          label="Message"
          variant="standard"
          placeholder="The overview of your universe is interesting, let's schedule a job interview."
        />
        <Button label={"SEND"} />
      </div>
    </div>
  );
}
