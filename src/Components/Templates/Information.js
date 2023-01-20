import { Box, Drawer, List, ListItem, Stack, TextField, Typography } from '@mui/material'
import {Architecture, ContactPage, ContentPaste, Grade, KeyboardArrowLeft, Person, Psychology,School} from '@mui/icons-material';
import React from 'react'
import { useState } from 'react';
import Info from './Info';
import ContactDetails from './ContactDetails';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Achievements from './Achievements';
// import { Dayjs } from 'dayjs';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const drawerWidth = '25vw'

const Information = ({open,setOpen}) => {
  const [details,setDetails]=useState(false)
  const [tagline,settagline]=useState('Your CV Sections')
  return (
    <Drawer
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
    }}
    open={open}
    onClose={() => setOpen(false)}
    >
      <Box style={{padding:'10px 10px 0px 20px'}}>
      <Box style={{display:'flex'}}>
            <Typography fontWeight={600}>{tagline}</Typography>
            <Box style={{marginLeft:'auto',cursor:'pointer'}} onClick={()=>setOpen(false)} component='span'>
              <KeyboardArrowLeft style={{fontSize:'25px',fontWeight:600}}/>
            </Box>
          </Box>
        {
          details?
          <>
          <List>
            <ListItem><Person/>&nbsp;&nbsp;Personal Details</ListItem>
            <ListItem><ContactPage/>&nbsp;&nbsp;Contact Details</ListItem>
            <ListItem><School/>&nbsp;&nbsp;Education</ListItem>
            <ListItem><Psychology/>&nbsp;&nbsp;Experience</ListItem>
            <ListItem><ContentPaste/>&nbsp;&nbsp;Projects</ListItem>
            <ListItem><Architecture/>&nbsp;&nbsp;Skills</ListItem>
            <ListItem><Grade/>&nbsp;&nbsp;Achievements</ListItem>
          </List>
          </>
          :
          <>
          <Info/>
          <ContactDetails/>
          <Education/>
          <Experience/>
          <Projects/>
          <Skills/>
          <Achievements/>
          </>
        }
      
      </Box>
    </Drawer>
  )
}

export default Information