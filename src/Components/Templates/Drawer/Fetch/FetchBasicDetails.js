import React, { useEffect } from "react";
import { useLazyGetBasicDetailsQuery } from "../../../../service/resume.service";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toastError } from "../../../../utils/toastMessage";
import { setBasicDetails } from "../../../../feature/resumeSlice";
const FetchBasicDetails = () => {
  const [getBasicDetailsInfo, getBasicDetailssInfoResult] =
    useLazyGetBasicDetailsQuery();

  const { resume_id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!resume_id) {
      toastError("Invalid Resume Id");
      return navigate("/");
    }
    getBasicDetailsInfo(resume_id);
  }, [getBasicDetailsInfo, navigate, resume_id]);

  useEffect(() => {
    const { isLoading, isError, isSuccess, error, data } =
      getBasicDetailssInfoResult;

    if (isSuccess) {
      dispatch(setBasicDetails(data.data));
    }

    if (isError) {
      toastError("", error);
      return navigate("/");
    }
  }, [dispatch, getBasicDetailssInfoResult, navigate]);
  return <></>;
};

export default FetchBasicDetails;
