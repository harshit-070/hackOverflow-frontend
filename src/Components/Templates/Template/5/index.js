import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Achievements from "./Achievements";
import ContactDetails from "./ContactDetails";
import EducationDetails from "./EducationDetails";
import PersonalDetails from "./PersonalDetails";
import Projects from "./Projects";
import Skills from "./Skills";
import WorkExperinece from "./WorkExperinece";
const Index = ({ personalDetails }) => {
  return (
    <Box
      sx={{
        width: "90%",
        height: "3508px",
        padding: "30px 50px",
        border: "1px solid black",
        backgroundColor: "white",
      }}
    >
      <PersonalDetails />
      <ContactDetails />
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item sx={{ width: "48%" }}>
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
        </Grid>
        <Grid item sx={{ width: "48%" }}>
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
