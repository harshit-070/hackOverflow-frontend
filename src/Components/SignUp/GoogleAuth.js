import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { redirect, useNavigate, useSearchParams } from "react-router-dom";
import { setUser } from "../../feature/userSlice";
import { useGoogleAuthMutation } from "../../service/user.service";
import { toastError } from "../../utils/toastMessage";

const GoogleAuth = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const navigate = useNavigate();
  const [googleAuth, googleAuthResult] = useGoogleAuthMutation();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(code);
    if (!code) {
      toastError("Invalid Code");
      return navigate("/");
    } else {
      googleAuth(code);
    }
  }, [code, googleAuth]);

  useEffect(() => {
    const { isError, error, data, isSuccess } = googleAuthResult;

    if (isSuccess) {
      console.log(data.data.user);
      dispatch(setUser(data.data.user));
      return navigate("/templates");
    }

    if (isError) {
      toastError("", error);
      return navigate("/");
    }
  }, [googleAuthResult, dispatch]);

  return <div>Please Wait....</div>;
};

export default GoogleAuth;
