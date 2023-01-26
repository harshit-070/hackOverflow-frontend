import { Box, Typography } from '@mui/material'
import React from 'react'

const Projects = () => {
  return (
    <Box sx={{marginBottom:'2rem',padding:'0.3rem 0 0 1rem'}}>
        <Typography variant='body1' fontWeight={600}>project title</Typography>
        <Typography variant='body1' >Company Name,location</Typography>
        <Typography variant='body1'>role (startdate-enddate)</Typography>
        <Typography variant='body1'>description</Typography>
    </Box>
  )
}

export default Projects