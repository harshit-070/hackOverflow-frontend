import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
  styled,
  Grid,
} from "@mui/material";
import {
  Architecture,
  ContactPage,
  ContentPaste,
  Grade,
  KeyboardArrowLeft,
  Person,
  Psychology,
  School,
} from "@mui/icons-material";
import React from "react";
import { useState } from "react";
import Info from "./Info";
import ContactDetails from "./ContactDetails";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Achievements from "./Achievements";

const drawerWidth = 250;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);
const Information = ({ open, setOpen }) => {
  const [tagline, settagline] = useState("Your CV Sections");
  const [selected, setSelect] = useState(0);
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box style={{ padding: "10px 10px 0px 20px" }}>
          <Box style={{ display: "flex" }}>
            <Typography fontWeight={600}>{tagline}</Typography>
            <Box
              style={{ marginLeft: "auto", cursor: "pointer" }}
              onClick={() => {
                if (selected === 0) {
                  setOpen(false);
                } else {
                  setSelect(0);
                  settagline("Your CV Sections");
                }
              }}
              component="span"
            >
              <KeyboardArrowLeft
                style={{ fontSize: "25px", fontWeight: 600 }}
              />
            </Box>
          </Box>

          {selected === 0 ? (
            <>
              <List>
                <ListItemButton
                  onClick={() => {
                    setSelect(1);
                    settagline("Person Details");
                  }}
                >
                  <ListItem>
                    <Person />
                    &nbsp;&nbsp;Personal Details
                  </ListItem>
                </ListItemButton>
                <ListItemButton
                  onClick={() => {
                    setSelect(2);
                    settagline("Contact Details");
                  }}
                >
                  <ListItem>
                    <ContactPage />
                    &nbsp;&nbsp;Contact Details
                  </ListItem>
                </ListItemButton>
                <ListItemButton
                  onClick={() => {
                    setSelect(3);
                    settagline("Education");
                  }}
                >
                  <ListItem>
                    <School />
                    &nbsp;&nbsp;Education
                  </ListItem>
                </ListItemButton>
                <ListItemButton
                  onClick={() => {
                    setSelect(4);
                    settagline("Experience");
                  }}
                >
                  <ListItem>
                    <Psychology />
                    &nbsp;&nbsp;Experience
                  </ListItem>
                </ListItemButton>{" "}
                <ListItemButton
                  onClick={() => {
                    setSelect(5);
                    settagline("Projects");
                  }}
                >
                  <ListItem>
                    <ContentPaste />
                    &nbsp;&nbsp;Projects
                  </ListItem>
                </ListItemButton>{" "}
                <ListItemButton
                  onClick={() => {
                    setSelect(6);
                    settagline("Skills");
                  }}
                >
                  <ListItem>
                    <Architecture />
                    &nbsp;&nbsp;Skills
                  </ListItem>
                </ListItemButton>
                <ListItemButton
                  onClick={() => {
                    setSelect(7);
                    settagline("Achievements");
                  }}
                >
                  <ListItem>
                    <Grade />
                    &nbsp;&nbsp;Achievements
                  </ListItem>
                </ListItemButton>
              </List>
            </>
          ) : (
            <>
              {selected === 1 ? <Info /> : ""}
              {selected === 2 ? <ContactDetails /> : ""}
              {selected === 3 ? <Education /> : ""}
              {selected === 4 ? <Experience /> : ""}
              {selected === 5 ? <Projects /> : ""}
              {selected === 6 ? <Skills /> : ""}
              {selected === 7 ? <Achievements /> : ""}
            </>
          )}
        </Box>
      </Drawer>
      <Main open={open}>hi</Main>
    </>
  );
};

export default Information;