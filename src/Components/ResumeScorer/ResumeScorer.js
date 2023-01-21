import { Box } from '@mui/material'
import { Typewriter } from "react-simple-typewriter";
import React from 'react'

const ResumeScorer = () => {
  return (
    <Box style={{height:"300px",display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div style={{ color: "skyblue", fontSize: "100px", fontWeight: 600,textAlign:'center' }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={["Coming Soon..."
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={80}
              delaySpeed={500}
              // onLoopDone={handleDone}
              // onType={handleType}
            />
          </div>
    </Box>
  )
}

export default ResumeScorer