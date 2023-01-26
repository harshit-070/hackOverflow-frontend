import { LoadingButton } from "@mui/lab";
import { Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPersonalDetails } from "../../feature/resumeSlice";
import { useUpdatePersonalInfoMutation } from "../../service/resume.service";
import { toastError, toastSuccess } from "../../utils/toastMessage";

const Info = () => {
  const [name, setName] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [loading, setLoading] = useState(false);

  const { resume_id } = useParams();

  const [updatePersonalInfo, updatePersonalInfoResult] =
    useUpdatePersonalInfoMutation();

  const personalDetails = useSelector((state) => getPersonalDetails(state));
  console.log(personalDetails);
  useEffect(() => {
    setName(personalDetails?.name || "");
    setAboutMe(personalDetails.summary || "");
  }, [personalDetails]);

  useEffect(() => {
    const { isLoading, isSuccess, isError, error } = updatePersonalInfoResult;
    setLoading(isLoading);
    if (isSuccess) {
      toastSuccess("Resume Updated");
    }

    if (isError) {
      toastError("", error);
    }
  }, [updatePersonalInfoResult]);

  const handleUpdateResume = () => {
    updatePersonalInfo({ resume_id, name, summary: aboutMe });
  };

  return (
    <Stack direction="column" spacing={2}>
      <TextField
        variant="standard"
        placeholder="Enter Name"
        label="Name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        variant="standard"
        label="About Me"
        multiline
        required
        value={aboutMe}
        onChange={(e) => setAboutMe(e.target.value)}
      />
      <LoadingButton onClick={handleUpdateResume} loading={loading}>
        Update
      </LoadingButton>
    </Stack>
  );
};

export default Info;
