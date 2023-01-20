import { Box, Grid, Typography } from '@mui/material'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import React from 'react'
import { useState } from 'react';
import Information from './Information';

const Template = () => {
    const [open,setOpen]=useState(false)
  return (
    <Box>
        <Box style={{display:'inline-block',boxShadow: '2px 5px 5px grey',borderRadius:'0px 20px 20px 0px',padding:'0px 10px',cursor:'pointer'}} onClick={()=>setOpen(true)}>
            <KeyboardDoubleArrowRightIcon style={{fontWeight:600,fontSize:'40px'}}/>
        </Box>
        <Information open={open} setOpen={setOpen}/>
        <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12} style={{border:'2px solid red'}}>
                <Box style={{display:'flex',padding:'10px 20px',alignItems:'center'}}>
                    <Box>
                        <img src='https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1' alt='profile' width='100px' height='100px'style={{borderRadius:'50%',border:'2px solid grey'}}/>
                    </Box>
                    <Box>
                        <Typography variant='h4' fontWeight={600}> Shivam Kumar</Typography>
                        <Typography variant='subtitle1'> An engineering student with excellent problem solving skills and ability to perform well in a team. Passionate about coding.</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6} style={{border:'2px solid red'}}>
                <Box>
                    <Typography>2020uce0060@iitjammu.ac.in</Typography>
                </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6} style={{border:'2px solid red'}}>
                <Box>

                </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6} style={{border:'2px solid red'}}>
                <Box>

                </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6} style={{border:'2px solid red'}}>
                <Box>

                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Template