import { Box, Button } from "@mui/material";
import React from "react";

const Publish = ({ setPublish }) => {
  return (
    <Box sx={{ margin: "35px 5px" }}>
      <Button variant="contained" onClick={() => setPublish(true)}>
        Publish
      </Button>
    </Box>
  );
};

export default Publish;
