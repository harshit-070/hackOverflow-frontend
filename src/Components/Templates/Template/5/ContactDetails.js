import { Box, Grid, Stack, Typography } from '@mui/material'
import {Email, GitHub, LinkedIn, LocationOn, Phone} from '@mui/icons-material';
import React from 'react'

const ContactDetails = () => {
  return (
    <>
      <Grid container sx={{marginBottom:'2rem',backgroundColor:'darkslategray',color:'white',padding:'1rem',borderRadius:'10px'}}>
      <Grid item sx={{width:'50%'}}>
        <Stack direction='column' spacing={2} sx={{justifyContent:'center'}}>
          <Box style={{display:'flex',alignItems:'center'}}>
            <Email sx={{fontSize:'20px'}}/>&nbsp;
            <Typography component='span' variant='body1'>Email</Typography>&nbsp;&nbsp;
          </Box>
          <Box style={{display:'flex',alignItems:'center'}}>
          <LocationOn sx={{fontSize:'20px'}}/>&nbsp;
        <Typography  variant='body1'>Location</Typography>&nbsp;&nbsp;
          </Box>
          <Box style={{display:'flex',alignItems:'center'}}>
          <GitHub sx={{fontSize:'20px'}}/>&nbsp;
        <Typography  variant='body1'>github</Typography>&nbsp;&nbsp;
          </Box>
        </Stack>
      </Grid>
      <Grid item sx={{width:'50%'}}>
      <Stack direction='column' spacing={2} sx={{justifyContent:'center'}}>
          <Box style={{display:'flex',alignItems:'center'}}>
          <Phone sx={{fontSize:'20px'}}/>&nbsp;
        <Typography  variant='body1'>Phone</Typography>&nbsp;&nbsp;
          </Box>
          <Box style={{display:'flex',alignItems:'center'}}>
          <LinkedIn sx={{fontSize:'20px'}}/>&nbsp;
        <Typography  variant='body1'>Linkedin</Typography>&nbsp;&nbsp;
          </Box>
        </Stack>
        
      </Grid>
    </Grid>
    </>
    
  )
}

export default ContactDetails