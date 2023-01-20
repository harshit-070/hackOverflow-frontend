import { Box,Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Projects = () => {
    const [title,settitle]=useState('')
    const [role,setrole]=useState('')
    const [company,setcompany]=useState('')
    const [location,setlocation]=useState('')
    const [description,setdescription]=useState('')
    const [value, setValue] = React.useState(null);
  return (
    <>
    <Stack direction='column'>
        <TextField
        size='small'
        variant='standard'
        label='Project Title'
        value={title}
        onChange={(e)=>settitle(e.target.value)}
        style={{marginBottom:'15px'}}
        />
        <TextField
        size='small'
        variant='standard'
        label='Project Role'
        value={role}
        onChange={(e)=>setrole(e.target.value)}
        style={{marginBottom:'15px'}}
        />
        <TextField
        variant='standard'
        label='Company/Institute Name'
        value={company}
        onChange={(e)=>setcompany(e.target.value)}
        style={{marginBottom:'15px'}}
        />
        <TextField
        variant='standard'
        label='Location'
        value={location}
        onChange={(e)=>setlocation(e.target.value)}
        style={{marginBottom:'15px'}}
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
        value={description}
        onChange={(e)=>setdescription(e.target.value)}
        style={{marginBottom:'15px'}}
        />
    </Stack>
    </>
  )
}

export default Projects