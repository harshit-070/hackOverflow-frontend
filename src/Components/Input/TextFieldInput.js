import { Box, Stack, TextField, Typography } from '@mui/material'

import React from 'react'

const TextFieldInput = ({value, setValue, label, props}) => {
  return (
    <TextField value={value} onChange={e=> setValue(e.target.value)} label={label} {...props} variant="standard"   />
  )
}

export default TextFieldInput