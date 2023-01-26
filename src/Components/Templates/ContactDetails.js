import { LoadingButton } from "@mui/lab";
import { Box, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setContactInfo } from "../../feature/resumeSlice";
import {
  useLazyGetContactInfoQuery,
  useUpdateContactInfoMutation,
} from "../../service/resume.service";
import { toastError, toastSuccess } from "../../utils/toastMessage";

const ContactDetails = () => {
  const [mobile, setmobile] = useState("");
  const [email, setemail] = useState("");
  const [city, setcity] = useState("");
  const [country, setcountry] = useState("");
  const [linkedin, setlinkedin] = useState("");
  const [github, setgithub] = useState("");
  const [facebook, setfacebook] = useState("");
  const [instagram, setinstagram] = useState("");
  const [loading, setLoading] = useState(false);

  const { resume_id } = useParams();

  const [getContactInfo, getContactInfoResult] = useLazyGetContactInfoQuery();
  const [updateContactInfo, updateContactResult] =
    useUpdateContactInfoMutation();

  const dispatch = useDispatch();

  useEffect(() => {
    getContactInfo(resume_id);
  }, [getContactInfo, resume_id]);

  useEffect(() => {
    const { isLoading, isSuccess, isError, error } = updateContactResult;
    setLoading(isLoading);
    if (isSuccess) {
      toastSuccess("Resume Updated");
    }

    if (isError) {
      toastError("", error);
    }
  }, [updateContactResult]);

  useEffect(() => {
    const { isError, error, isSuccess, data } = getContactInfoResult;

    if (isSuccess) {
      setmobile(data.data.contact?.number);
      setemail(data.data.contact?.email);
      setcity(data.data.address?.city);
      setcountry(data.data.address?.country);
      setlinkedin(data.data.socialMedia?.linkedin);
      setgithub(data.data.socialMedia?.github);
      dispatch(setContactInfo(data.data));
    }

    if (isError) {
      toastError("", error);
    }
  }, [dispatch, getContactInfoResult]);

  const handleUpdateResume = () => {
    updateContactInfo({
      resume_id,
      contact: {
        number: mobile,
        email,
      },
      address: {
        city,
        country,
      },
      socialMedia: {
        linkedin,
        github,
      },
    });
  };

  return (
    <>
      <Stack direction="column" spacing={2}>
        <TextField
          size="small"
          variant="standard"
          label="Mobile Number"
          required
          value={mobile}
          onChange={(e) => setmobile(e.target.value)}
        />
        <Box style={{ display: "flex", gap: "10px" }}>
          <Box>
            <TextField
              variant="standard"
              label="City"
              required
              value={city}
              onChange={(e) => setcity(e.target.value)}
              style={{ marginBottom: "15px" }}
            />
          </Box>
          <Box>
            <TextField
              variant="standard"
              label="Country"
              required
              value={country}
              onChange={(e) => setcountry(e.target.value)}
            />
          </Box>
        </Box>
        <TextField
          variant="standard"
          label="Email Id"
          required
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <TextField
          variant="standard"
          label="LinkedIn URL"
          multiline
          value={linkedin}
          onChange={(e) => setlinkedin(e.target.value)}
        />
        <TextField
          variant="standard"
          label="Github URL"
          multiline
          value={github}
          onChange={(e) => setgithub(e.target.value)}
        />
        <TextField
          variant="standard"
          label="facebook URL"
          multiline
          value={facebook}
          onChange={(e) => setfacebook(e.target.value)}
        />
        <TextField
          variant="standard"
          label="instagram URL"
          multiline
          value={instagram}
          onChange={(e) => setinstagram(e.target.value)}
        />
        <LoadingButton onClick={handleUpdateResume} loading={loading}>
          Update
        </LoadingButton>
      </Stack>
    </>
  );
};

export default ContactDetails;
