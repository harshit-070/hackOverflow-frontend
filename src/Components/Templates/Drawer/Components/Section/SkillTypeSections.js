import { LoadingButton } from "@mui/lab";
import { Chip, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCustomizedSectionDetails } from "../../../../../feature/resumeSlice";
import { useUpdateCustomizedSectionsMutation } from "../../../../../service/resume.service";
import { toastError, toastSuccess } from "../../../../../utils/toastMessage";

const SkillTypeSection = ({ _id }) => {
  const section = useSelector((state) =>
    getCustomizedSectionDetails(state, _id)
  );
  const [skill, setskill] = useState("");
  const [loading, setLoading] = useState(false);
  const [skills, setSkills] = useState([]);
  const { resume_id } = useParams();

  const [updateCustomizedSection, updateCustmoizedSectionResult] =
    useUpdateCustomizedSectionsMutation();

  useEffect(() => {
    const { isLoading, isSuccess, isError, error } =
      updateCustmoizedSectionResult;
    setLoading(isLoading);
    if (isSuccess) {
      toastSuccess("Resume Updated");
    }

    if (isError) {
      toastError("", error);
    }
  }, [updateCustmoizedSectionResult]);

  useEffect(() => {
    console.log(section.data);
    if (section && section.data) {
      setskill(" ");
      setSkills(section.data[0]?.skills || []);
    }
  }, [section]);

  const handleUpdateResume = (e) => {
    e.preventDefault();

    updateCustomizedSection({
      resume_id,
      _id,
      data: { skills: [...skills, skill] },
    });
  };

  const handleDeleteSkills = (skill) => {
    const data = skills.filter((e) => e !== skill);
    updateCustomizedSection({ resume_id, _id, data: { skills: [...data] } });
  };

  return (
    <Stack direction="column">
      <form onSubmit={handleUpdateResume}>
        <Stack direction="column">
          <TextField
            size="small"
            variant="standard"
            required
            autoFocus
            label="Skill Name"
            value={skill}
            onChange={(e) => setskill(e.target.value)}
            style={{ marginBottom: "15px" }}
          />
          <LoadingButton type="submit" loading={loading}>
            Add
          </LoadingButton>
        </Stack>
      </form>

      <Stack direction="column" gap="5px">
        {skills.map((skill, index) => (
          <Chip
            label={skill}
            variant="outlined"
            key={index}
            onDelete={() => handleDeleteSkills(skill)}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default SkillTypeSection;
