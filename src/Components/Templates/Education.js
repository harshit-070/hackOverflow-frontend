import { LoadingButton } from "@mui/lab";
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
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  useLazyGetEducationInfoQuery,
  useUpdateEducationInfoMutation,
} from "../../service/resume.service";
import { toastError, toastSuccess } from "../../utils/toastMessage";

const StyledButton = styled(Button)`
  text-transform: none;
`;
const Education = () => {
  const [id, setID] = useState("");
  const [education, seteducation] = useState("");
  const [category, setcategory] = useState("");
  const [otherCategory, setOtherCategory] = useState("");
  const [institute, setinstitute] = useState("");
  const [percentage, setpercentage] = useState("");
  const [location, setlocation] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [addEduction, setAddEducation] = useState(false);

  const [educations, setEducations] = useState([]);

  const { resume_id } = useParams();

  const [getEducationInfo, getEducationInfoResult] =
    useLazyGetEducationInfoQuery();
  const [updateEducationInfo, updateEducationResult] =
    useUpdateEducationInfoMutation();

  const dispatch = useDispatch();

  useEffect(() => {
    getEducationInfo(resume_id);
  }, [getEducationInfo, resume_id]);

  useEffect(() => {
    const { isLoading, isSuccess, isError, error } = updateEducationResult;
    setLoading(isLoading);
    if (isSuccess) {
      toastSuccess("Resume Updated");
    }

    if (isError) {
      toastError("", error);
    }
  }, [updateEducationResult]);

  useEffect(() => {
    const { isError, error, isSuccess, data } = getEducationInfoResult;

    if (isSuccess) {
      setEducations(data.data.education || []);
    }

    if (isError) {
      toastError("", error);
    }
  }, [dispatch, getEducationInfoResult]);

  const handleUpdateResume = () => {
    const data = educations.filter((education) => education._id !== id);

    const dataToBePushed = {
      specialization: education,
      name: institute,
      percentage,
      location,
      category,
      otherCategory,
    };

    if (id) {
      dataToBePushed._id = id;
    }

    data.push(dataToBePushed);

    updateEducationInfo({ resume_id, education: [...data] });
  };

  const handleAddEducation = () => {
    setAddEducation(true);
  };

  const handleEditEducation = () => {};

  return (
    <>
      <Stack direction="column" spacing={2}>
        {addEduction ? (
          <>
            <TextField
              size="small"
              variant="standard"
              label="Education with specialization"
              required
              value={education}
              onChange={(e) => seteducation(e.target.value)}
            />

            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                variant="standard"
                required
                value={category}
                label="Category"
                onChange={(e) => setcategory(e.target.value)}
              >
                <MenuItem value="secondary">Secondary</MenuItem>
                <MenuItem value="Higher Secondary">Higher Secondary</MenuItem>
                <MenuItem value="Diploma">Diploma</MenuItem>
                <MenuItem value="Graduation">Graduation</MenuItem>
                <MenuItem value="Post Graduation">Post Graduation</MenuItem>
                <MenuItem value="PhD">PhD</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
              </Select>
            </FormControl>
            {category === "Others" ? (
              <TextField
                size="small"
                required
                variant="standard"
                label="Add Category"
                value={otherCategory}
                onChange={(e) => setOtherCategory(e.target.value)}
              />
            ) : null}

            <TextField
              variant="standard"
              label="Institute Name"
              required
              value={institute}
              onChange={(e) => setinstitute(e.target.value)}
            />
            <TextField
              variant="standard"
              label="Percentage/CGPA"
              required
              value={percentage}
              onChange={(e) => setpercentage(e.target.value)}
            />
            <TextField
              variant="standard"
              required
              label="Location"
              value={location}
              onChange={(e) => setlocation(e.target.value)}
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
            <LoadingButton loading={loading} onClick={handleUpdateResume}>
              Update
            </LoadingButton>
          </>
        ) : (
          <></>
        )}
        <StyledButton onClick={handleAddEducation}>
          + Add Education
        </StyledButton>
      </Stack>
    </>
  );
};

export default Education;
