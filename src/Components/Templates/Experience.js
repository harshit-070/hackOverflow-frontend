import { Box, FormControl, InputLabel, MenuItem, Select, Stack, styled, TextField,Button } from '@mui/material'
import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const StyledButton=styled(Button)`
text-transform:none;
`
const Experience = () => {
    const [title,settitle]=useState('')
    const [category,setcategory]=useState('')
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
        label='Job Title'
        value={title}
        onChange={(e)=>settitle(e.target.value)}
        required
        />
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
        variant='standard'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={(e)=>setcategory(e.target.value)}
        >
          <MenuItem value='Internship'>Internship</MenuItem>
          <MenuItem value='Full-Time'>Full-Time</MenuItem>
          <MenuItem value='Others'>Others</MenuItem>
        </Select>
      </FormControl>
    </Box>

        <TextField
        variant='standard'
        label='Company Name'
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
        value={description}
        onChange={(e)=>setdescription(e.target.value)}
        required
        />
        <StyledButton >+ Add new Experience</StyledButton>
    </Stack>
    </>
  )
}

export default Experience