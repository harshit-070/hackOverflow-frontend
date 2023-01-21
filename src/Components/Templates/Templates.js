import { Box, Grid, styled, Typography } from '@mui/material'
import React from 'react'
import './Templates.css'

const Image=styled('img')({
    height:'300px',
    width:'100%',
    border:'2px solid grey',
    borderRadius:'10px',
    cursor:'pointer',
    
})
const Templates = () => {
  return (
    <Box>
        <Typography variant='h2' fontWeight={600}>Resume Templates</Typography>
        <Box style={{display:'flex',justifyContent:'center'}}>

        <Grid container style={{width:'75vw'}}>
            <Grid item lg={3} md={4} sm={6} xs={12} style={{padding:'10px 20px'}}>
                <Box className='container'>
                <Image className='image' src='https://d.novoresume.com/images/doc/minimalist-resume-template.png' alt='template'/>
                </Box>
                <Box className='middle'>
                    <Box className='text'><Typography>Create Resume</Typography></Box>
                </Box>
                <Box>
                    <Typography variant='h6' fontWeight={600}>Minimalist 1/6</Typography>
                    <Typography color='grey' style={{lineHeight:'inherit',fontSize:'14px'}}>A simple and easy to follow resume template. Perfect for more conservative industries which prefer less flashy templates.</Typography>
                </Box>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12} style={{padding:'10px 20px'}}>
                <Image src='https://d.novoresume.com/images/doc/minimalist-resume-template.png' alt='template'/>
                <Box>
                    <Typography variant='h6' fontWeight={600}>Minimalist 1/6</Typography>
                    <Typography color='grey' style={{lineHeight:'inherit',fontSize:'14px'}}>A simple and easy to follow resume template. Perfect for more conservative industries which prefer less flashy templates.</Typography>
                </Box>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12} style={{padding:'10px 20px'}}>
                <Image src='https://d.novoresume.com/images/doc/minimalist-resume-template.png' alt='template'/>
                <Box>
                    <Typography variant='h6' fontWeight={600}>Minimalist 1/6</Typography>
                    <Typography color='grey' style={{lineHeight:'inherit',fontSize:'14px'}}>A simple and easy to follow resume template. Perfect for more conservative industries which prefer less flashy templates.</Typography>
                </Box>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12} style={{padding:'10px 20px'}}>
                <Image src='https://d.novoresume.com/images/doc/minimalist-resume-template.png' alt='template'/>
                <Box>
                    <Typography variant='h6' fontWeight={600}>Minimalist 1/6</Typography>
                    <Typography color='grey' style={{lineHeight:'inherit',fontSize:'14px'}}>A simple and easy to follow resume template. Perfect for more conservative industries which prefer less flashy templates.</Typography>
                </Box>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12} style={{padding:'10px 20px'}}>
                <Image src='https://d.novoresume.com/images/doc/minimalist-resume-template.png' alt='template'/>
                <Box>
                    <Typography variant='h6' fontWeight={600}>Minimalist 1/6</Typography>
                    <Typography color='grey' style={{lineHeight:'inherit',fontSize:'14px'}}>A simple and easy to follow resume template. Perfect for more conservative industries which prefer less flashy templates.</Typography>
                </Box>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12} style={{padding:'10px 20px'}}>
                <Image src='https://d.novoresume.com/images/doc/minimalist-resume-template.png' alt='template'/>
                <Box>
                    <Typography variant='h6' fontWeight={600}>Minimalist 1/6</Typography>
                    <Typography color='grey' style={{lineHeight:'inherit',fontSize:'14px'}}>A simple and easy to follow resume template. Perfect for more conservative industries which prefer less flashy templates.</Typography>
                </Box>
            </Grid>
        </Grid>
        </Box>
    </Box>
  )
}

export default Templates