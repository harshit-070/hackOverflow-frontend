import { Box, FormControl, InputLabel, MenuItem, Select, Stack, styled, TextField,Button } from '@mui/material'
import React, { useState } from 'react'

const StyledButton=styled(Button)`
text-transform:none;
`
const Education = () => {
    const [education,seteducation]=useState('')
    const [category,setcategory]=useState('')
    const [otherCategory,setOtherCategory]=useState('')
    const [institute,setinstitute]=useState('')
    const [percentage,setpercentage]=useState('')
    const [location,setlocation]=useState('')
  return (
    <>
    <Stack direction='column' spacing={2}>
        <TextField
        size='small'
        variant='standard'
        label='Education with specialization'
        required
        value={education}
        onChange={(e)=>seteducation(e.target.value)}
        />

      
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select
        variant='standard'
        required
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
      {
            category==='Others'?
            <TextField
            size='small'
            required
            variant='standard'
            label='Add Category'
            value={otherCategory}
            onChange={(e)=>setOtherCategory(e.target.value)}
            />
            :
            null
          }

        <TextField
        variant='standard'
        label='Institute Name'
        required
        value={institute}
        onChange={(e)=>setinstitute(e.target.value)}
        />
        <TextField
        variant='standard'
        label='Percentage/CGPA'
        required
        value={percentage}
        onChange={(e)=>setpercentage(e.target.value)}
        />
        <TextField
        variant='standard'
        required
        label='Location'
        value={location}
        onChange={(e)=>setlocation(e.target.value)}
        />
        <StyledButton >+ Add Education</StyledButton>
    </Stack>
    </>
  )
}

export default Education