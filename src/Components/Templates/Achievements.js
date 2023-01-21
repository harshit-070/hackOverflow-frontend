import { LoadingButton } from "@mui/lab";
import { Stack, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useLazyGetAchievementInfoQuery,
  useUpdateAchievementInfoMutation,
} from "../../service/resume.service";
import { toastSuccess } from "../../utils/toastMessage";

const Achievements = () => {
  const [description, setdescription] = useState("");
  const [loading, setLoading] = useState(false);
  const { resume_id } = useParams();

  const [getAchievementInfo, getAchievementInfoResult] =
    useLazyGetAchievementInfoQuery();
  const [updateAchievementInfo, updateAchievementResult] =
    useUpdateAchievementInfoMutation();

  useEffect(() => {
    getAchievementInfo(resume_id);
  }, [getAchievementInfo, resume_id]);

  useEffect(() => {
    const { isError, isLoading, isSuccess, data, error } =
      getAchievementInfoResult;
    setLoading(isLoading);
    if (isSuccess) {
      setdescription(data.data.achievements);
    }

    if (isError) {
      toast("", error);
    }
  }, [getAchievementInfoResult]);
  useEffect(() => {
    const { isError, isSuccess, error, isLoading } = updateAchievementResult;
    setLoading(isLoading);

    if (isSuccess) {
      toastSuccess("Resume Updated");
    }

    if (isError) {
      toast("", error);
    }
  }, [updateAchievementResult]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateAchievementInfo({ resume_id, achievements: description });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column">
        <TextField
          size="small"
          variant="standard"
          required
          multiline
          label="Description"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          sx={{ marginBottom: "15px", overflowX: "hidden" }}
        />
        <LoadingButton type="submit" loading={loading}>
          Update{" "}
        </LoadingButton>
      </Stack>
    </form>
  );
};

export default Achievements;
