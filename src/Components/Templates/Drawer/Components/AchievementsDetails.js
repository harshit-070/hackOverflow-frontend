import { LoadingButton } from "@mui/lab";
import { Stack, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getAchievementDetails } from "../../../../feature/resumeSlice";
import { useUpdateAchievementsInfoMutation } from "../../../../service/resume.service";
import { toastSuccess } from "../../../../utils/toastMessage";

const Achievements = () => {
  const [description, setdescription] = useState("");
  const [loading, setLoading] = useState(false);
  const { resume_id } = useParams();

  const achievementsDetails = useSelector((state) =>
    getAchievementDetails(state)
  );

  const [updateAchievementInfo, updateAchievementResult] =
    useUpdateAchievementsInfoMutation();

  useEffect(() => {
    if (achievementsDetails) {
      setdescription(achievementsDetails);
    }
  }, [achievementsDetails]);
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
          Update
        </LoadingButton>
      </Stack>
    </form>
  );
};

export default Achievements;
