import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getContactDetails,
  setContactDetails,
} from "../../../../feature/resumeSlice";
import { useLazyGetContactInfoQuery } from "../../../../service/resume.service";
import { toastError } from "../../../../utils/toastMessage";

const ContactDetails = () => {
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
      dispatch(setContactDetails(data.data.ContactDetails));
    }

    if (isError) {
      toastError("", error);
      return navigate("/");
    }
  }, [dispatch, getContactInfoResult, navigate]);

  const contactDetails = useSelector((state) => getContactDetails(state));

  return <div>ContactDetails</div>;
};

export default ContactDetails;
