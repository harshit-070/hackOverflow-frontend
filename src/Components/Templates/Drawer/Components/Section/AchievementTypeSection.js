import { LoadingButton } from "@mui/lab";
import { Stack, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getCustomizedSectionDetails } from "../../../../../feature/resumeSlice";
import { useUpdateCustomizedSectionsMutation } from "../../../../../service/resume.service";
import { toastSuccess } from "../../../../../utils/toastMessage";

const AchievementsTypeSection = ({ _id }) => {
  const section = useSelector((state) =>
    getCustomizedSectionDetails(state, _id)
  );

  const [description, setdescription] = useState(" ");
  const [loading, setLoading] = useState(false);
  const { resume_id } = useParams();

  const [updateCustomizedSection, updateCustmoizedSectionResult] =
    useUpdateCustomizedSectionsMutation();

  useEffect(() => {
    if (section) {
      console.log(section);
      setdescription(section.data[0]?.description || " ");
    }
  }, [section]);
  useEffect(() => {
    const { isError, isSuccess, error, isLoading } =
      updateCustmoizedSectionResult;
    setLoading(isLoading);

    if (isSuccess) {
      toastSuccess("Resume Updated");
    }

    if (isError) {
      toast("", error);
    }
  }, [updateCustmoizedSectionResult]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateCustomizedSection({
      resume_id,
      _id,
      data: [{ description }],
    });
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

export default AchievementsTypeSection;
