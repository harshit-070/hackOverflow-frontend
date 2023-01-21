import { Box, Grid, TextField, Typography,styled, Button } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router';
import {
    Email,
    GitHub,
    Instagram,
    LinkedIn,
    LocationOn,
    Phone,
    WhatsApp,
  } from "@mui/icons-material";
  
  //Style
  const Component = styled(Box)`
    display: flex;
    align-items: center;
    padding: 30px 10px;
    & > a > svg {
      font-size: 22px;
      border: 2px solid white;
      border-radius: 50%;
      cursor: pointer;
      padding: 12px;
      color: cyan !important;
      &:hover {
        background: cyan;
        color: black !important;
        font-size: 28px;
        border: 2px solid cyan;
      }
    }
  `;
  const Text = styled(Typography)`
    font-size: 22px;
    font-weight: 600;
  `;

const Footer = () => {
    const navigate=useNavigate();
  return (
    <Grid container style={{backgroundColor:'grey',color:'white',marginTop:'30px',paddingBottom:'30px'}}>
        <Grid item lg={4} md={4} sm={12} xs={12} style={{padding:'10px 30px'}}>
           <Stack  direction='column' spacing={2} >
                <Typography variant='h4' fontWeight={600}>Contact Us</Typography>
                <TextField
                variant='outlined'
                label='Name'
                placeholder='Enter Name'
                required
                />
                <TextField
                variant='outlined'
                label='Email'
                placeholder='Enter Email'
                required
                />
                <TextField
                variant='outlined'
                required
                label='Message'
                placeholder='Your message'
                multiline
                rows={4}
                />
                <Button
                variant='contained'
                style={{
                    padding:'10px 20px',
                    borderRadius:'30px',
                    width:'100px'
                }}
                >
                    Send
                </Button>
            </Stack> 
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
        <Stack  direction='column' spacing={2} style={{padding:'10px 50px'}}>
                <Typography variant='h4' fontWeight={600}>Site Map</Typography>
                <Box onClick={()=>navigate('/')} style={{cursor:'pointer',fontWeight:600}}>-Home</Box>
                <Box onClick={()=>navigate('/about')} style={{cursor:'pointer',fontWeight:600}}>-About Us</Box>
                <Box onClick={()=>navigate('/templates')} style={{cursor:'pointer',fontWeight:600}}>-Templates</Box>
                <Box onClick={()=>navigate('/scorer')} style={{cursor:'pointer',fontWeight:600}}>-CV Review</Box>
            </Stack> 
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
        <Box style={{ paddingLeft: "20px" }}>
      <Component>
          <Email />
        <Text>&nbsp;&nbsp;resumerise.com</Text>
      </Component>
      <Component>
          <Phone />
        <Text>&nbsp;&nbsp;+91 XXX-XXX-XXXX</Text>
      </Component>
      <Component>
        <LocationOn />
        <Text>&nbsp;&nbsp;IIT JAMMU</Text>
        
      </Component>
      <Component style={{ justifyContent: "center" }}>
        <LinkedIn />
        &nbsp;&nbsp;&nbsp;
        <GitHub />
        &nbsp;&nbsp;&nbsp;
        <WhatsApp />
        &nbsp;&nbsp;&nbsp;
        <Instagram  />
      </Component>
    </Box>

        </Grid>
    </Grid>
  )
}

export default Footer