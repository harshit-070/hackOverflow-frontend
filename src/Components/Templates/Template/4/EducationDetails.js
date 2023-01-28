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
      <Box sx={{ marginBottom: "1rem", padding: "0.3rem 0 0 1rem" }}>
        <TableContainer>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Course</TableCell>
                <TableCell align="right">Institute</TableCell>
                <TableCell align="right">Year Of Passing</TableCell>
                <TableCell align="right">Result</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {education.map((edu, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell align="right">{edu.specialization}</TableCell>
                    <TableCell align="right">
                      {edu.name}, {edu.location}
                    </TableCell>
                    <TableCell align="right">year of passing</TableCell>
                    <TableCell align="right">{edu.percentage}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default EducationDetails;
