import { Box, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const ContactDetails = () => {
    const [mobile,setmobile]=useState('')
    const [email,setemail]=useState('')
    const [city,setcity]=useState('')
    const [country,setcountry]=useState('')
    const [linkedin,setlinkedin]=useState('')
    const [github,setgithub]=useState('')
  return (
    <>
    <Stack direction='column' spacing={2}>
        <TextField
        size='small'
        variant='standard'
        label='Mobile Number'
        required
        value={mobile}
        onChange={(e)=>setmobile(e.target.value)}
        />
        <Box style={{display:'flex', gap : "10px"}}>
        <Box>
            <TextField
            variant='standard'
            label='City'
            required
            value={city}
            onChange={(e)=>setcity(e.target.value)}
            style={{marginBottom:'15px'}
        }
            />
        </Box>
        <Box>
            <TextField
            variant='standard'
            label='Country'
            required
            value={country}
            onChange={(e)=>setcountry(e.target.value)}

            />
        </Box>
        </Box>
        <TextField
        variant='standard'
        label='Email Id'
        required
        value={email}
        onChange={(e)=>setemail(e.target.value)}
        />
        <TextField
        variant='standard'
        label='LinkedIn URL'
        required
        value={linkedin}
        onChange={(e)=>setlinkedin(e.target.value)}
        />
        <TextField
        variant='standard'
        label='Github URL'
        required
        value={github}
        onChange={(e)=>setgithub(e.target.value)}
        />
    </Stack>
    </>

  )
}

export default ContactDetails