import { Box, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

const Education = () => {
    const [education,seteducation]=useState('')
    const [category,setcategory]=useState('')
    const [institute,setinstitute]=useState('')
    const [percentage,setpercentage]=useState('')
    const [location,setlocation]=useState('')
  return (
    <>
    {/* <Box style={{marginBottom:'15px'}}>
        <Typography color='orange' variant='subtitle1' fontSize='10px'>Enter details on how to reach you and contact you
        </Typography>
    </Box> */}
    <Stack direction='column'>
        <TextField
        size='small'
        variant='standard'
        label='Education with specialization'
        value={education}
        onChange={(e)=>seteducation(e.target.value)}
        style={{marginBottom:'15px'}}
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
          <MenuItem value='secondary'>Secondary</MenuItem>
          <MenuItem value='Higher Secondary'>Higher Secondary</MenuItem>
          <MenuItem value='Diploma'>Diploma</MenuItem>
          <MenuItem value='Graduation'>Graduation</MenuItem>
          <MenuItem value='Post Graduation'>Post Graduation</MenuItem>
          <MenuItem value='PhD'>PhD</MenuItem>
          <MenuItem value='Others'>Others</MenuItem>
        </Select>
      </FormControl>
    </Box>

        <TextField
        variant='standard'
        label='Institute Name'
        value={institute}
        onChange={(e)=>setinstitute(e.target.value)}
        style={{marginBottom:'15px'}}
        />
        <TextField
        variant='standard'
        label='Percentage/CGPA'
        value={percentage}
        onChange={(e)=>setpercentage(e.target.value)}
        style={{marginBottom:'15px'}}
        />
        <TextField
        variant='standard'
        label='Location'
        value={location}
        onChange={(e)=>setlocation(e.target.value)}
        style={{marginBottom:'15px'}}
        />
    </Stack>
    </>
  )
}

export default Education