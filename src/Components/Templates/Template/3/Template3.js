import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'

const Template3 = () => {
  return (
    <Grid container style={{boxShadow: "0 7px 15px 0 grey",}}>
        <Grid item lg={6} md={6} sm={6} xs={6} style={{backgroundColor:'black',color:'white',padding:'20px 10px 10px 50px'}}>
            <Box>
                <img src='' alt=''/>
            </Box>
            <Box>
                <Typography variant='h6' fontWeight={600}>Contact</Typography>
                <Divider style={{fontColor:'white'}}/>
                <Typography>Phone:</Typography>
                <Typography>Email:</Typography>
                <Typography>Location:</Typography>
                <Typography>Linkedin:</Typography>
                <Typography>Github:</Typography>

                <Typography>Education</Typography>
                <Divider/>
                <Typography>Phone:</Typography>
                <Typography>Email:</Typography>
                <Typography>Location:</Typography>
                <Typography>Linkedin:</Typography>
                <Typography>Github:</Typography>

                <Typography>Contact</Typography>
                <Divider/>
                <Typography>Phone:</Typography>
                <Typography>Email:</Typography>
                <Typography>Location:</Typography>
                <Typography>Linkedin:</Typography>
                <Typography>Github:</Typography>

                <Typography>Contact</Typography>
                <Divider/>
                <Typography>Phone:</Typography>
                <Typography>Email:</Typography>
                <Typography>Location:</Typography>
                <Typography>Linkedin:</Typography>
                <Typography>Github:</Typography>
            </Box>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6}></Grid>
    </Grid>
  )
}

export default Template3