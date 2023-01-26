import { Box } from "@mui/material";
import React from "react";
import PersonalDetails from "./PersonalDetails";
import ContactDetails from "./ContactDetails";
const Index = () => {
  return (
    <Box>
      <PersonalDetails />
      <ContactDetails />
    </Box>
  );
};

export default Index;
