import { Box, Grid, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const Footer = () => {
  return (
    <Grid container >
        <Grid item lg={3} md={3} sm={12} xs={12} style={{justifySelf:'center'}}>
           <Stack  direction='column' spacing={2} style={{justifyContent:'center'}}>
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
                />
            </Stack> 
        </Grid>
        <Grid item lg={3} md={3} sm={12} xs={12}>

        </Grid>
        <Grid item lg={3} md={3} sm={12} xs={12}>

        </Grid>
    </Grid>
  )
}

export default Footer