import { Box, Stack, TextField,styled, Button, Typography, IconButton } from '@mui/material'
import React, { useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import {useNavigate} from 'react-router-dom'

//Components

//Style
const Image=styled('img')({
    width:'80%',
    height:'140px',
})
const Google=styled(Box)`
background: #ffcac8;
border-radius: 10px;
padding:10px 20px;
display:flex;
align-items:center;

`
const Linkedin=styled(Box)`
background: #7dd0f3;
border-radius: 10px;
padding:10px 20px;
display:flex;
align-items:center;

`
const Login = () => {
    // const navigate= useNavigate();
    const logoURL='https://www.iitjammu.ac.in/logo/IIT_JAMMU_LOGO.png';
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [showPassword, setShowPassword] =useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };
    // const loginHandler= async()=>{
    //     const user={
    //         email:email,
    //         password:password
    //     }
    //     if(!email || !password){
    //         return setError('Please enter all details')
    //     }
    //     const temp = email.split("@");
    //     if (temp.pop() !== "iitjammu.ac.in") {
    //         return setError("Invalid Email id");
    //     }
    //     let response = await userLogin(user);
    //     if(response.status!==200){
    //         return setError('Invalid email or password ')
    //     }
    //     localStorage.setItem('user',JSON.stringify(response.data))
    //     navigate('/')   
    // }
  return (
    <Box sx={{display:'flex',justifyContent:'center'}}>
        <Stack direction='column' spacing={2} sx={{width:'500px',boxShadow:'0 7px 15px 0 grey',alignItems:'center',padding:'15px',marginTop:'25px'}}>
            <Image src={logoURL} alt='logo'/>
            <Stack direction='column' spacing={2} style={{padding:'10px',width:'460px'}}>
                <TextField 
                required 
                variant='outlined' 
                size='large' 
                type='email'
                placeholder='Enter Email' 
                label='Email'
                onChange={(e)=>setEmail(e.target.value)}  
                />
                <TextField 
                required 
                variant='outlined' 
                size='large' 
                placeholder='Enter Password' 
                label='Password' 
                onChange={(e)=>setPassword(e.target.value)}
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                    endAdornment:(
                    <InputAdornment position="end">
                        <IconButton
                        // aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    )
                }} 
                />
                <Button variant='contained' sx={{fontSize:'18px'}} /*onClick={loginHandler}*/>Login</Button>
                <Box /*onClick={()=>navigate('/signup')}*/ style={{cursor:'pointer',textAlign:'center'}}>
                {/* <Typography variant='subtitle1' component='span' sx={{'&:hover':{color:'blue'}}}>Do not have any account? Signup</Typography> */}
                </Box>
                <Typography textAlign='center'>OR</Typography>
                <Box style={{display:'flex',justifyContent:'space-between'}}>
                    <Google component='span'>
                        Continue with Google &nbsp;
                        <img src='https://banner2.cleanpng.com/20171216/6c0/google-png-5a3554027e9924.3682726615134443545186.jpg' alt='goole'width='20px' height='25px'/>
                    </Google>
                    <Linkedin component='span'>
                        Continue with Linkedin &nbsp;
                        <img src='https://banner2.cleanpng.com/20171202/e3c/linkedin-png-picture-5a22d434d1abf9.4575882015122319888588.jpg' alt='linkedin'width='20px' height='25px'/>
                    </Linkedin>
                </Box>
            </Stack>
        </Stack>
    </Box>
  )
}

export default Login