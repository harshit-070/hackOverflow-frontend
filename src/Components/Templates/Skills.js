import { LoadingButton } from "@mui/lab";
import { Chip, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  useLazyGetSkillsInfoQuery,
  useUpdateSkillsInfoMutation,
} from "../../service/resume.service";
import { toastError, toastSuccess } from "../../utils/toastMessage";

const Skills = () => {
  const [skill, setskill] = useState("");
  const [loading, setLoading] = useState(false);
  const [skills, setSkills] = useState([]);
  const { resume_id } = useParams();

  const [getSkillsInfo, getSkillsInfoResult] = useLazyGetSkillsInfoQuery();
  const [updateSkillsInfo, updateSkillsResult] = useUpdateSkillsInfoMutation();

  const dispatch = useDispatch();

  useEffect(() => {
    getSkillsInfo(resume_id);
  }, [getSkillsInfo, resume_id]);

  useEffect(() => {
    const { isLoading, isSuccess, isError, error } = updateSkillsResult;
    setLoading(isLoading);
    if (isSuccess) {
      toastSuccess("Resume Updated");
    }

    if (isError) {
      toastError("", error);
    }
  }, [updateSkillsResult]);

  useEffect(() => {
    const { isError, error, isSuccess, data } = getSkillsInfoResult;

    if (isSuccess) {
      setskill(" ");
      setSkills(data.data.skills || []);
    }

    if (isError) {
      toastError("", error);
    }
  }, [dispatch, getSkillsInfoResult]);

  const handleUpdateResume = (e) => {
    e.preventDefault();

    updateSkillsInfo({ resume_id, skills: [...skills, skill] });
  };

  const handleDeleteSkills = (skill) => {
    const data = skills.filter((e) => e !== skill);
    updateSkillsInfo({ resume_id, skills: [...data] });
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

export default Skills;
