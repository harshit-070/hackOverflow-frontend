import { Box, Chip } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { getSkillsDetials } from "../../../../feature/resumeSlice";

const Skills = () => {
  const skills = useSelector((state) => getSkillsDetials(state));

  if (!skills || skills.length === 0) {
    return <></>;
  }
  return (
    <Box sx={{ marginBottom: "2rem", padding: "0.3rem 0 0 1rem" }}>
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
