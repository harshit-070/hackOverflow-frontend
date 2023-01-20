import { Avatar, Button, Stack ,styled} from '@mui/material'
import React from 'react'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


//Style
const StyledButton=styled(Button)`
  padding:2px 10px;
  color:white;
  text-transform:none;
  border-radius:30px;
  font-size:16px;
  font-weight:600;
  &:hover{
    border:2px solid white;
    transform:scale(1.1)
  }

`
const LoginButton=styled(Button)`
  padding:2px 10px;
  color:white;
  background:#eac7c7;
  text-transform:none;
  border-radius:10px;
  font-size:16px;
  font-weight:600;
  &:hover{
    border:2px solid white;
    transform:scale(1.1)
  }

`
const NavButtons =({direction}) => {
  const navigate=useNavigate();
  return (
    <>
      <Stack direction={direction} spacing={2} sx={{marginLeft:'auto'}}>
          <StyledButton
          variant='text'
          onClick={()=>navigate('')}
          >
            Home
          </StyledButton>
          <StyledButton
          variant='text'
          onClick={()=>navigate('/about')}
          >
            About 
          </StyledButton>
          <StyledButton
          variant='text'
          onClick={()=>navigate('/templates')}
          >
            Templates
          </StyledButton>
          <StyledButton
          variant='text'
          onClick={()=>navigate('/scorer')}
          >
            Resume Scorer
          </StyledButton>
          <StyledButton
          variant='text'
          onClick={()=>navigate('/contact')}
          >
            Contact
          </StyledButton>
          <StyledButton
          variant='text'
          onClick={()=>navigate('/signup')}
          >
            SignUp
          </StyledButton>
          <LoginButton
          variant='text'
          onClick={()=>navigate('/login')}
          >
            Login
          </LoginButton>
      </Stack>
    </>
  )
}

export default NavButtons