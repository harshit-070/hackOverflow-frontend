import { IconButton } from "@mui/material";
import React, { useEffect } from "react";
import { useLazyGoogleRedirectURLQuery } from "../../service/user.service";
import { toastError, toastSuccess } from "../../utils/toastMessage";
import GoogleIcon from "@mui/icons-material/Google";

const GoogleRedirect = () => {
  const [googleRedirectURL, googleRedirectURLResult] =
    useLazyGoogleRedirectURLQuery();

  useEffect(() => {
    const { isSuccess, isError, error, data } = googleRedirectURLResult;

    if (isSuccess) {
      console.log(data);
      window.location.replace(data.data.redirectURL);
    }

    if (isError) {
      toastError("", error);
    }
  }, [googleRedirectURLResult]);

  const handleclick = () => {
    toastSuccess("Please Wait. Redirecting to Google...");

    googleRedirectURL();
  };

  return (
    <IconButton onClick={handleclick} size="large">
      <GoogleIcon fontSize="256px" />
    </IconButton>
  );
};

export default GoogleRedirect;
