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
          Shivam Kumar
        </Typography>
      </Box>
      <Box>
        <Box>
          <Typography variant="subtitle1" lineHeight={1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PersonalDetails;
