import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
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
import { toastError, toastSuccess } from "../../utils/toastMessage";
import { useParams } from "react-router-dom";
import {
  useLazyGetExperienceInfoQuery,
  useUpdateExperienceInfoMutation,
} from "../../service/resume.service";
import { useDispatch } from "react-redux";
import { LoadingButton } from "@mui/lab";
import { Delete, Edit } from "@mui/icons-material";

const StyledButton = styled(Button)`
  text-transform: none;
`;
const Experience = () => {
  const [id, setId] = useState("");
  const [title, settitle] = useState("");
  const [category, setcategory] = useState("");
  const [company, setcompany] = useState("");
  const [location, setlocation] = useState("");
  const [description, setdescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [addExperience, setAddExperience] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [experiences, setExperiences] = useState([]);

  const { resume_id } = useParams();

  const [getExperienceInfo, getExperienceInfoResult] =
    useLazyGetExperienceInfoQuery();
  const [updateExperienceInfo, updateExperienceResult] =
    useUpdateExperienceInfoMutation();

  const dispatch = useDispatch();

  useEffect(() => {
    getExperienceInfo(resume_id);
  }, [getExperienceInfo, resume_id]);

  useEffect(() => {
    const { isLoading, isSuccess, isError, error } = updateExperienceResult;
    setLoading(isLoading);
    if (isSuccess) {
      toastSuccess("Resume Updated");
    }

    if (isError) {
      toastError("", error);
    }
  }, [updateExperienceResult]);

  useEffect(() => {
    const { isError, error, isSuccess, data } = getExperienceInfoResult;

    if (isSuccess) {
      setId("");
      settitle("");
      setcompany("");
      setcategory("");
      setlocation("");
      setStartDate("");
      setEndDate("");
      setdescription("");
      setAddExperience(false);
      setExperiences(data.data.experience || []);
    }

    if (isError) {
      toastError("", error);
    }
  }, [dispatch, getExperienceInfoResult]);

  const handleUpdateResume = (e) => {
    e.preventDefault();
    const data = experiences.filter((Experience) => Experience._id !== id);

    const dataToBePushed = {
      title,
      name: company,
      category,
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

    updateExperienceInfo({ resume_id, experience: [...data] });
  };

  const handleAddExperience = () => {
    setId("");
    settitle("");
    setcompany("");
    setcategory("");
    setlocation("");
    setStartDate("");
    setEndDate("");
    setdescription("");
    setAddExperience(true);
  };

  const handleEditExperience = (_id) => {
    const data = experiences.filter((education) => education._id === _id);
    setAddExperience(true);
    setId(_id);
    settitle(data[0].title);
    setcompany(data[0].name);
    setcategory(data[0].category);
    setlocation(data[0].location);
    setStartDate(data[0].startDate);
    setEndDate(data[0].endDate);
    setdescription(data[0].description);
  };

  const handleDeleteExperience = (_id) => {
    const data = experiences.filter((experience) => experience._id !== _id);
    updateExperienceInfo({ resume_id, experience: [...data] });
  };

  return (
    <>
      <Stack direction="column" spacing={2}>
        {addExperience ? (
          <>
            <form onSubmit={handleUpdateResume}>
              <Stack direction="column" spacing={2}>
                <TextField
                  size="small"
                  variant="standard"
                  label="Job Title"
                  value={title}
                  onChange={(e) => settitle(e.target.value)}
                  required
                />
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Category
                    </InputLabel>
                    <Select
                      variant="standard"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={category}
                      label="Category"
                      onChange={(e) => setcategory(e.target.value)}
                    >
                      <MenuItem value="Internship">Internship</MenuItem>
                      <MenuItem value="Full-Time">Full-Time</MenuItem>
                      <MenuItem value="Others">Others</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <TextField
                  variant="standard"
                  label="Company Name"
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
          </>
        ) : (
          <></>
        )}
        <StyledButton onClick={handleAddExperience}>
          + Add new Experience
        </StyledButton>
        {experiences.map((experience) => {
          return (
            <Box
              style={{
                boxShadow: "0 2px 5px 0 grey",
                padding: "5px",
                borderRadius: "10px",
                display: `${experience._id === id ? "none" : "block"}`,
              }}
              key={experience._id}
            >
              <Typography variant="body1" fontWeight={600} component="span">
                {experience.name}
              </Typography>
              <LoadingButton
                onClick={() => handleEditExperience(experience._id)}
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
                onClick={() => handleDeleteExperience(experience._id)}
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

export default Experience;
