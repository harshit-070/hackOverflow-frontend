import { Box, Stack, TextField,styled, Button, Typography, IconButton } from '@mui/material'
import React, { useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { useNavigate } from 'react-router-dom';

//Components
// import { DataContext } from '../../Context/DataProvider';
// import { userSignup } from '../../services/Api';

//Style
const Image=styled('img')({
    width:'80%',
    height:'140px',
})
const StyledButton=styled(Button)`
font-size:18px;
text-transform:none;
background-color:orangered;
&:hover{
    background-color:#d93a00;
}
`
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
const SignUp = ({view}) => {
    const logoURL='https://www.iitjammu.ac.in/logo/IIT_JAMMU_LOGO.png';
    const [name,setName]=useState('')
    const [userName,setUserName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [check,setCheck]=useState(false);
    // const navigate=useNavigate();
    // const {setAccount}=useContext(DataContext);
    const [showPassword, setShowPassword] =useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };
    // const signupHandler=async ()=>{
    //     const user={
    //         name:name,
    //         email:email,
    //         password:password
    //     }
    //     if(!name || !email || !password){
    //         return setError('Please enter all details')
    //     }
    //     const temp = email.split("@");
    //     if (temp.pop() !== "iitjammu.ac.in") {
    //         return setError("Invalid Email id");
    //     }
    //     let response = await userSignup(user);
    //     console.log(response.data);
    //     localStorage.setItem('user',JSON.stringify(response.data))
    //     navigate('/')
    // }
  return (
    <Box sx={{display:'flex',justifyContent:'center'}}>
        <Stack direction='column' spacing={2} sx={{width:'500px',boxShadow:'0 7px 15px 0 grey',alignItems:'center',padding:'15px',marginTop:'25px'}}>
            <Image src={logoURL} alt='logo'/>
            <Stack direction='column' spacing={2} style={{padding:'10px',width:'460px'}}>
                {
                    check?
                    <>
                    <TextField 
                    required 
                    variant='outlined'
                    size='large' 
                    placeholder='Enter Email'
                    type='email' 
                    label='Email' 
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    </>
                    :
                    <>
                    <TextField  
                    variant='outlined' 
                    size='large' 
                    placeholder='Enter Name' 
                    label='Name'  
                    required
                    onChange={(e)=>setName(e.target.value)} 
                    />
                    <TextField  
                    variant='outlined' 
                    size='large' 
                    placeholder='Enter UserName' 
                    label='UserName'  
                    required
                    onChange={(e)=>setUserName(e.target.value)} 
                    />
                    <TextField 
                    required 
                    variant='outlined' 
                    size='large' 
                    placeholder='Enter Password' 
                    label='Password' 
                    type={showPassword ? 'text' : 'password'}
                    onChange={(e)=>setPassword(e.target.value)}
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
                    <TextField  
                    variant='outlined' 
                    size='large' 
                    label='Confirm Password' 
                    placeholder='Re-Enter Password'  
                    required
                    onChange={(e)=>setName(e.target.value)} 
                    />
                    </>
                }
                <StyledButton variant='contained' /*onClick={signupHandler}*/>
                    {
                    check?
                    'Continue'
                    :
                    'Sign Up'
                    }
                    </StyledButton>
                <Box /*onClick={()=>navigate('/login')}*/ style={{cursor:'pointer',textAlign:'center'}}>
                {/* <Typography variant='subtitle1'component='span' sx={{'&:hover':{color:'blue'}}}>Already have an account? Login</Typography> */}
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

export default SignUp