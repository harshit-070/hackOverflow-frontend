import { Box, Button } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Information from "./Drawer/Components/Index";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Template1 from "./Template/1";
// import Template2 from "./Template/2";
import Template4 from "./Template/4";
import Template3 from "./Template/3/Template3";
import FetchResume from "./Drawer/Fetch/Index";
import Index from "./Template/5";
import PublishModel from "./PublishModel";
import Publish from "./Publish";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  getPublishDetails,
  getResumeNameDetails,
  getTemplateNumberDetails,
} from "../../feature/resumeSlice";
import { getUserDetails } from "../../feature/userSlice";
import { useUpdateResumeMutation } from "../../service/resume.service";
import { toastError, toastSuccess } from "../../utils/toastMessage";
import { useReactToPrint } from "react-to-print";
const Template = () => {
  const isPublished = useSelector((state) => getPublishDetails(state));
  const resumeName = useSelector((state) => getResumeNameDetails(state));
  const userDetails = useSelector((state) => getUserDetails(state));
  const templateNumber = useSelector((state) =>
    getTemplateNumberDetails(state)
  );
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [open, setOpen] = useState(false);
  const [publish, setPublish] = useState(false);
  const [value, setValue] = useState(templateNumber.toString() || "4");
  const [updateResume, updateResumeResult] = useUpdateResumeMutation();
  const { resume_id } = useParams();

  const handleChange = (event, newValue) => {
    updateResume({ resume_id, template_number: parseInt(newValue) });
    setValue(newValue);
  };

  useEffect(() => {
    const { isSuccess, isError, error } = updateResumeResult;

    if (isSuccess) {
      toastSuccess("Resume Template Updated");
    }

    if (isError) {
      toastError("", error);
    }
  }, [updateResumeResult]);

  return (
    <Box sx={{ backgroundColor: "lightgray" }}>
      <FetchResume />
      <PublishModel
        publish={publish}
        setPublish={setPublish}
        resume_id={resume_id}
        isPublished={isPublished}
        url={`${process.env.REACT_APP_FRONTEND_URL}/${userDetails.username}/${resumeName}`}
      />
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
                <Tab label="Template One" value="4" />
                <Tab label="Template Two" value="5" />
                <Tab label="Template Three" value="6" />
                {/* <Tab label="Template Four" value="4" />
                <Tab label="Template Five" value="5" />
                <Tab label="Template Six" value="6" /> */}
              </TabList>
            </Box>

            <TabPanel value="4">
              <Template4 ref={componentRef} />
            </TabPanel>
            <TabPanel value="5">
              <Index ref={componentRef} />
            </TabPanel>
            <TabPanel value="6">Comming Soon...</TabPanel>
          </TabContext>
          <Information open={open} setOpen={setOpen} />
        </Box>
        <Box sx={{ margin: "35px 5px" }}>
          <Button variant="contained" color="success" onClick={handlePrint}>
            Download
          </Button>
        </Box>
        <Publish setPublish={setPublish} />
      </Box>
    </Box>
  );
};

export default Template;
