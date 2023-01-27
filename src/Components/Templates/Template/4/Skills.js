import { Box, Chip } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { getSkillsDetials } from "../../../../feature/resumeSlice";

const Skills = () => {
  const skills = useSelector((state) => getSkillsDetials(state));
  return (
    <Box sx={{ marginBottom: "1rem", padding: "0.3rem 0 0 1rem" }}>
      {skills.map((skill) => (
        <>
          <Chip label={skill} />
          &nbsp;&nbsp;
        </>
      ))}
    </Box>
  );
};

export default Skills;
