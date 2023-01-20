import { Avatar, Button, Stack ,styled} from '@mui/material'
import React from 'react'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
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
  return (
    <>
      <Stack direction={direction} spacing={2} sx={{marginLeft:'auto'}}>
          <StyledButton
          variant='text'
          // onClick={()=>navigate('/')}
          >
            Templates
          </StyledButton>
          <StyledButton
          variant='text'
          // onClick={()=>navigate('/companies')}
          >
            About 
          </StyledButton>
          <StyledButton
          variant='text'
          // onClick={()=>navigate('/calendar')}
          >
            Contact
          </StyledButton>
          <StyledButton
          variant='text'
          // onClick={()=>navigate('/calendar')}
          >
            SignUp
          </StyledButton>
          <LoginButton
          variant='text'
          // onClick={()=>navigate('/calendar')}
          >
            Login
          </LoginButton>
      </Stack>
    </>
  )
}

export default NavButtons