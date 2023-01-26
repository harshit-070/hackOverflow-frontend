import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { getPersonalDetails } from "../../../../feature/resumeSlice";

const PersonalDetails = () => {
  const personalDetails = useSelector((state) => getPersonalDetails(state));
  console.log(personalDetails);

  return (
    <Box sx={{ marginBottom: "1rem" }}>
      <Box>
        <Box></Box>
        <Typography variant="h3" fontWeight={600} sx={{ color: "navy" }}>
          {personalDetails && personalDetails.name}
        </Typography>
      </Box>
      <Box>
        <Box>
          <Typography variant="subtitle1" lineHeight={1}>
            {personalDetails && personalDetails.summary}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PersonalDetails;
