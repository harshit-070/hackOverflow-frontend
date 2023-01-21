import {
  Box,
  Stack,
  TextField,
  styled,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {useNavigate} from 'react-router-dom'
import GoogleRedirect from "../SignUp/GoogleRedirect";
import GithubRedirect from "../SignUp/GithubRedirect";
import { useLoginMutation } from "../../service/user.service";
import { LoadingButton } from "@mui/lab";
import { toastError } from "../../utils/toastMessage";
import { useDispatch } from "react-redux";
import { setUser } from "../../feature/userSlice";
import { redirect } from "react-router-dom";
import LogoH from '../../Assets/LogoH.jpeg'

//Components

//Style
const Image = styled("img")({
  width: "100%",
  height: "140px",
  borderRadius:'5px'
});

const Login = ({setLogin}) => {
  const navigate= useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  const dispatch = useDispatch();
  const [login, loginResult] = useLoginMutation();

  useEffect(() => {
    const { isLoading, isError, isSuccess, data, error } = loginResult;
    setLoading(isLoading);
    if (isSuccess) {
      dispatch(setUser(data.data.user));
      redirect("/template");
    }

    if (isError) {
      toastError("", error);
    }
  }, [dispatch, loginResult]);

  const handleClick = () => {
    login({
      email,
      password,
    });
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center"}}>
      <Stack
        direction="column"
        spacing={2}
        sx={{
          width: "500px",
          boxShadow: "0 7px 15px 0 grey",
          alignItems: "center",
          padding: "15px",
          marginTop: "25px",
          backgroundColor:'white' 
        }}
      >
        <Image src={LogoH} alt="logo" />
        <Stack
          direction="column"
          spacing={2}
          style={{ padding: "10px", width: "460px" }}
        >
          <TextField
            required
            variant="outlined"
            size="large"
            type="email"
            placeholder="Enter Email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            variant="outlined"
            size="large"
            placeholder="Enter Password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    // aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <LoadingButton
            variant="contained"
            sx={{ fontSize: "18px" }}
            onClick={handleClick}
          >
            Login
          </LoadingButton>
          <Box
            onClick={()=>{
              setLogin("signup")
              navigate('/forgot')}} style={{
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <Typography variant='subtitle1' component='span' sx={{'&:hover':{color:'red'}}}>forgot password?</Typography>
          </Box>
          <Box
            onClick={()=>{
              setLogin("signup")
              navigate('/')}} style={{
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <Typography variant='subtitle1' component='span' sx={{'&:hover':{color:'blue'}}}>Do not have any account? Signup</Typography>
          </Box>
          <Typography textAlign="center" fontWeight={600}>OR</Typography>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <GoogleRedirect />
            <GithubRedirect />
          </Box>
          
        </Stack>
      </Stack>
    </Box>
  );
};

export default Login;
