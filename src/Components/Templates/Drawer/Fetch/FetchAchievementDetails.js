import React, { useEffect } from "react";
import { useLazyGetAchievementsInfoQuery } from "../../../../service/resume.service";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toastError } from "../../../../utils/toastMessage";
import { setAchievementsDetails } from "../../../../feature/resumeSlice";
const FetchAchievementsDetails = () => {
  const [getAchievementsInfo, getAchievementsInfoResult] =
    useLazyGetAchievementsInfoQuery();

  const { resume_id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!resume_id) {
      toastError("Invalid Resume Id");
      return navigate("/");
    }
    getAchievementsInfo(resume_id);
  }, [getAchievementsInfo, navigate, resume_id]);

  useEffect(() => {
    const { isLoading, isError, isSuccess, error, data } =
      getAchievementsInfoResult;

    if (isSuccess) {
      dispatch(setAchievementsDetails(data.data.achievements));
    }

    if (isError) {
      toastError("", error);
      return navigate("/");
    }
  }, [dispatch, getAchievementsInfoResult, navigate]);
  return <></>;
};

export default FetchAchievementsDetails;
