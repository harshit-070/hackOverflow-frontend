import { LoadingButton } from "@mui/lab";
import { Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setPersonalInfo } from "../../feature/resumeSlice";
import {
  useLazyGetPersonalInfoQuery,
  useUpdatePersonalInfoMutation,
} from "../../service/resume.service";
import { toastError, toastSuccess } from "../../utils/toastMessage";

const Info = () => {
  const [name, setName] = useState("");
  const [headline, setHeadline] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [loading, setLoading] = useState(false);
  const { resume_id } = useParams();

  const [getPersonalInfo, getPersonalInfoResult] =
    useLazyGetPersonalInfoQuery();
  const [updatePersonalInfo, updatePersonalInfoResult] =
    useUpdatePersonalInfoMutation();

  const dispatch = useDispatch();

  useEffect(() => {
    getPersonalInfo(resume_id);
  }, [getPersonalInfo, resume_id]);

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

  useEffect(() => {
    const { isError, error, isSuccess, data } = getPersonalInfoResult;

    if (isSuccess) {
      setName(data.data.name);
      setHeadline(data.data.headline);
      setAboutMe(data.data.summary);
      dispatch(setPersonalInfo(data.data));
    }

    if (isError) {
      toastError("", error);
    }
  }, [dispatch, getPersonalInfoResult]);

  const handleUpdateResume = () => {
    updatePersonalInfo({ resume_id, name, summary: aboutMe, headline });
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
        placeholder="Enter Name"
        label="Headline"
        required
        value={headline}
        onChange={(e) => setHeadline(e.target.value)}
      />
      <TextField
        variant="standard"
        label="About Me"
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
