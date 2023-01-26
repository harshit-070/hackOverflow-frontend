import React, { useEffect } from "react";
import { useLazyGetExperienceInfoQuery } from "../../../../service/resume.service";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toastError } from "../../../../utils/toastMessage";
import { setExperienceDetails } from "../../../../feature/resumeSlice";
const FetchExperienceDetails = () => {
  const [getExperienceInfo, getExperienceInfoResult] =
    useLazyGetExperienceInfoQuery();

  const { resume_id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!resume_id) {
      toastError("Invalid Resume Id");
      return navigate("/");
    }
    getExperienceInfo(resume_id);
  }, [getExperienceInfo, navigate, resume_id]);

  useEffect(() => {
    const { isLoading, isError, isSuccess, error, data } =
      getExperienceInfoResult;

    if (isSuccess) {
      dispatch(setExperienceDetails(data.data.experience));
    }

    if (isError) {
      toastError("", error);
      return navigate("/");
    }
  }, [dispatch, getExperienceInfoResult, navigate]);
  return <></>;
};

export default FetchExperienceDetails;
