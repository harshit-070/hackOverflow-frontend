import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Achievements from "./Achievements";
import ContactDetails from "./ContactDetails";
import EducationDetails from "./EducationDetails";
import PersonalDetails from "./PersonalDetails";
import Projects from "./Projects";
import Skills from "./Skills";
import WorkExperinece from "./WorkExperinece";
const Index = React.forwardRef(({ personalDetails }, ref) => {
  return (
    <Box
      sx={{
        width: "90%",
        height: "3508px",
        padding: "30px 50px",
        border: "1px solid black",
        backgroundColor: "white",
      }}
      ref={ref}
    >
      <PersonalDetails />
      <ContactDetails />
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item sx={{ width: "48%" }}>
          <EducationDetails />
          <WorkExperinece />
          <Projects />
        </Grid>
        <Grid item sx={{ width: "48%" }}>
          <Skills />
          <Achievements />
        </Grid>
      </Grid>
    </Box>
  );
});

export default Index;
