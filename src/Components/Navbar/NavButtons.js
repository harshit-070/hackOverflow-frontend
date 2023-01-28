import { Button, Stack, styled } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

//Style
const StyledButton = styled(Button)`
  padding: 2px 10px;
  color: white;
  text-transform: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    // border:2px solid white;
    border: 2px solid grey;
    background-color: grey;
    transform: scale(1.1);
  }
`;
const LoginButton = styled(Button)`
  padding: 2px 10px;
  color: white;
  text-transform: none;
  border: 2px solid white;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    border: 2px solid grey;
    background-color: grey;
    transform: scale(1.1);
  }
`;
const NavButtons = ({ direction }) => {
  const navigate = useNavigate();
  const signupHandler = () => {
    navigate("");
  };
  const auth = localStorage.getItem("user");
  const logout = () => {
    localStorage.clear();
    navigate("");
  };
  const loginHandler = () => {
    navigate("");

    
  };
  return (
    <>
      <Stack direction={direction} spacing={2} sx={{ marginLeft: "auto" }}>
        <StyledButton variant="text" onClick={() => navigate("")}>
          Home
        </StyledButton>
        <StyledButton variant="text" onClick={() => navigate("/about")}>
          About
        </StyledButton>
        <StyledButton variant="text" onClick={() => navigate("/templates")}>
          Templates
        </StyledButton>
        <StyledButton variant="text" onClick={() => navigate("/scorer")}>
          Resume Scorer
        </StyledButton>
        {!auth ? (
          <>
            <StyledButton variant="text" onClick={signupHandler}>
              SignUp
            </StyledButton>
            <LoginButton variant="text" onClick={loginHandler}>
              Login
            </LoginButton>
          </>
        ) : (
          <>
            <LoginButton variant="text" onClick={logout}>
              Log Out
            </LoginButton>
          </>
        )}
      </Stack>
    </>
  );
};

export default NavButtons;
