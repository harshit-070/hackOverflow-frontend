import { Box, Grid, styled, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { redirect } from "react-router-dom";
import { useCreateResumeMutation } from "../../service/resume.service";
import { toastError, toastInfo, toastSuccess } from "../../utils/toastMessage";
import "./Templates.css";

const Image = styled("img")({
  height: "300px",
  width: "100%",
  border: "2px solid grey",
  borderRadius: "10px",
  cursor: "pointer",
});
const Templates = () => {
  const [createResume, createResumeResult] = useCreateResumeMutation();
  useEffect(() => {
    const { isSuccess, isError, error, data } = createResumeResult;
    if (isSuccess) {
      toastSuccess("Resume Created");
      console.log(data.data._id);
      window.location.replace(`/edit/resume/${data.data._id}`);
      return;
    }

    if (isError) {
      toastError("", error);
    }
  }, [createResumeResult]);

  const handleCreateResume = () => {
    toastInfo("Please wait , creating your resume");
    createResume();
  };

  return (
    <Box style={{ padding: "30px" }}>
      <Typography variant="h2" fontWeight={600}>
        Resume Templates
      </Typography>
      <Box
        style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <Grid container style={{ width: "75vw" }}>
          <Grid
            item
            lg={3}
            md={4}
            sm={6}
            xs={12}
            style={{ padding: "10px 20px" }}
          >
            <Box className="container">
              <Image
                className="image"
                src="https://d.novoresume.com/images/doc/minimalist-resume-template.png"
                alt="template"
              />
              <Box className="middle">
                <Box className="text" onClick={handleCreateResume}>
                  <Typography>Create Resume</Typography>
                </Box>
              </Box>
            </Box>

            <Box>
              <Typography variant="h6" fontWeight={600}>
                Minimalist 1/6
              </Typography>
              <Typography
                color="grey"
                style={{ lineHeight: "inherit", fontSize: "14px" }}
              >
                A simple and easy to follow resume template. Perfect for more
                conservative industries which prefer less flashy templates.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            lg={3}
            md={4}
            sm={6}
            xs={12}
            style={{ padding: "10px 20px" }}
          >
            <Box className="container">
              <Image
                className="image"
                src="https://d.novoresume.com/images/doc/minimalist-resume-template.png"
                alt="template"
              />
              <Box className="middle">
                <Box className="text" onClick={handleCreateResume}>
                  <Typography>Create Resume</Typography>
                </Box>
              </Box>
            </Box>

            <Box>
              <Typography variant="h6" fontWeight={600}>
                Minimalist 2/6
              </Typography>
              <Typography
                color="grey"
                style={{ lineHeight: "inherit", fontSize: "14px" }}
              >
                A simple and easy to follow resume template. Perfect for more
                conservative industries which prefer less flashy templates.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            lg={3}
            md={4}
            sm={6}
            xs={12}
            style={{ padding: "10px 20px" }}
          >
            <Box className="container">
              <Image
                className="image"
                src="https://d.novoresume.com/images/doc/minimalist-resume-template.png"
                alt="template"
              />
              <Box className="middle">
                <Box className="text" onClick={handleCreateResume}>
                  <Typography>Create Resume</Typography>
                </Box>
              </Box>
            </Box>

            <Box>
              <Typography variant="h6" fontWeight={600}>
                Minimalist 3/6
              </Typography>
              <Typography
                color="grey"
                style={{ lineHeight: "inherit", fontSize: "14px" }}
              >
                A simple and easy to follow resume template. Perfect for more
                conservative industries which prefer less flashy templates.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            lg={3}
            md={4}
            sm={6}
            xs={12}
            style={{ padding: "10px 20px" }}
          >
            <Box className="container">
              <Image
                className="image"
                src="https://d.novoresume.com/images/doc/minimalist-resume-template.png"
                alt="template"
              />
              <Box className="middle">
                <Box className="text" onClick={handleCreateResume}>
                  <Typography>Create Resume</Typography>
                </Box>
              </Box>
            </Box>

            <Box>
              <Typography variant="h6" fontWeight={600}>
                Minimalist 4/6
              </Typography>
              <Typography
                color="grey"
                style={{ lineHeight: "inherit", fontSize: "14px" }}
              >
                A simple and easy to follow resume template. Perfect for more
                conservative industries which prefer less flashy templates.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            lg={3}
            md={4}
            sm={6}
            xs={12}
            style={{ padding: "10px 20px" }}
          >
            <Box className="container">
              <Image
                className="image"
                src="https://d.novoresume.com/images/doc/minimalist-resume-template.png"
                alt="template"
              />
              <Box className="middle">
                <Box className="text" onClick={handleCreateResume}>
                  <Typography>Create Resume</Typography>
                </Box>
              </Box>
            </Box>

            <Box>
              <Typography variant="h6" fontWeight={600}>
                Minimalist 5/6
              </Typography>
              <Typography
                color="grey"
                style={{ lineHeight: "inherit", fontSize: "14px" }}
              >
                A simple and easy to follow resume template. Perfect for more
                conservative industries which prefer less flashy templates.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            lg={3}
            md={4}
            sm={6}
            xs={12}
            style={{ padding: "10px 20px" }}
          >
            <Box className="container">
              <Image
                className="image"
                src="https://d.novoresume.com/images/doc/minimalist-resume-template.png"
                alt="template"
              />
              <Box className="middle">
                <Box className="text" onClick={handleCreateResume}>
                  <Typography>Create Resume</Typography>
                </Box>
              </Box>
            </Box>

            <Box>
              <Typography variant="h6" fontWeight={600}>
                Minimalist 6/6
              </Typography>
              <Typography
                color="grey"
                style={{ lineHeight: "inherit", fontSize: "14px" }}
              >
                A simple and easy to follow resume template. Perfect for more
                conservative industries which prefer less flashy templates.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Templates;
