import { LoadingButton } from "@mui/lab";
import { Box, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getContactDetails } from "../../../../feature/resumeSlice";
import { useUpdateContactInfoMutation } from "../../../../service/resume.service";
import { toastError, toastSuccess } from "../../../../utils/toastMessage";

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

  const contactDetails = useSelector((state) => getContactDetails(state));

  const { resume_id } = useParams();

  const [updateContactInfo, updateContactResult] =
    useUpdateContactInfoMutation();

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
    setmobile(contactDetails?.number || "");
    setemail(contactDetails?.email || "");
    setcity(contactDetails?.city || "");
    setcountry(contactDetails?.country || "");
    setlinkedin(contactDetails?.linkedin);
    setgithub(contactDetails?.github);
    setfacebook(contactDetails?.facebook);
    setinstagram(contactDetails?.instagram);
  }, [contactDetails]);

  const handleUpdateResume = (e) => {
    e.preventDefault();
    try {
      const number = parseInt(mobile);
      console.log(number);
      updateContactInfo({
        resume_id,
        number,
        email,
        city,
        country,
        linkedin,
        github,
        facebook,
        instagram,
        otherSocialMedia: [],
      });
    } catch (error) {
      toastError(error);
    }
  };

  return (
    <form onSubmit={handleUpdateResume}>
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
          value={linkedin}
          onChange={(e) => setlinkedin(e.target.value)}
        />
        <TextField
          variant="standard"
          label="Github URL"
          value={github}
          onChange={(e) => setgithub(e.target.value)}
        />
        <TextField
          variant="standard"
          label="Facebook URL"
          value={facebook}
          onChange={(e) => setfacebook(e.target.value)}
        />
        <TextField
          variant="standard"
          label="Instagram URL"
          value={instagram}
          onChange={(e) => setinstagram(e.target.value)}
        />
        <LoadingButton type="submit" loading={loading}>
          Update
        </LoadingButton>
      </Stack>
    </form>
  );
};

export default ContactDetails;
