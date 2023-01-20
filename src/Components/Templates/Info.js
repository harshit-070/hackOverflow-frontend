import { Stack, TextField } from '@mui/material'
import React from 'react'

const Info = () => {
  return (
    <Stack direction='column'>
        <TextField
        variant='standard'
        placeholder='Enter First Name'
        label='First Name'
        gutterBottom
        />
        <TextField
        variant='standard'
        placeholder='Enter Last Name'
        label='Last Name'
        gutterBottom
        />
        <TextField
        variant='standard'
        placeholder='Description'
        label='About'
        gutterBottom
        />
        </Stack>
  )
}

export default Info