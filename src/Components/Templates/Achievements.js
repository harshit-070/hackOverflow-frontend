import { Stack, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

const Achievements = () => {
  const [description, setdescription] = useState("");
  return (
    <Stack direction="column">
      <TextField
        size="small"
        variant="standard"
        required
        label="Description"
        value={description}
        onChange={(e) => setdescription(e.target.value)}
        sx={{ marginBottom: "15px", overflowX: "hidden" }}
      />
    </Stack>
  );
};

export default Achievements;
