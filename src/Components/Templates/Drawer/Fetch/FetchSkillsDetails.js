import React, { useEffect } from "react";
import { useLazyGetSkillsInfoQuery } from "../../../../service/resume.service";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toastError } from "../../../../utils/toastMessage";
import { setSkillsDetails } from "../../../../feature/resumeSlice";
const FetchSkillsDetails = () => {
  const [getSkillsInfo, getSkillsInfoResult] = useLazyGetSkillsInfoQuery();

  const { resume_id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!resume_id) {
      toastError("Invalid Resume Id");
      return navigate("/");
    }
    getSkillsInfo(resume_id);
  }, [getSkillsInfo, navigate, resume_id]);

  useEffect(() => {
    const { isLoading, isError, isSuccess, error, data } = getSkillsInfoResult;

    if (isSuccess) {
      dispatch(setSkillsDetails(data.data.skills));
    }

    if (isError) {
      toastError("", error);
      return navigate("/");
    }
  }, [dispatch, getSkillsInfoResult, navigate]);
  return <></>;
};

export default FetchSkillsDetails;
