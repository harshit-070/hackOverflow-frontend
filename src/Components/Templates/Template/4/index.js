import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import PersonalDetails from "./PersonalDetails";
import ContactDetails from "./ContactDetails";
import Achievements from "./Achievements";
import EducationDetails from "./EducationDetails";
import Projects from "./Projects";
import Skills from "./Skills";
import WorkExperinece from "./WorkExperinece";

const Index = () => {
  return (
    <Box>
      <PersonalDetails />
      <ContactDetails />

      <Box
        sx={{
          width: "90%",
          height: "3508px",
          border: "2px solid red",
          padding: "30px 50px",
        }}
      >
        <PersonalDetails />
        <ContactDetails />
        <Typography variant="h5" fontWeight={600} sx={{ color: "navy" }}>
          Education
        </Typography>
        <Divider variant="middle" sx={{ fontWeight: 600 }} />
        <EducationDetails />
        <Typography variant="h5" fontWeight={600} sx={{ color: "navy" }}>
          Work Experience
        </Typography>
        <Divider variant="middle" sx={{ fontWeight: 600 }} />
        <WorkExperinece />
        <Typography variant="h5" fontWeight={600} sx={{ color: "navy" }}>
          Projects
        </Typography>
        <Divider variant="middle" sx={{ fontWeight: 600 }} />
        <Projects />
        <Typography variant="h5" fontWeight={600} sx={{ color: "navy" }}>
          Skills
        </Typography>
        <Divider variant="middle" sx={{ fontWeight: 600 }} />
        <Skills />
        <Typography variant="h5" fontWeight={600} sx={{ color: "navy" }}>
          Achievements
        </Typography>
        <Divider variant="middle" sx={{ fontWeight: 600 }} />
        <Achievements />
      </Box>
    </Box>
  );
};

export default Index;
