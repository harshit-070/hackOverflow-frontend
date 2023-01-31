import {
  Box,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { getEducationDetails } from "../../../../feature/resumeSlice";

const EducationDetails = () => {
  const education = useSelector((state) => getEducationDetails(state));

  if (!education || education.length === 0) {
    return <></>;
  }
  return (
    <>
      <Typography variant="h5" fontWeight={600} sx={{ color: "navy" }}>
        Education
      </Typography>
      <Divider variant="middle" sx={{ fontWeight: 600 }} />
      {education.map((edu, index) => {
        return (
          <Box
            sx={{ marginBottom: "2rem", padding: "0.3rem 0 0 1rem" }}
            key={index}
          >
            <Typography variant="h6" fontWeight={600}>
              {edu.specialization}
            </Typography>
            <Box sx={{ padding: "0 10px" }}>
              <Typography variant="body1" fontWeight={600}>
                {edu.name}, {edu.location}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  variant="body1"
                  sx={{ fontStyle: "italic", color: "gray" }}
                >
                  duration
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontStyle: "italic", color: "gray" }}
                >
                  {edu.percentage}
                </Typography>
              </Box>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default EducationDetails;
