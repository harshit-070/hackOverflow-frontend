import { Box, Chip } from '@mui/material'
import React from 'react'

const Skills = () => {
  return (
    <Box sx={{marginBottom:'1rem',padding:'0.3rem 0 0 1rem'}}>
        <Chip label="skill 1" /> &nbsp;&nbsp;
        <Chip label="skill 2" />
    </Box>
  )
}

export default Skills