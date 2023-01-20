import React from 'react'
import {AppBar,Box,Toolbar,styled} from '@mui/material'
import NavButtons from './NavButtons'

//Style
const Image=styled('img')({
  height:'70px',
  width:'auto'
})
const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Box sx={{padding:'10px 20px'}}>
          <Image scr='https://www.iitjammu.ac.in/logo/IIT_JAMMU_LOGO.png' alt='logo'/>
        </Box>
        <NavButtons direction='row'/>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar