import { Box, Stack, TextField, styled, IconButton } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import React, { useState, useEffect } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LogoH from "../../Assets/LogoH.jpeg";
import {
  useForgotPasswordMutation,
  useLazyForgotOTPQuery,
} from "../../service/user.service";
import { useNavigate } from "react-router-dom";
import { toastError, toastSuccess } from "../../utils/toastMessage";
import { useDispatch } from "react-redux";
import { setUser } from "../../feature/userSlice";

//Style
const Image = styled("img")({
  width: "100%",
  height: "140px",
  borderRadius: "5px",
});
const StyledButton = styled(LoadingButton)`
  font-size: 18px;
  text-transform: none;
  background-color: orangered;
  &:hover {
    background-color: #d93a00;
  }
`;

const SignUp = ({ setLogin }) => {
  const navigate = useNavigate();
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

  const [forgotOTP, forgotOTPResult] = useLazyForgotOTPQuery();
  const [forgotPassword, setForgotPassword] = useForgotPasswordMutation();

  useEffect(() => {
    const { isError, isLoading, isSuccess, error } = forgotOTPResult;
    setLoading(isLoading);
    if (isSuccess) {
      toastSuccess("OTP Sent to your email");
      setCheck(false);
    }
    if (isError) {
      toastError("", error);
      setCheck(true);
    }
  }, [forgotOTPResult]);

  useEffect(() => {
    const { isLoading, isError, isSuccess, error, data } = setForgotPassword;
    setLoading(isLoading);
    if (isSuccess) {
      toastSuccess("Welcome to Resume Rise");
      dispatch(setUser(data.data));
    }
    if (isError) {
      toastError("", error);
    }
  }, [dispatch, setForgotPassword]);

  const handleSignupClick = async (e) => {
    e.preventDefault();
    if (!check) {
      forgotPassword({
        email,
        password,
        confirmationPassword,
        otp: parseInt(otp),
      });
    } else {
      forgotOTP(email);
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
          margin: "25px 0px ",
          backgroundColor: "white",
        }}
      >
        <Image src={LogoH} alt="logo" />
        <p>Reset Password</p>

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
              {check ? "Continue" : "Reset Password"}
            </StyledButton>
          </Stack>
        </form>
      </Stack>
    </Box>
  );
};

export default SignUp;
