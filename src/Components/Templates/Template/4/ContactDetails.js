import { Box, Typography } from '@mui/material'
import {Email, GitHub, LinkedIn, LocationOn, Phone} from '@mui/icons-material';
import React from 'react'

const ContactDetails = () => {
  return (
    <Box sx={{marginBottom:'1rem',display:'flex',alignItems:'center'}}>
        <LocationOn sx={{fontSize:'20px'}}/>&nbsp;
        <Typography component='span' variant='body1'>Location</Typography>&nbsp;&nbsp;
        <Phone sx={{fontSize:'20px'}}/>&nbsp;
        <Typography component='span' variant='body1'>Phone</Typography>&nbsp;&nbsp;
        <Email sx={{fontSize:'20px'}}/>&nbsp;
        <Typography component='span' variant='body1'>Email</Typography>&nbsp;&nbsp;
        <LinkedIn sx={{fontSize:'20px'}}/>&nbsp;
        <Typography component='span' variant='body1'>Linkedin</Typography>&nbsp;&nbsp;
        <GitHub sx={{fontSize:'20px'}}/>&nbsp;
        <Typography component='span' variant='body1'>github</Typography>&nbsp;&nbsp;
    </Box>
  )
}

export default ContactDetails