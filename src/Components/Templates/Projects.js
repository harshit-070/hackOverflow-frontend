import {
  Box,
  Stack,
  styled,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useParams } from "react-router-dom";
import {
  useLazyGetProjectInfoQuery,
  useUpdateProjectInfoMutation,
} from "../../service/resume.service";
import { useDispatch } from "react-redux";
import { toastError, toastSuccess } from "../../utils/toastMessage";
import { LoadingButton } from "@mui/lab";
import { Delete, Edit } from "@mui/icons-material";

const StyledButton = styled(Button)`
  text-transform: none;
`;
const Projects = () => {
  const [id, setId] = useState("");
  const [title, settitle] = useState("");
  const [role, setrole] = useState("");
  const [company, setcompany] = useState("");
  const [location, setlocation] = useState("");
  const [description, setdescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [addProject, setProject] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [projects, setExperiences] = useState([]);

  const { resume_id } = useParams();

  const [getProjectInfo, getProjectInfoResult] = useLazyGetProjectInfoQuery();
  const [updateProjectInfo, updateProjectResult] =
    useUpdateProjectInfoMutation();

  const dispatch = useDispatch();

  useEffect(() => {
    getProjectInfo(resume_id);
  }, [getProjectInfo, resume_id]);

  useEffect(() => {
    const { isLoading, isSuccess, isError, error } = updateProjectResult;
    setLoading(isLoading);
    if (isSuccess) {
      toastSuccess("Resume Updated");
    }

    if (isError) {
      toastError("", error);
    }
  }, [updateProjectResult]);

  useEffect(() => {
    const { isError, error, isSuccess, data } = getProjectInfoResult;

    if (isSuccess) {
      setId("");
      settitle("");
      setcompany("");
      setlocation("");
      setStartDate("");
      setEndDate("");
      setdescription("");
      setProject(false);
      setExperiences(data.data.projects || []);
    }

    if (isError) {
      toastError("", error);
    }
  }, [dispatch, getProjectInfoResult]);

  const handleUpdateResume = (e) => {
    e.preventDefault();
    const data = projects.filter((Experience) => Experience._id !== id);

    const dataToBePushed = {
      title,
      company,
      location,
      description,
      startDate,
      endDate,
      // start
    };

    if (id) {
      dataToBePushed._id = id;
    }

    data.push(dataToBePushed);

    updateProjectInfo({ resume_id, projects: [...data] });
  };

  const handleAddProject = () => {
    setId("");
    settitle("");
    setcompany("");
    setlocation("");
    setStartDate("");
    setEndDate("");
    setdescription("");
    setProject(true);
  };

  const handleEditProject = (_id) => {
    const data = projects.filter((project) => project._id === _id);
    setProject(true);
    setId(_id);
    settitle(data[0].title);
    setcompany(data[0].name);
    setlocation(data[0].location);
    setStartDate(data[0].startDate);
    setEndDate(data[0].endDate);
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
                onChange={(e) => setrole(e.target.value)}
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
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Start Date"
                  variant="standard"
                  value={startDate}
                  onChange={(newValue) => {
                    setStartDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="End Date"
                  variant=""
                  value={endDate}
                  onChange={(newValue) => {
                    setEndDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
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
