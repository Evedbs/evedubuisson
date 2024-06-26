import { useState } from "react";
import "../styles/Header.css";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function Header({
  scrollToAboutMe,
  scrollToEducation,
  scrollToToolsAndSkills,
  scrollToContact,
}) {
  const [activeModule, setActiveModule] = useState("");

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton>
          <SendIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Eve Dubuisson
        </Typography>
        <Box>
          <Button
            color="inherit"
            onClick={scrollToAboutMe}
          >
            About me
          </Button>
          <Button
            color="inherit"
            onClick={scrollToEducation}
          >
            Education and experience
          </Button>
          <Button
            color="inherit"
            onClick={scrollToToolsAndSkills}
          >
            Tools and Skills
          </Button>
          <Button
            color="inherit"
            onClick={scrollToContact}
          >
            Contact
          </Button>
        </Box>
        <Box></Box>
      </Toolbar>
    </AppBar>
  );
}
