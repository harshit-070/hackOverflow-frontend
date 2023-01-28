import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";

import {
  Add,
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
import Info from "./PersonalDetails";
import ContactDetails from "./ContactDetails";
import Education from "./EducationDetails";
import Experience from "./ExperienceDetails";
import Projects from "./ProjectsDetails";
import Skills from "./SkillsDetails";
import Achievements from "./AchievementsDetails";
import AddSection from "./Section/AddSection";
import SectionLists from "./Section/SectionsLists";
import ShowSection from "./Section/ShowSection";

const drawerWidth = 250;

const Information = ({ open, setOpen }) => {
  const [tagline, settagline] = useState("Your CV Sections");
  const [selected, setSelect] = useState(0);
  const [customizedSectionId, setCustomizedSectionId] = useState("");

  const selectSection = (_id, tagline) => {
    setCustomizedSectionId(_id);
    setSelect(9);
    settagline(tagline);
  };

  if (!open) {
    return <></>;
  }

  return (
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
            <KeyboardArrowLeft style={{ fontSize: "25px", fontWeight: 600 }} />
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
              <ListItemButton
                onClick={() => {
                  setSelect(8);
                  settagline("Add Sections");
                }}
              >
                <ListItem>
                  <Add />
                  &nbsp;&nbsp;Add Section
                </ListItem>
              </ListItemButton>
            </List>
            <SectionLists selectSection={selectSection} />
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
            {selected === 8 ? <AddSection setSelected={setSelect} /> : ""}
            {selected === 9 ? (
              <ShowSection section_id={customizedSectionId} />
            ) : (
              ""
            )}
          </>
        )}
      </Box>
    </Drawer>
  );
};

export default Information;
