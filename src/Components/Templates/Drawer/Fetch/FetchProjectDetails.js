import React, { useEffect } from "react";
import { useLazyGetProjectsInfoQuery } from "../../../../service/resume.service";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toastError } from "../../../../utils/toastMessage";
import { setProjectsDetails } from "../../../../feature/resumeSlice";
const FetchProjectsDetails = () => {
  const [getProjectsInfo, getProjectsInfoResult] =
    useLazyGetProjectsInfoQuery();

  const { resume_id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!resume_id) {
      toastError("Invalid Resume Id");
      return navigate("/");
    }
    getProjectsInfo(resume_id);
  }, [getProjectsInfo, navigate, resume_id]);

  useEffect(() => {
    const { isLoading, isError, isSuccess, error, data } =
      getProjectsInfoResult;

    if (isSuccess) {
      dispatch(setProjectsDetails(data.data.projects));
    }

    if (isError) {
      toastError("", error);
      return navigate("/");
    }
  }, [dispatch, getProjectsInfoResult, navigate]);
  return <></>;
};

export default FetchProjectsDetails;
