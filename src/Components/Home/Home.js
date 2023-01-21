import { Box, Grid } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import React from "react";
import Login from "../Login/Login";
import Logo from "../../Assets/Logo.jpeg";

const Home = () => {
  return (
    <Grid container style={{backgroundColor:'#282634',paddingBottom:'50px'}}>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <img src={Logo} alt="Logo" width='100%' height='auto'/>
        </Box>
        <Box>
          <div style={{ color: "white", fontSize: "40px", fontWeight: 600 }}>
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
        <Login />
      </Grid>
    </Grid>
  );
};

export default Home;
