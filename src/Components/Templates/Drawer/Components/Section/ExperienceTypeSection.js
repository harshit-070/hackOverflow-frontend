import {
  Box,
  Stack,
  styled,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { toastError, toastSuccess } from "../../../../../utils/toastMessage";
import { useParams } from "react-router-dom";
import { useUpdateCustomizedSectionsMutation } from "../../../../../service/resume.service";
import { useSelector } from "react-redux";
import { LoadingButton } from "@mui/lab";
import { Delete, Edit } from "@mui/icons-material";
import { getCustomizedSectionDetails } from "../../../../../feature/resumeSlice";
import { MonthPicker, YearPicker } from "../InputField";

const StyledButton = styled(Button)`
  text-transform: none;
`;
const ExperienceTypeSections = ({ _id }) => {
  const section = useSelector((state) =>
    getCustomizedSectionDetails(state, _id)
  );

  const [id, setId] = useState(" ");
  const [title, settitle] = useState(" ");
  const [company, setcompany] = useState(" ");
  const [location, setlocation] = useState(" ");
  const [description, setdescription] = useState(" ");
  const [startMonth, setStartMonth] = useState("January");
  const [startYear, setStartYear] = useState(1973);
  const [endMonth, setEndMonth] = useState("January");
  const [endYear, setEndYear] = useState(1973);
  const [loading, setLoading] = useState(false);
  const [addExperience, setAddExperience] = useState(false);
  const [experiences, setExperiences] = useState([]);

  const initData = () => {
    setId(" ");
    settitle(" ");
    setcompany(" ");
    setlocation(" ");
    setStartMonth("January");
    setEndMonth("January");
    setStartYear(1973);
    setEndYear(1973);
    setdescription(" ");
  };

  const { resume_id } = useParams();

  const [updateCustomizedSection, updateCustmoizedSectionResult] =
    useUpdateCustomizedSectionsMutation();

  useEffect(() => {
    const { isLoading, isSuccess, isError, error } =
      updateCustmoizedSectionResult;
    setLoading(isLoading);
    if (isSuccess) {
      setAddExperience(false);
      setId(" ");
      toastSuccess("Resume Updated");
    }

    if (isError) {
      toastError("", error);
    }
  }, [updateCustmoizedSectionResult]);

  useEffect(() => {
    console.log(section);
    if (section) {
      setExperiences(section || []);
    }
  }, [section]);

  const handleUpdateResume = (e) => {
    e.preventDefault();
    const data = experiences?.data?.filter(
      (Experience) => Experience._id !== id
    );

    const dataToBePushed = {
      title,
      name: company,
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

    updateCustomizedSection({ resume_id, _id, data: [...data] });
  };

  const handleAddExperience = () => {
    initData();
    setAddExperience(true);
  };

  const handleEditExperience = (_id) => {
    const data = experiences?.data?.filter(
      (education) => education._id === _id
    );
    setAddExperience(true);
    setId(_id);
    settitle(data[0].title);
    setcompany(data[0].name);
    setlocation(data[0].location);
    setStartMonth(data[0].start_month);
    setEndMonth(data[0].end_month);
    setStartYear(data[0].start_year);
    setEndYear(data[0].end_year);
    setdescription(data[0].description);
  };

  const handleDeleteExperience = (_id) => {
    const data = experiences?.data.filter(
      (experience) => experience._id !== _id
    );
    updateCustomizedSection({ resume_id, _id, data: [...data] });
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
                  label="Title"
                  value={title}
                  onChange={(e) => settitle(e.target.value)}
                  required
                />

                <TextField
                  variant="standard"
                  label="Organization Name"
                  value={company}
                  onChange={(e) => setcompany(e.target.value)}
                  required
                />
                <TextField
                  variant="standard"
                  label="Location"
                  value={location}
                  onChange={(e) => setlocation(e.target.value)}
                />
                <MonthPicker
                  value={startMonth}
                  setValue={setStartMonth}
                  label={"Start Month"}
                  required={false}
                />
                <YearPicker
                  value={startYear}
                  setValue={setStartYear}
                  label="Start Year"
                  required={false}
                />
                <MonthPicker
                  value={endMonth}
                  setValue={setEndMonth}
                  label={"End Month"}
                  required={false}
                />
                <YearPicker
                  value={endYear}
                  setValue={setEndYear}
                  label="End Year"
                  required={false}
                />
                <TextField
                  variant="standard"
                  label="Description"
                  multiline
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
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
        {experiences?.data?.map((experience) => {
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

export default ExperienceTypeSections;
