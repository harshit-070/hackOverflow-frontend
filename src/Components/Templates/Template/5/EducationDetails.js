import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

const EducationDetails = () => {
  return (
    <Box sx={{marginBottom:'2rem',padding:'0.3rem 0 0 1rem'}}>
        <Typography variant='h6' fontWeight={600}>Course</Typography>
        <Box sx={{padding:'0 10px'}}>
        <Typography variant='body1' fontWeight={600}>Institute,location</Typography>
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
        <Typography variant='body1' sx={{fontStyle:'italic',color:'gray'}}>duration</Typography>
        <Typography variant='body1' sx={{fontStyle:'italic',color:'gray'}}>cgpa</Typography>
        </Box>
        
        </Box>
        
    </Box>
  )
}

export default EducationDetails