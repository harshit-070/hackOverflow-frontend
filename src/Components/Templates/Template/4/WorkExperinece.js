import { Box, Typography } from '@mui/material'
import React from 'react'

const WorkExperinece = () => {
  return (
    <Box sx={{marginBottom:'1rem',padding:'0.3rem 0 0 1rem'}}>
        <Typography variant='body1' fontWeight={600}>Company Name,location</Typography>
        <Typography variant='body1'>Jobtitle (startdate-enddate)</Typography>
        <Typography variant='body1'>description</Typography>
    </Box>
  )
}

export default WorkExperinece