import { Box,Stack, styled, TextField,Button } from '@mui/material'
import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const StyledButton=styled(Button)`
text-transform:none;
`
const Projects = () => {
    const [title,settitle]=useState('')
    const [role,setrole]=useState('')
    const [company,setcompany]=useState('')
    const [location,setlocation]=useState('')
    const [description,setdescription]=useState('')
    const [value, setValue] = React.useState(null);
  return (
    <>
    <Stack direction='column' spacing={2}>
        <TextField
        size='small'
        variant='standard'
        label='Project Title'
        value={title}
        onChange={(e)=>settitle(e.target.value)}
        required
        />
        <TextField
        size='small'
        variant='standard'
        label='Project Role'
        value={role}
        onChange={(e)=>setrole(e.target.value)}
        required
        />
        <TextField
        variant='standard'
        label='Company/Institute Name'
        value={company}
        onChange={(e)=>setcompany(e.target.value)}
        required
        />
        <TextField
        variant='standard'
        label='Location'
        value={location}
        onChange={(e)=>setlocation(e.target.value)}
        required
        />
        <Box style={{display:'flex',gap:5}}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Start Date"
          variant='standard'
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="End Date"
          variant='standard'
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      </Box>
      <TextField
        variant='standard'
        label='Description'
        multiline
        value={description}
        onChange={(e)=>setdescription(e.target.value)}
        required
        />
        <StyledButton >+ Add new Project</StyledButton>
    </Stack>
    
    </>
  )
}

export default Projects