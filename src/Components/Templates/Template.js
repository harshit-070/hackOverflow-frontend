import { Box } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import React from "react";
import { useState } from "react";
import Information from "./Information";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Template1 from "./Template/1";
import Template2 from "./Template/2";
import Template4 from "./Template/4";
import Template3 from "./Template/3/Template3";

const Template = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState("1");

  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    summary: "",
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box style={{ display: "flex", alignItems: "flex-start" }}>
        <Box
          style={{
            display: "inline-block",
            boxShadow: "2px 5px 5px grey",
            borderRadius: "0px 20px 20px 0px",
            padding: "0px 10px",
            marginTop: "5px",
            cursor: "pointer",
          }}
          onClick={() => setOpen(true)}
        >
          <KeyboardDoubleArrowRightIcon
            style={{ fontWeight: 600, fontSize: "40px" }}
          />
        </Box>

        <Box sx={{ width: "100%", typography: "body1", padding: "20px" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Template One" value="1" />
                <Tab label="Template Two" value="2" />
                <Tab label="Template Three" value="3" />
                <Tab label="Template Four" value="4" />
                <Tab label="Template Five" value="5" />
                <Tab label="Template Six" value="6" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Template1 />
            </TabPanel>
            <TabPanel value="2">
              <Template2 />
            </TabPanel>
            <TabPanel value="3">
              <Template3 />
            </TabPanel>
            <TabPanel value="4">
              <Template4 />
            </TabPanel>
            <TabPanel value="5">Comming Soon...</TabPanel>
            <TabPanel value="6">Comming Soon...</TabPanel>
          </TabContext>
        </Box>
      </Box>
      <Information open={open} setOpen={setOpen} />
    </Box>
  );
};

export default Template;
