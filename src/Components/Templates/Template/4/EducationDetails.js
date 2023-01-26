import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const EducationDetails = () => {
  return (
    <Box sx={{marginBottom:'1rem',padding:'0.3rem 0 0 1rem'}}>
        <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <TableCell>Course</TableCell>
                <TableCell align="right">Institute</TableCell>
                <TableCell align="right">Year Of Passing</TableCell>
                <TableCell align="right">Result</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                <TableCell align="right">course</TableCell>
                <TableCell align="right">institute</TableCell>
                <TableCell align="right">year of passing</TableCell>
                <TableCell align="right">results</TableCell>
                </TableRow>
            </TableBody>
        </Table>
        </TableContainer>
    </Box>
  )
}

export default EducationDetails