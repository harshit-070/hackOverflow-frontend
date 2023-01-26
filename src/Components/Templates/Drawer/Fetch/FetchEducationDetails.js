import React, { useEffect } from "react";
import { useLazyGetEducationInfoQuery } from "../../../../service/resume.service";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toastError } from "../../../../utils/toastMessage";
import { setEducationDetails } from "../../../../feature/resumeSlice";
const FetchEducationDetails = () => {
  const [getEducationInfo, getEducationInfoResult] =
    useLazyGetEducationInfoQuery();

  const { resume_id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!resume_id) {
      toastError("Invalid Resume Id");
      return navigate("/");
    }
    getEducationInfo(resume_id);
  }, [getEducationInfo, navigate, resume_id]);

  useEffect(() => {
    const { isLoading, isError, isSuccess, error, data } =
      getEducationInfoResult;

    if (isSuccess) {
      dispatch(setEducationDetails(data.data.education));
    }

    if (isError) {
      toastError("", error);
      return navigate("/");
    }
  }, [dispatch, getEducationInfoResult, navigate]);
  return <></>;
};

export default FetchEducationDetails;
