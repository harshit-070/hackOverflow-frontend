import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
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
  );
};

export default EducationDetails;
