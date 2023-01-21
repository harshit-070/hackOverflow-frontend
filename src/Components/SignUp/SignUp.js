import {
  Box,
  Stack,
  TextField,
  styled,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import React, { useState, useEffect } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LogoH from '../../Assets/LogoH.jpeg'
import {
  useLazySendOTPQuery,
  useSignupUserMutation,
} from "../../service/user.service";
import { toastError, toastSuccess } from "../../utils/toastMessage";
import { useDispatch } from "react-redux";
import { setUser } from "../../feature/userSlice";
import GoogleRedirect from "./GoogleRedirect";
import { GitHub } from "@mui/icons-material";
import GithubRedirect from "./GithubRedirect";
// import { useNavigate } from 'react-router-dom';

//Components
// import { DataContext } from '../../Context/DataProvider';
// import { userSignup } from '../../services/Api';

//Style
const Image = styled("img")({
  width: "100%",
  height: "140px",
  borderRadius:'5px'
});
const StyledButton = styled(LoadingButton)`
  font-size: 18px;
  text-transform: none;
  background-color: orangered;
  &:hover {
    background-color: #d93a00;
  }
`;
const Google = styled(Box)`
  background: #ffcac8;
  border-radius: 10px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
`;
const Linkedin = styled(Box)`
  background: #7dd0f3;
  border-radius: 10px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
`;
const SignUp = ({ view }) => {
  const logoURL = "https://www.iitjammu.ac.in/logo/IIT_JAMMU_LOGO.png";

  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [check, setCheck] = useState(true);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // const navigate=useNavigate();
  // const {setAccount}=useContext(DataContext);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const [sendOTP, sendOTPResult] = useLazySendOTPQuery();
  const [signup, setSignupResult] = useSignupUserMutation();

  useEffect(() => {
    const { isError, isLoading, isSuccess, error } = sendOTPResult;
    setLoading(isLoading);
    if (isSuccess) {
      toastSuccess("OTP Sent to your email");
      setCheck(false);
    }
    if (isError) {
      toastError("", error);
      setCheck(true);
    }
  }, [sendOTPResult]);

  useEffect(() => {
    const { isLoading, isError, isSuccess, error, data } = setSignupResult;
    setLoading(isLoading);
    if (isSuccess) {
      toastSuccess("Welcome to Resume Rise");
      dispatch(setUser(data.data));
    }
    if (isError) {
      toastError("", error);
    }
  }, [dispatch, setSignupResult]);

  const handleSignupClick = async (e) => {
    e.preventDefault();
    if (!check) {
      signup({
        name,
        username,
        email,
        password,
        confirmationPassword,
        otp: parseInt(otp),
      });
    } else {
      sendOTP(email);
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Stack
        direction="column"
        spacing={2}
        sx={{
          width: "500px",
          boxShadow: "0 7px 15px 0 grey",
          alignItems: "center",
          padding: "15px",
          marginTop: "25px",
        }}
      >
        <Image src={LogoH} alt="logo" />
        <form onSubmit={handleSignupClick}>
          <Stack
            direction="column"
            spacing={2}
            style={{ padding: "10px", width: "460px" }}
          >
            {check ? (
              <>
                <TextField
                  required
                  variant="outlined"
                  size="large"
                  placeholder="Enter Email"
                  type="email"
                  label="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </>
            ) : (
              <>
                <TextField
                  required
                  variant="outlined"
                  size="large"
                  placeholder="Enter Email"
                  type="email"
                  label="Email"
                  disabled
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  size="large"
                  placeholder="Enter Name"
                  label="Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  size="large"
                  placeholder="Enter UserName"
                  label="UserName"
                  required
                  onChange={(e) => setUserName(e.target.value)}
                />
                <TextField
                  required
                  variant="outlined"
                  size="large"
                  placeholder="Enter Password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
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
                <TextField
                  variant="outlined"
                  type="password"
                  size="large"
                  label="Confirm Password"
                  placeholder="Re-Enter Password"
                  required
                  onChange={(e) => setConfirmationPassword(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  size="large"
                  label="OTP"
                  placeholder="Enter OTP"
                  required
                  onChange={(e) => setOtp(e.target.value)}
                />
              </>
            )}
            <StyledButton variant="contained" loading={loading} type="submit">
              {check ? "Continue" : "Sign Up"}
            </StyledButton>

            <Box
              /*onClick={()=>navigate('/login')}*/ style={{
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              {/* <Typography variant='subtitle1'component='span' sx={{'&:hover':{color:'blue'}}}>Already have an account? Login</Typography> */}
            </Box>
            <Typography textAlign="center" fontWeight={600}>OR</Typography>
            <Box style={{ display: "flex", justifyContent: "center" }}>
              <GoogleRedirect />
              <GithubRedirect />
            </Box>
          </Stack>
        </form>
      </Stack>
    </Box>
  );
};

export default SignUp;
