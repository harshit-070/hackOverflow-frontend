import React from "react";
import { AppBar, Box, Toolbar, styled } from "@mui/material";
import NavButtons from "./NavButtons";
import Logo from "../../Assets/Logo.jpeg";
//Style
const Image = styled("img")({
  height: "70px",
  width: "auto",
});

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Box sx={{ padding: "10px 20px" }}>
          <Image scr={Logo} alt="logo" />
        </Box>
        <NavButtons direction="row" />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
