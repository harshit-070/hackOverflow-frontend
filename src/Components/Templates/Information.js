import {
  Box,
  Button,
  Drawer,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Architecture,
  ContactPage,
  ContentPaste,
  Grade,
  KeyboardArrowLeft,
  Person,
  Psychology,
  School,
} from "@mui/icons-material";
import React from "react";
import { useState } from "react";
import Info from "./Drawer/Components/PersonalDetails";
import ContactDetails from "./Drawer/Components/ContactDetails";
import Education from "./Drawer/Components/EducationDetails";
import Experience from "./Drawer/Components/ExperienceDetails";
import Projects from "./Drawer/Components/ProjectsDetails";
import Skills from "./Drawer/Components/SkillsDetails";
import Achievements from "./Drawer/Components/AchievementsDetails";
import Template1 from "./Template/1";
import Template3 from "./Template/3/Template3";
import Teamplate_1 from "./Template/1";
import { LoadingButton } from "@mui/lab";

const drawerWidth = 250;

const Information = ({ open, setOpen }) => {
  const [tagline, settagline] = useState("Your CV Sections");
  const [selected, setSelect] = useState(0);
  const [add, setAdd] = useState(false);
  const [value, setValue] = useState("");
  const [sectionname, setsectionname] = useState("");
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const [subtitle, setsubtitle] = useState("");
  const [location, setlocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box style={{ padding: "10px 10px 0px 20px" }}>
          <Box style={{ display: "flex" }}>
            <Typography fontWeight={600}>{tagline}</Typography>
            <Box
              style={{ marginLeft: "auto", cursor: "pointer" }}
              onClick={() => {
                if (selected === 0) {
                  setOpen(false);
                } else {
                  setSelect(0);
                  settagline("Your CV Sections");
                }
              }}
              component="span"
            >
              <KeyboardArrowLeft
                style={{ fontSize: "25px", fontWeight: 600 }}
              />
            </Box>
          </Box>

          {selected === 0 ? (
            <>
              <List>
                <ListItemButton
                  onClick={() => {
                    setSelect(1);
                    settagline("Person Details");
                  }}
                >
                  <ListItem>
                    <Person />
                    &nbsp;&nbsp;Personal Details
                  </ListItem>
                </ListItemButton>
                <ListItemButton
                  onClick={() => {
                    setSelect(2);
                    settagline("Contact Details");
                  }}
                >
                  <ListItem>
                    <ContactPage />
                    &nbsp;&nbsp;Contact Details
                  </ListItem>
                </ListItemButton>
                <ListItemButton
                  onClick={() => {
                    setSelect(3);
                    settagline("Education");
                  }}
                >
                  <ListItem>
                    <School />
                    &nbsp;&nbsp;Education
                  </ListItem>
                </ListItemButton>
                <ListItemButton
                  onClick={() => {
                    setSelect(4);
                    settagline("Experience");
                  }}
                >
                  <ListItem>
                    <Psychology />
                    &nbsp;&nbsp;Experience
                  </ListItem>
                </ListItemButton>{" "}
                <ListItemButton
                  onClick={() => {
                    setSelect(5);
                    settagline("Projects");
                  }}
                >
                  <ListItem>
                    <ContentPaste />
                    &nbsp;&nbsp;Projects
                  </ListItem>
                </ListItemButton>{" "}
                <ListItemButton
                  onClick={() => {
                    setSelect(6);
                    settagline("Skills");
                  }}
                >
                  <ListItem>
                    <Architecture />
                    &nbsp;&nbsp;Skills
                  </ListItem>
                </ListItemButton>
                <ListItemButton
                  onClick={() => {
                    setSelect(7);
                    settagline("Achievements");
                  }}
                >
                  <ListItem>
                    <Grade />
                    &nbsp;&nbsp;Achievements
                  </ListItem>
                </ListItemButton>
              </List>
            </>
          ) : (
            <>
              {selected === 1 ? <Info /> : ""}
              {selected === 2 ? <ContactDetails /> : ""}
              {selected === 3 ? <Education /> : ""}
              {selected === 4 ? <Experience /> : ""}
              {selected === 5 ? <Projects /> : ""}
              {selected === 6 ? <Skills /> : ""}
              {selected === 7 ? <Achievements /> : ""}
            </>
          )}
          <Button
            variant="outlined"
            size="small"
            fullWidth
            onClick={() => setAdd(true)}
          >
            Add Sections
          </Button>
          {add ? (
            <>
              <Box>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                    Choose Section Type
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  >
                    <FormControlLabel
                      value="Experience Type"
                      control={<Radio />}
                      label="Experience Type"
                    />
                    <FormControlLabel
                      value="Achievement Type"
                      control={<Radio />}
                      label="Achievement Type"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </>
          ) : null}
        </Box>
        {value === "Experience Type" ? (
          <>
            <Stack direction="column" spacing={2}>
              <form /*onSubmit={handleUpdateResume}*/>
                <TextField
                  size="small"
                  variant="standard"
                  label="Enter Section Name"
                  value={sectionname}
                  onChange={(e) => setsectionname(e.target.value)}
                  required
                />
                <Stack direction="column" spacing={2}>
                  <TextField
                    size="small"
                    variant="standard"
                    label="Title"
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
                        <MenuItem value="Others">Others</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>

                  <TextField
                    variant="standard"
                    label="Subtitile"
                    value={subtitle}
                    onChange={(e) => setsubtitle(e.target.value)}
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
                    multiline
                    value={description}
                    onChange={(e) => setdescription(e.target.value)}
                    required
                  />
                  <LoadingButton loading={loading} type="submit">
                    Update
                  </LoadingButton>
                </Stack>
              </form>
            </Stack>
          </>
        ) : (
          <>
            <form /*onSubmit={handleSubmit}*/>
              <TextField
                size="small"
                variant="standard"
                label="Enter Setion Name"
                value={sectionname}
                onChange={(e) => setsectionname(e.target.value)}
                required
              />
              <Stack direction="column">
                <TextField
                  size="small"
                  variant="standard"
                  required
                  multiline
                  label="Description"
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                  sx={{ marginBottom: "15px", overflowX: "hidden" }}
                />
                <LoadingButton type="submit" loading={loading}>
                  Update{" "}
                </LoadingButton>
              </Stack>
            </form>
          </>
        )}
      </Drawer>
    </>
  );
};

export default Information;
