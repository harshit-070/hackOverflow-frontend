import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { getExperienceDetails } from "../../../../feature/resumeSlice";

const WorkExperinece = () => {
  const experience = useSelector((state) => getExperienceDetails(state));

  if (!experience || experience.length === 0) {
    return <></>;
  }
  return (
    <>
      {experience.map((exp, index) => (
        <Box sx={{ marginBottom: "2rem", padding: "0.3rem 0 0 1rem" }}>
          <Typography variant="body1" fontWeight={600}>
            {exp.name},{exp.location}
          </Typography>
          <Typography variant="body1">
            {exp.title} ({exp.start_month}, {exp.start_year}-{exp.end_month},{" "}
            {exp.end_year})
          </Typography>
          <Typography variant="body1">{exp.description}</Typography>
        </Box>
      ))}
    </>
  );
};

export default WorkExperinece;
