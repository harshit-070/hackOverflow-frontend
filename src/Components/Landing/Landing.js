import React from 'react'
import {Box, Button, Grid, styled, Typography} from '@mui/material'
import dashboard from '../../Assets/dashboard.png'
import { useNavigate } from 'react-router-dom'

const StyledButton=styled(Button)`
text-transform:none;
padding:10px 20px;
border-radius:10px;
font-weight:600;
`

const Landing = () => {
    const navigate=useNavigate();
  return (
    <Grid container sx={{padding:'50px',background: 'linear-gradient(to right, #355c7d, #6c5b7b, #c06c84)',color:'white'}}>
        <Grid item lg={7} sx={{alignSelf:'center'}}>
            <Typography component='span' variant='h1' sx={{fontWeight:600,color:'#fd8519'}}>Resume</Typography>&nbsp;
            <Typography component='span' variant='h1' sx={{fontWeight:600,color:'white'}}>Rise</Typography>
            <Box sx={{margin:'20px 0',padding:'10px 30px'}}>
                <Typography variant='h5' gutterBottom>Build your brand-new resume in as little as 5 minutes.</Typography>
                <Typography variant='h4' fontWeight={600}>Try it for free.</Typography>
                
            </Box>
            <Box sx={{margin:'20px 0',padding:'10px 30px'}}>
            <StyledButton variant='contained' onClick={()=>navigate('/templates')} color="warning">Create Resume</StyledButton>
            </Box>
            
        </Grid>
        <Grid item lg={5} sx={{justifySelf:'center'}}>
            <Box>
            <img src={dashboard} alt='dashboard' style={{width:'100%',height:'auto'}}/>
            </Box>
        </Grid>
    </Grid>

  )
}

export default Landing