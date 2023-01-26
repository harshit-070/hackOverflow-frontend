import React, { useEffect } from "react";
import {
  useLazyGetContactInfoQuery,
  useLazyGetPersonalInfoQuery,
} from "../../../../service/resume.service";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toastError } from "../../../../utils/toastMessage";
import {
  setLoading,
  setPersonalDetails,
} from "../../../../feature/resumeSlice";

const FetchContactDetails = () => {
  const [getContactInfo, getContactInfoResult] = useLazyGetContactInfoQuery();

  const { resume_id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!resume_id) {
      toastError("Invalid Resume Id");
      return navigate("/");
    }
    getContactInfo(resume_id);
  }, [getContactInfo, navigate, resume_id]);

  useEffect(() => {
    const { isLoading, isError, isSuccess, error, data } = getContactInfoResult;

    if (isSuccess) {
      dispatch(setPersonalDetails(data.data.personalDetails));
    }

    if (isError) {
      toastError("", error);
      return navigate("/");
    }
  }, [dispatch, getContactInfoResult, navigate]);
  return <></>;
};

export default FetchContactDetails;
