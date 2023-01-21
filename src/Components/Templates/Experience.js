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

const StyledButton = styled(Button)`
  text-transform: none;
`;
const Experience = () => {
  const [title, settitle] = useState("");
  const [category, setcategory] = useState("");
  const [company, setcompany] = useState("");
  const [location, setlocation] = useState("");
  const [description, setdescription] = useState("");
  const [value, setValue] = React.useState(null);
  const [loading, setLoading] = useState(false);
  const [addExperience, setAddExperience] = useState(false);

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
      setExperiences(data.data.Experience || []);
    }

    if (isError) {
      toastError("", error);
    }
  }, [dispatch, getExperienceInfoResult]);

  const handleUpdateResume = () => {
    // const data = experiences.filter((Experience) => Experience._id !== id);

    const dataToBePushed = {};

    // if (id) {
    //   dataToBePushed._id = id;
    // }

    // data.push(dataToBePushed);

    // updateEducationInfo({ resume_id, education: [...data] });
  };

  const handleAddEducation = () => {
    setAddExperience(true);
  };

  const handleEditEducation = () => {};

  return (
    <>
      <Stack direction="column" spacing={2}>
        {addExperience ? (
          <>
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
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
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
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="End Date"
                variant="standard"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
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
            <LoadingButton loading={loading}>Update</LoadingButton>
          </>
        ) : (
          <></>
        )}
        <StyledButton onClick={handleAddEducation}>
          + Add new Experience
        </StyledButton>
      </Stack>
    </>
  );
};

export default Experience;
