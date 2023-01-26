import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getContactDetails,
  setContactDetails,
} from "../../../../feature/resumeSlice";
import { useLazyGetContactInfoQuery } from "../../../../service/resume.service";
import { toastError } from "../../../../utils/toastMessage";
import { Box, Typography } from "@mui/material";
import {
  Email,
  GitHub,
  LinkedIn,
  LocationOn,
  Phone,
} from "@mui/icons-material";

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

  return (
    <Box sx={{ marginBottom: "1rem", display: "flex", alignItems: "center" }}>
      <LocationOn sx={{ fontSize: "20px" }} />
      &nbsp;
      <Typography component="span" variant="body1">
        Location
      </Typography>
      &nbsp;&nbsp;
      <Phone sx={{ fontSize: "20px" }} />
      &nbsp;
      <Typography component="span" variant="body1">
        Phone
      </Typography>
      &nbsp;&nbsp;
      <Email sx={{ fontSize: "20px" }} />
      &nbsp;
      <Typography component="span" variant="body1">
        Email
      </Typography>
      &nbsp;&nbsp;
      <LinkedIn sx={{ fontSize: "20px" }} />
      &nbsp;
      <Typography component="span" variant="body1">
        Linkedin
      </Typography>
      &nbsp;&nbsp;
      <GitHub sx={{ fontSize: "20px" }} />
      &nbsp;
      <Typography component="span" variant="body1">
        github
      </Typography>
      &nbsp;&nbsp;
    </Box>
  );
};

export default ContactDetails;
