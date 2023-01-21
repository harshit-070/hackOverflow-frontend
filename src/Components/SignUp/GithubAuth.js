import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setUser } from "../../feature/userSlice";
import { useGithubAuthMutation } from "../../service/user.service";
import { toastError } from "../../utils/toastMessage";

const GithubAuth = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const navigate = useNavigate();
  const [githubAuth, githubAuthResult] = useGithubAuthMutation();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(code);
    if (!code) {
      toastError("Invalid Code");
      return navigate("/");
    } else {
      githubAuth(code);
    }
  }, [code, githubAuth]);

  useEffect(() => {
    const { isError, error, data, isSuccess } = githubAuthResult;

    if (isSuccess) {
      dispatch(setUser(data.data.user));
      return navigate("/templates");
    }

    if (isError) {
      toastError("", error);
      return navigate("/");
    }
  }, [githubAuthResult, dispatch, navigate]);
  return <div>Please</div>;
};

export default GithubAuth;
