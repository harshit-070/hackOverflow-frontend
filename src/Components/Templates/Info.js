import { Stack, TextField } from '@mui/material'
import React from 'react'

const Info = () => {
  return (
    <Stack direction='column' spacing={2}>
        <TextField
        variant='standard'
        placeholder='Enter First Name'
        label='First Name'
        required
        />
        <TextField
        variant='standard'
        placeholder='Enter Last Name'
        label='Last Name'
        required
        />
        <TextField
        variant='standard'
        label='About Me'
        required
        />
        </Stack>
  )
}

export default Info