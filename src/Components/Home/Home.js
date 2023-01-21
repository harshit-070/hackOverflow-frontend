import { Box, Grid } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import React, { useContext, useState } from "react";
import Login from "../Login/Login";
import Logo from "../../Assets/Logo.jpeg";
import SignUp from "../SignUp/SignUp";

const Home = () => {
  const [login,setLogin]=useState('login');
  
  return (
    <Grid container style={{backgroundColor:'#282634',paddingBottom:'30px'}}>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <img src={Logo} alt="Logo" width='75%' height='400px'/>
        </Box>
        <Box style={{display:'flex',justifyContent:'center',padding:'0 10px'}}>
          <div style={{ color: "white", fontSize: "40px", fontWeight: 600,textAlign:'center' }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                "Elevate your career with a standout resume",
                "Land your dream job with a professional resume.",
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
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12} >
        {
          login==='login'?
          <Login setLogin={setLogin} />
           :
          <SignUp setLogin={setLogin}/>
        } 
        
      </Grid>
    </Grid>
  );
};

export default Home;
