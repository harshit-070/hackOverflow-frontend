import { Stack, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Achievements = () => {
    const [description,setdescription]=useState('')
  return (
    <Stack direction='column'>
        <TextField
        size='small'
        variant='standard'
        label='Description'
        value={description}
        onChange={(e)=>setdescription(e.target.value)}
        style={{marginBottom:'15px'}}
        />
    </Stack>
  )
}

export default Achievements