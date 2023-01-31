import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setResume } from "../../feature/resumeSlice";
import { useLazyGetUserResumeQuery } from "../../service/resume.service";
import LoadingScreen from "../LoadingPage";
import Tempate4 from "./Template/4";
import Tempate5 from "./Template/5";

const FetchUserResume = () => {
  const { username, resume_name } = useParams();
  const [fetchUserResume, fetchUserResumeResult] = useLazyGetUserResumeQuery();
  const [template, setTemplate] = useState();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchUserResume({ username, resume_name });
  }, [fetchUserResume, resume_name, username]);

  useEffect(() => {
    const { isLoading, isError, isSuccess, data } = fetchUserResumeResult;
    setLoading(isLoading);
    if (isSuccess) {
      console.log(data.data);
      setTemplate(data.data.template_number);
      dispatch(setResume(data.data));
    }

    if (isError) {
      return navigate("/404");
    }
  }, [dispatch, fetchUserResumeResult, loading, navigate]);

  if (loading) {
    return <LoadingScreen />;
  }
  if (template === 1) {
    return <Tempate4 />;
  }

  if (template === 2) {
    return <Tempate5 />;
  }

  return <div></div>;
};

export default FetchUserResume;
