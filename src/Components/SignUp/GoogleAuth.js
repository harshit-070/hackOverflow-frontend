import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { redirect, useSearchParams } from "react-router-dom";
import { setUser } from "../../feature/userSlice";
import { useGoogleAuthMutation } from "../../service/user.service";
import { toastError } from "../../utils/toastMessage";

const GoogleAuth = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  const [googleAuth, googleAuthResult] = useGoogleAuthMutation();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(code);
    if (!code) {
      toastError("Invalid Code");
      redirect("/");
      return;
    } else {
      googleAuth(code);
    }
  }, [code, googleAuth]);

  useEffect(() => {
    const { isError, error, data, isSuccess } = googleAuthResult;

    if (isSuccess) {
      dispatch(setUser(data.data.user));
      redirect("/template");
      return;
    }

    if (isError) {
      toastError("", error);
      redirect("/signup");
      return;
    }
  }, [googleAuthResult, dispatch]);

  return <div>Please Wait....</div>;
};

export default GoogleAuth;
