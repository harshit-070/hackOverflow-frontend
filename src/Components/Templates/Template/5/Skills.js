import { Box, Chip, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { getSkillsDetials } from "../../../../feature/resumeSlice";

const Skills = () => {
  const skills = useSelector((state) => getSkillsDetials(state));

  if (!skills || skills.length === 0) {
    return <></>;
  }
  return (
    <Grid item xs={6}>
      <Typography variant="h5" fontWeight={600} sx={{ color: "navy" }}>
        Skills
      </Typography>
      <Divider variant="middle" sx={{ fontWeight: 600 }} />
      <Box sx={{ marginBottom: "2rem", padding: "0.3rem 0 0 1rem" }}>
        {skills.map((skill) => (
          <>
            <Chip label={skill} />
            &nbsp;&nbsp;
          </>
        ))}
      </Box>
    </Grid>
  );
};

export default Skills;
