import { Box, Grid, Typography } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import React from "react";
import { useState } from "react";
import Information from "./Information";

const Template = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Box
        style={{
          display: "inline-block",
          boxShadow: "2px 5px 5px grey",
          borderRadius: "0px 20px 20px 0px",
          padding: "0px 10px",
          cursor: "pointer",
        }}
        onClick={() => setOpen(true)}
      >
        <KeyboardDoubleArrowRightIcon
          style={{ fontWeight: 600, fontSize: "40px" }}
        />
      </Box>
      <Information open={open} setOpen={setOpen} />
    </Box>
  );
};

export default Template;
