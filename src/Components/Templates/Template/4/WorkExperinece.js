import { Box, Divider, Typography } from "@mui/material";
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
      <Typography variant="h5" fontWeight={600} sx={{ color: "navy" }}>
        Work Experience
      </Typography>
      <Divider variant="middle" sx={{ fontWeight: 600 }} />
      {experience.map((exp, index) => (
        <Box
          sx={{ marginBottom: "1rem", padding: "0.3rem 0 0 1rem" }}
          key={index}
        >
          <Typography variant="body1" fontWeight={600}>
            {exp.name},{exp.location}
          </Typography>
          <Typography variant="body1">
            {exp.title} ({exp.start_month}, {exp.start_year}-
            {exp.is_present ? (
              "-Present"
            ) : (
              <>
                -{exp.end_month}, {exp.end_year}
              </>
            )}
            )
          </Typography>
          <Typography variant="body1">{exp.description}</Typography>
        </Box>
      ))}
    </>
  );
};

export default WorkExperinece;
