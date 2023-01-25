import { Box } from "@mui/material";
import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import PersonalDetails from "./PersonalDetails";
const Index = ({ personalDetails }) => {
  return (
    <Box>
      <Tooltip title="Add" TransitionComponent={Zoom} placement="right">
        <PersonalDetails personalDetails={personalDetails} />
      </Tooltip>
    </Box>
  );
};

export default Index;
