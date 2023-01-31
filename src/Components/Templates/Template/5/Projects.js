import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { getProjectsDetails } from "../../../../feature/resumeSlice";

const Projects = () => {
  const projects = useSelector((state) => getProjectsDetails(state));

  if (!projects || projects.length === 0) {
    return <></>;
  }
  return (
    <>
      <Typography variant="h5" fontWeight={600} sx={{ color: "navy" }}>
        Projects
      </Typography>
      <Divider variant="middle" sx={{ fontWeight: 600 }} />
      {projects.map((project, index) => (
        <Box sx={{ marginBottom: "2rem", padding: "0.3rem 0 0 1rem" }}>
          <Typography variant="body1" fontWeight={600}>
            {project.title}
          </Typography>
          <Typography variant="body1">
            {project.company},{project.location}
          </Typography>
          <Typography variant="body1">
            {project.role} ({project.start_month}, {project.start_year}-
            {project.end_month}, {project.end_year})
          </Typography>
          <Typography variant="body1">{project.description}</Typography>
        </Box>
      ))}
    </>
  );
};

export default Projects;
