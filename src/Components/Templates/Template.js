import {
  Box,
  Button,
  Link,
  Menu,
  MenuItem,
  Modal,
  Typography,
} from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import React from "react";
import { useState } from "react";
import Information from "./Drawer/Components/Index";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Template1 from "./Template/1";
import Template2 from "./Template/2";
import Template4 from "./Template/4";
import Template3 from "./Template/3/Template3";
import FetchResume from "./Drawer/Fetch/Index";
import Index from "./Template/5";
import { LinkOutlined } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Template = () => {
  const [open, setOpen] = useState(false);
  const [publish, setPublish] = useState(false);
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <FetchResume />
      <Box style={{ display: "flex", alignItems: "flex-start" }}>
        <Box
          style={{
            display: "inline-block",
            boxShadow: "2px 5px 5px grey",
            borderRadius: "0px 20px 20px 0px",
            padding: "0px 10px",
            marginTop: "100px",
            cursor: "pointer",
          }}
          onClick={() => setOpen(true)}
        >
          <KeyboardDoubleArrowRightIcon
            style={{ fontWeight: 600, fontSize: "40px" }}
          />
        </Box>

        <Box
          sx={{
            width: "100%",
            typography: "body1",
            padding: "20px",
          }}
        >
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
            <TabPanel value="1">{/* <Template1 /> */}</TabPanel>
            <TabPanel value="2">{/* <Template2 /> */}</TabPanel>
            <TabPanel value="3">{/* <Template3 /> */}</TabPanel>
            <TabPanel value="4">
              <Template4 />
            </TabPanel>
            <TabPanel value="5">
              <Index />
            </TabPanel>
            <TabPanel value="6">Comming Soon...</TabPanel>
          </TabContext>
          <Information open={open} setOpen={setOpen} />
        </Box>
        <Box sx={{ margin: "35px 5px" }}>
          <Button variant="contained" color="success">
            Download
          </Button>
        </Box>
        <Box sx={{ margin: "35px 5px" }}>
          <Button variant="contained" onClick={() => setPublish(true)}>
            Publish
          </Button>
          <Modal
            open={publish}
            onClose={() => setPublish(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Button
                variant="contained"
                startIcon={<LinkOutlined />}
                sx={{ textTransform: "none" }}
              >
                Copy Url
              </Button>
            </Box>
          </Modal>
        </Box>
      </Box>
    </Box>
  );
};

export default Template;
