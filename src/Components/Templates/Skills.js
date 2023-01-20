import { Button, Stack, styled, TextField } from '@mui/material'
import React, { useState } from 'react'

const StyledButton=styled(Button)`
text-transform:none;
`
const Skills = () => {
    const [skill,setskill]=useState('')
  return (
    <Stack direction='column'>
        <TextField
        size='small'
        variant='standard'
        label='Skill Name'
        value={skill}
        onChange={(e)=>setskill(e.target.value)}
        style={{marginBottom:'15px'}}
        />
        <StyledButton >+ Add new skill</StyledButton>
    </Stack>
  )
}

export default Skills