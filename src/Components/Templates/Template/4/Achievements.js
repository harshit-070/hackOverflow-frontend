import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { getAchievementDetails } from "../../../../feature/resumeSlice";

const Achievements = () => {
  const achievements = useSelector((state) => getAchievementDetails(state));

  if (!achievements) {
    return <></>;
  }

  return (
    <>
      <Typography variant="h5" fontWeight={600} sx={{ color: "navy" }}>
        Achievements
      </Typography>
      <Divider variant="middle" sx={{ fontWeight: 600 }} />
      <Box sx={{ marginBottom: "1rem", padding: "0.3rem 0 0 1rem" }}>
        <Typography variant="body1">{achievements}</Typography>
      </Box>
    </>
  );
};

export default Achievements;
