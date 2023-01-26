import React, { useEffect } from "react";
import { useLazyGetPersonalInfoQuery } from "../../../../service/resume.service";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toastError } from "../../../../utils/toastMessage";
import { setPersonalDetails } from "../../../../feature/resumeSlice";

const FetchPersonalDetails = () => {
  const [getPersonalInfo, getPersonalInfoResult] =
    useLazyGetPersonalInfoQuery();

  const { resume_id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!resume_id) {
      toastError("Invalid Resume Id");
      return navigate("/");
    }
    getPersonalInfo(resume_id);
  }, [getPersonalInfo, navigate, resume_id]);

  useEffect(() => {
    const { isLoading, isError, isSuccess, error, data } =
      getPersonalInfoResult;

    if (isSuccess) {
      console.log(data.data.personalDetails);
      dispatch(setPersonalDetails(data.data.personalDetails));
    }

    if (isError) {
      toastError("", error);
      return navigate("/");
    }
  }, [dispatch, getPersonalInfoResult, navigate]);
  return <></>;
};

export default FetchPersonalDetails;
