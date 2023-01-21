import { IconButton } from "@mui/material";
import React, { useEffect } from "react";
import { useLazyGithubRedirectURLQuery } from "../../service/user.service";
import { toastError, toastSuccess } from "../../utils/toastMessage";
import GithubIcon from "@mui/icons-material/GitHub";

const GithubRedirect = () => {
  const [githubRedirectURL, githubRedirectURLResult] =
    useLazyGithubRedirectURLQuery();

  useEffect(() => {
    const { isSuccess, isError, error, data } = githubRedirectURLResult;

    if (isSuccess) {
      console.log(data);
      window.location.replace(data.data.redirectURL);
    }

    if (isError) {
      toastError("", error);
    }
  }, [githubRedirectURLResult]);

  const handleclick = () => {
    toastSuccess("Please Wait. Redirecting to Github...");
    githubRedirectURL();
  };

  return (
    <IconButton onClick={handleclick} size="large">
      <GithubIcon fontSize="256px" />
    </IconButton>
  );
};

export default GithubRedirect;
