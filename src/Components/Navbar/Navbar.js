import React from "react";
import { AppBar, Box, Toolbar, styled } from "@mui/material";
import NavButtons from "./NavButtons";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../Assets/Logo.jpeg";
import background from '../../Assets/background.png'
//Style
const useStyles = makeStyles((theme) => ({
  header: {
    backgroundImage: `url(${background})`,
    // backgroundSize:'auto',
    backgroundSize: 'auto 64px',
    
  },
}));
const Image = styled("img")({
  height: "70px",
  width: "auto",
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.header}>
      <Toolbar 
        >
          <Box
            component="img"
            sx={{
            height: 60,
            width:64,
            borderRadius:'50%'
            }}
            alt="Your logo."
            src={Logo}
        />
        <NavButtons direction="row" />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
