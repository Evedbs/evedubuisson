import "../styles/Contact.css";
import {
  TextField,
  Button,
  createTheme,
  ThemeProvider,
  Stack,
} from "@mui/material";

export default function Contact({ contactRef }) {
  return (
    <div
      className="contact"
      ref={contactRef}
    >
      <div className="containerContact">
        <TextField
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
        </Button>
      </div>
    </div>
  );
}
