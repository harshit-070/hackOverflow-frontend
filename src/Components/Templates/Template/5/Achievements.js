import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { getAchievementDetails } from "../../../../feature/resumeSlice";

const Achievements = () => {
  const achievements = useSelector((state) => getAchievementDetails(state));

  if (!achievements) {
    return <></>;
  }
  return (
    <Box sx={{ marginBottom: "2rem", padding: "0.3rem 0 0 1rem" }}>
      <Typography variant="body1">{achievements}</Typography>
    </Box>
  );
};

export default Achievements;
