import { Box } from "@mui/material";
import React from "react";
import PersonalDetails from "./PersonalDetails";
import ContactDetails from "./ContactDetails";
import Achievements from "./Achievements";
import EducationDetails from "./EducationDetails";
import Projects from "./Projects";
import Skills from "./Skills";
import WorkExperinece from "./WorkExperinece";
import CustmoizedSection from "./CustmoizedSection";

const Index = () => {
  return (
    <Box>
      <Box
        sx={{
          width: "90%",
          height: "fit-content",
          border: "2px solid red",
          padding: "30px 50px",
        }}
      >
        <PersonalDetails />
        <ContactDetails />
        <EducationDetails />
        <WorkExperinece />
        <Projects />
        <Skills />
        <Achievements />
        <CustmoizedSection />
      </Box>
    </Box>
  );
};

export default Index;
