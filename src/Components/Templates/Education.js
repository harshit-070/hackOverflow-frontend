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
  Typography,
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
import { Delete, Edit } from "@mui/icons-material";

const StyledButton = styled(Button)`
  text-transform: none;
`;
const Education = () => {
  const [id, setID] = useState(" ");
  const [education, seteducation] = useState(" ");
  const [category, setcategory] = useState("");
  const [otherCategory, setOtherCategory] = useState(" ");
  const [institute, setinstitute] = useState(" ");
  const [percentage, setpercentage] = useState(" ");
  const [location, setlocation] = useState(" ");
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
      setID("");
      seteducation(" ");
      setcategory("");
      setOtherCategory(" ");
      setinstitute(" ");
      setpercentage(" ");
      setlocation(" ");
      setStartDate(new Date());
      setEndDate(new Date());
      setAddEducation(false);
      setEducations(data.data.education || []);
    }

    if (isError) {
      toastError("", error);
    }
  }, [dispatch, getEducationInfoResult]);

  const handleUpdateResume = (e) => {
    e.preventDefault();
    const data = educations.filter((education) => education._id !== id);

    const dataToBePushed = {
      specialization: education,
      name: institute,
      percentage,
      location,
      category,
      otherCategory,
      startDate,
      endDate,
    };

    if (id) {
      dataToBePushed._id = id;
    }

    data.push(dataToBePushed);

    updateEducationInfo({ resume_id, education: [...data] });
  };

  const handleAddEducation = () => {
    setID("");
    seteducation(" ");
    setcategory("");
    setOtherCategory(" ");
    setinstitute(" ");
    setpercentage(" ");
    setlocation(" ");
    setStartDate(new Date());
    setEndDate(new Date());
    setAddEducation(true);
  };

  const handleEditEducation = (_id) => {
    const data = educations.filter((education) => education._id === _id);
    setAddEducation(true);
    setID(_id);
    seteducation(data[0].specialization);
    setcategory(data[0].category);
    setOtherCategory(data[0].otherCategory);
    setinstitute(data[0].name);
    setpercentage(data[0].percentage);
    setlocation(data[0].location);
    setStartDate(data[0].startDate);
    setEndDate(data[0].endDate);
    // set
  };

  const handleDeleteEducation = (_id) => {
    const data = educations.filter((education) => education._id !== _id);
    updateEducationInfo({ resume_id, education: [...data] });
  };

  return (
    <>
      <Stack direction="column" spacing={2}>
        {addEduction ? (
          <form onSubmit={handleUpdateResume}>
            <Stack direction="column" spacing={2}>
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
              <LoadingButton loading={loading} type="submit">
                Update
              </LoadingButton>
            </Stack>
          </form>
        ) : (
          <></>
        )}
        <StyledButton onClick={handleAddEducation}>
          + Add Education
        </StyledButton>
        {educations.map((education) => {
          return (
            <Box
              style={{
                boxShadow: "0 2px 5px 0 grey",
                padding: "5px",
                borderRadius: "10px",
                display: `${education._id === id ? "none" : "block"}`,
              }}
              key={education._id}
            >
              <Typography variant="body1" fontWeight={600} component="span">
                {education.name}
              </Typography>
              <LoadingButton
                onClick={() => handleEditEducation(education._id)}
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
                onClick={() => handleDeleteEducation(education._id)}
                style={{ fontSize: "20px", color: "grey", float: "right" }}
              >
                <Delete />
              </LoadingButton>
              &nbsp; &nbsp;
              <Typography
                variant="subtitle1"
                color="grey"
                style={{ fontSize: "12px" }}
              >
                {education.percentage}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </>
  );
};

export default Education;
