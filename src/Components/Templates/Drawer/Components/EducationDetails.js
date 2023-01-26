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
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useUpdateEducationInfoMutation } from "../../../../service/resume.service";
import { toastError, toastSuccess } from "../../../../utils/toastMessage";
import { Delete, Edit } from "@mui/icons-material";
import { getEducationDetails } from "../../../../feature/resumeSlice";
import { MonthPicker, YearPicker } from "./InputField";

const StyledButton = styled(Button)`
  text-transform: none;
`;
const Education = () => {
  const [id, setID] = useState(" ");
  const [education, seteducation] = useState(" ");
  const [category, setcategory] = useState("");
  const [otherCategory, setOtherCategory] = useState("");
  const [institute, setinstitute] = useState(" ");
  const [percentage, setpercentage] = useState(" ");
  const [location, setlocation] = useState(" ");
  const [startMonth, setStartMonth] = useState("January");
  const [startYear, setStartYear] = useState(1973);
  const [endMonth, setEndMonth] = useState("January");
  const [endYear, setEndYear] = useState(1973);
  const [loading, setLoading] = useState(false);
  const [addEduction, setAddEducation] = useState(false);

  const [educations, setEducations] = useState([]);

  const { resume_id } = useParams();

  const educationDetails = useSelector((state) => getEducationDetails(state));

  const [updateEducationInfo, updateEducationResult] =
    useUpdateEducationInfoMutation();

  const initData = () => {
    setID(" ");
    seteducation(" ");
    setcategory("");
    setOtherCategory(" ");
    setinstitute(" ");
    setpercentage(" ");
    setlocation(" ");
    setStartMonth("January");
    setEndMonth("January");
    setStartYear(1973);
    setEndYear(1973);
  };

  useEffect(() => {
    const { isLoading, isSuccess, isError, error } = updateEducationResult;
    setLoading(isLoading);
    if (isSuccess) {
      setAddEducation(false);
      toastSuccess("Resume Updated");
    }

    if (isError) {
      toastError("", error);
    }
  }, [updateEducationResult]);

  useEffect(() => {
    if (educationDetails) {
      setEducations(educationDetails || []);
    }
  }, [educationDetails]);

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
      start_year: parseInt(startYear),
      end_year: parseInt(endYear),
      start_month: startMonth,
      end_month: endMonth,
    };

    if (id) {
      dataToBePushed._id = id;
    }

    data.push(dataToBePushed);

    updateEducationInfo({ resume_id, education: [...data] });
  };

  const handleAddEducation = () => {
    initData();
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
    setStartMonth(data[0].start_month);
    setEndMonth(data[0].end_month);
    setStartYear(data[0].start_year);
    setEndYear(data[0].end_year);
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
              <Category value={category} setValue={setcategory} />
              {category === "Others" ? (
                <TextField
                  size="small"
                  required
                  variant="standard"
                  label="Category"
                  value={otherCategory}
                  onChange={(e) => setOtherCategory(e.target.value)}
                />
              ) : (
                <></>
              )}
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
              <LoadingButton loading={loading} type="submit">
                {id === " " ? "Add" : "Update"}
              </LoadingButton>
            </Stack>
          </form>
        ) : (
          <></>
        )}
        <StyledButton onClick={handleAddEducation}>
          + Add Education
        </StyledButton>
        {educations.map((education, index) => {
          return (
            <Box
              key={index}
              style={{
                boxShadow: "0 2px 5px 0 grey",
                padding: "5px",
                borderRadius: "10px",
                display: `${education._id === id ? "none" : "block"}`,
              }}
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

const Category = ({ value, setValue }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>Category</InputLabel>
      <Select
        variant="standard"
        required
        value={value}
        label="Category"
        onChange={(e) => setValue(e.target.value)}
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
  );
};

export default Education;
