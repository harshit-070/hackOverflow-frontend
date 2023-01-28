import React from 'react'
import {Box, Grid, Stack, Typography} from '@mui/material'
import DashboardCard from './Card'
import Logo from '../../Assets/Logo.jpeg'
import dashboard_background from '../../Assets/dashboard_background.jpeg'
import { Email, GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material'

const Dashboard = () => {
  return (
    <Grid container sx={{padding:'50px',background: 'linear-gradient(218deg, rgba(34,193,195,1) 11%, rgba(14,2,80,1) 100%)',}}>
        <Grid item lg={4} sx={{padding:'10px',alignSelf:'center',justifyContent:'center',textAlign:'center'}}>
            <Typography variant='h4' fontWeight={600} gutterBottom >SHIVAM KUMAR</Typography>
            <img src='https://cdn3d.iconscout.com/3d/premium/thumb/young-businessman-avatar-5692595-4743364.png' alt='profileImage' style={{width:'70%',height:'auto',borderRadius:'50%',background:'white'}}/>
            <Stack direction='row' spacing={2} sx={{display:'flex',justifyContent:'center',marginTop:'30px'}}>
                <Email sx={{backgroundColor:'lightgray',padding:'10px',borderRadius:'50%',cursor:'pointer'}}/>
                <LinkedIn sx={{backgroundColor:'lightgray',padding:'10px',borderRadius:'50%',cursor:'pointer'}}/>
                <Instagram sx={{backgroundColor:'lightgray',padding:'10px',borderRadius:'50%',cursor:'pointer'}}/>
                <GitHub sx={{backgroundColor:'lightgray',padding:'10px',borderRadius:'50%',cursor:'pointer'}}/>
                <Twitter sx={{backgroundColor:'lightgray',padding:'10px',borderRadius:'50%',cursor:'pointer'}}/>
            </Stack>
        </Grid>
        <Grid item lg={4} sx={{padding:'10px'}}>
            <DashboardCard/>
            <br/>
            <DashboardCard/>
        </Grid>
        <Grid item lg={4} sx={{padding:'10px'}}>
            <DashboardCard/>
        </Grid>
    </Grid>
  )
}

export default Dashboard