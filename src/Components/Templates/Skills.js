import { Button, Chip, Stack, styled, TextField } from '@mui/material'
import React, { useState } from 'react'

const StyledButton=styled(Button)`
text-transform:none;
`
const Skills = () => {
    const [skill,setskill]=useState('')
    const handleClick = () => {
        console.info('You clicked the Chip.');
      };
    
      const handleDelete = () => {
        console.info('You clicked the delete icon.');
      };
    

  return (
    <Stack direction='column'>
        <TextField
        size='small'
        variant='standard'
        required
        label='Skill Name'
        value={skill}
        onChange={(e)=>setskill(e.target.value)}
        style={{marginBottom:'15px'}}
        />
        <Chip
        label="Clickable Deletable"
        variant="outlined"
        onClick={handleClick}
        onDelete={handleDelete}
      />
        <StyledButton >+ Add new skill</StyledButton>
    </Stack>
  )
}

export default Skills