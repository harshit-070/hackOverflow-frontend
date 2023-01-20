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
    <Box style={{marginBottom:'15px'}}>
        <Typography color='orange' variant='subtitle1' fontSize='12px'>Enter details on how to reach you and contact you
        </Typography>
    </Box>
    <Stack direction='column'>
        <TextField
        size='small'
        variant='standard'
        label='Mobile Number'
        value={mobile}
        onChange={(e)=>setmobile(e.target.value)}
        style={{marginBottom:'15px'}}
        />
        <Typography style={{marginBottom:'15px'}}>Address</Typography>
        <Box style={{display:'flex', gap : "10px"}}>
        <Box>
            <TextField
            variant='standard'
            label='City'
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
            value={country}
            onChange={(e)=>setcountry(e.target.value)}
            style={{marginBottom:'15px'}}
            />
        </Box>
        </Box>
        <TextField
        variant='standard'
        label='Email Id'
        value={email}
        onChange={(e)=>setemail(e.target.value)}
        style={{marginBottom:'15px'}}
        />
        <TextField
        variant='standard'
        label='LinkedIn URL'
        value={linkedin}
        onChange={(e)=>setlinkedin(e.target.value)}
        style={{marginBottom:'15px'}}
        />
        <TextField
        variant='standard'
        label='Github URL'
        value={github}
        onChange={(e)=>setgithub(e.target.value)}
        style={{marginBottom:'15px'}}
        />
    </Stack>
    </>

  )
}

export default ContactDetails