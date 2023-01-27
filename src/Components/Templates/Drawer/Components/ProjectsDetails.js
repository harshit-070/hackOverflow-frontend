import {
  Box,
  Stack,
  styled,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUpdateProjectsInfoMutation } from "../../../../service/resume.service";
import { useSelector } from "react-redux";
import { toastError, toastSuccess } from "../../../../utils/toastMessage";
import { LoadingButton } from "@mui/lab";
import { Delete, Edit } from "@mui/icons-material";
import { getProjectsDetails } from "../../../../feature/resumeSlice";
import { MonthPicker, YearPicker } from "./InputField";

const StyledButton = styled(Button)`
  text-transform: none;
`;
const Projects = () => {
  const [id, setId] = useState(" ");
  const [title, settitle] = useState(" ");
  const [role, setRole] = useState(" ");
  const [company, setcompany] = useState(" ");
  const [location, setlocation] = useState(" ");
  const [description, setdescription] = useState(" ");
  const [startMonth, setStartMonth] = useState("January");
  const [startYear, setStartYear] = useState(1973);
  const [endMonth, setEndMonth] = useState("January");
  const [endYear, setEndYear] = useState(1973);
  const [loading, setLoading] = useState(false);
  const [addProject, setAddProject] = useState(false);

  const [projects, setExperiences] = useState([]);
  const projectDetails = useSelector((state) => getProjectsDetails(state));
  const { resume_id } = useParams();

  const [updateProjectInfo, updateProjectResult] =
    useUpdateProjectsInfoMutation();

  const initData = () => {
    setId(" ");
    settitle(" ");
    setRole(" ");
    setcompany(" ");
    setlocation(" ");
    setStartMonth("January");
    setEndMonth("January");
    setStartYear(1973);
    setEndYear(1973);
    setdescription(" ");
  };

  useEffect(() => {
    const { isLoading, isSuccess, isError, error } = updateProjectResult;
    setLoading(isLoading);
    if (isSuccess) {
      setAddProject(false);
      toastSuccess("Resume Updated");
    }

    if (isError) {
      toastError("", error);
    }
  }, [updateProjectResult]);

  useEffect(() => {
    if (projectDetails) {
      setExperiences(projectDetails || []);
    }
  }, [projectDetails]);

  const handleUpdateResume = (e) => {
    e.preventDefault();
    const data = projects.filter((Experience) => Experience._id !== id);

    const dataToBePushed = {
      title,
      role,
      company,
      location,
      description,
      start_year: parseInt(startYear),
      end_year: parseInt(endYear),
      start_month: startMonth,
      end_month: endMonth,
    };

    if (id !== " ") {
      dataToBePushed._id = id;
    }

    data.push(dataToBePushed);

    updateProjectInfo({ resume_id, projects: [...data] });
  };

  const handleAddProject = () => {
    initData();
    setAddProject(true);
  };

  const handleEditProject = (_id) => {
    const data = projects.filter((project) => project._id === _id);
    setAddProject(true);
    setId(_id);
    settitle(data[0].title);
    setRole(data[0].role);
    setcompany(data[0].company);
    setlocation(data[0].location);
    setStartMonth(data[0].start_month);
    setEndMonth(data[0].end_month);
    setStartYear(data[0].start_year);
    setEndYear(data[0].end_year);
    setdescription(data[0].description);
  };

  const handleDeleteProject = (_id) => {
    const data = projects.filter((project) => project._id !== _id);
    updateProjectInfo({ resume_id, projects: [...data] });
  };

  return (
    <>
      <Stack direction="column" spacing={2}>
        {addProject ? (
          <form onSubmit={handleUpdateResume}>
            <Stack direction="column" spacing={2}>
              <TextField
                size="small"
                variant="standard"
                label="Project Title"
                value={title}
                onChange={(e) => settitle(e.target.value)}
                required
              />
              <TextField
                size="small"
                variant="standard"
                label="Project Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              />
              <TextField
                variant="standard"
                label="Company/Institute Name"
                value={company}
                onChange={(e) => setcompany(e.target.value)}
                required
              />
              <TextField
                variant="standard"
                label="Location"
                value={location}
                onChange={(e) => setlocation(e.target.value)}
                required
              />
              <MonthPicker
                value={startMonth}
                setValue={setStartMonth}
                label={"Start Month"}
              />
              <YearPicker
                value={startYear}
                setValue={setStartYear}
                label="Start Year"
              />
              <MonthPicker
                value={endMonth}
                setValue={setEndMonth}
                label={"End Month"}
              />
              <YearPicker
                value={endYear}
                setValue={setEndYear}
                label="End Year"
              />
              <TextField
                variant="standard"
                multiline
                label="Description"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
                required
              />
              <LoadingButton loading={loading} type="submit">
                Update
              </LoadingButton>
            </Stack>
          </form>
        ) : (
          <></>
        )}
        <StyledButton onClick={handleAddProject}>
          + Add new Project
        </StyledButton>
        {projects.map((project) => {
          return (
            <Box
              style={{
                boxShadow: "0 2px 5px 0 grey",
                padding: "5px",
                borderRadius: "10px",
                display: `${project._id === id ? "none" : "block"}`,
              }}
              key={project.title}
            >
              <Typography variant="body1" fontWeight={600} component="span">
                {project.company}
              </Typography>
              <LoadingButton
                onClick={() => handleEditProject(project._id)}
                style={{
                  fontSize: "20px",
                  color: "skyblue",
                  marginLeft: "auto",
                  float: "right",
                }}
              >
                <Edit />
              </LoadingButton>
              <LoadingButton
                loading={loading}
                onClick={() => handleDeleteProject(project._id)}
                style={{ fontSize: "20px", color: "grey", float: "right" }}
              >
                <Delete />
              </LoadingButton>
              &nbsp; &nbsp;
              {/* <Typography
                variant="subtitle1"
                color="grey"
                style={{ fontSize: "12px" }}
              >
                {experience.percentage}
              </Typography> */}
            </Box>
          );
        })}
      </Stack>
    </>
  );
};

export default Projects;
