import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { getPersonalDetails } from "../../../../feature/resumeSlice";

const PersonalDetails = () => {
  const personalDetails = useSelector((state) => getPersonalDetails(state));
  console.log(personalDetails);
  return (
    <Box>
      <h1>Name : {personalDetails && personalDetails.name}</h1>
      <h1>Details : {personalDetails && personalDetails.summary}</h1>
    </Box>
  );
};

export default PersonalDetails;
