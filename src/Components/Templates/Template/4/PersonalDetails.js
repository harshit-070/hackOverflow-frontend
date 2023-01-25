import { Box } from "@mui/material";
import React from "react";

const PersonalDetails = ({ name, summary }) => {
  return (
    <Box>
      <h1>{name}</h1>
      <h1>{summary}</h1>
    </Box>
  );
};

export default PersonalDetails;
