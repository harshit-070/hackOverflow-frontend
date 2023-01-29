import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import NavButtons from "./NavButtons";
import Logo from "../../Assets/Logo.jpeg";

const Navbar = () => {
  return (
    <AppBar className="MuiAppBar-root" color="error">
      <Toolbar>
        <Box
          component="img"
          sx={{
            height: 60,
            width: 64,
            borderRadius: "50%",
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
