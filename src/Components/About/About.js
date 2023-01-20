import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <Box style={{display:'flex',justifyContent:'center'}}>
    <Box width='75vw' style={{border:'2px solid red'}}>
      <Typography variant='h2'>About Us</Typography>
      <Box style={{padding:'50px 30px'}}>
      <Typography variant='h6' fontWeight={600}>Purpose</Typography>
      <Typography color='grey' variant='subtitle1'>Resume Rise offers a professional resume building service that helps you create an amazing CV/Resume in just a few minutes, with dozens of free resume templates to choose from. We pride ourselves in creating the most professional resumes out there, at prices which are affordable for everyone.</Typography>
      <Typography color='grey' variant='subtitle1'>A professional resume is a document that summarizes a person's work experience, education, and skills for the purpose of obtaining a job.</Typography>
      <br/>
      <br/>
      <Typography variant='h6' fontWeight={600}>Features</Typography>
      <Typography color='grey' variant='subtitle1'>Resume Rise will create, edit, and publish professional resumes online. Users can input their work experience, education, and skills, and the website will format and design the resume in a visually appealing way.</Typography>
      </Box>
      
    </Box>
    </Box>
  )
}

export default About