import { Box, Grid, Stack, Typography } from "@mui/material";
import {
  Email,
  GitHub,
  LinkedIn,
  LocationOn,
  Phone,
} from "@mui/icons-material";
import React from "react";
import { useSelector } from "react-redux";
import { getContactDetails } from "../../../../feature/resumeSlice";

const ContactDetails = () => {
  const contactDetails = useSelector((state) => getContactDetails(state));

  if (!contactDetails) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Grid
        container
        sx={{
          marginBottom: "2rem",
          backgroundColor: "darkslategray",
          color: "white",
          padding: "1rem",
          borderRadius: "10px",
        }}
      >
        <Grid item sx={{ width: "50%" }}>
          <Stack
            direction="column"
            spacing={2}
            sx={{ justifyContent: "center" }}
          >
            {contactDetails.email ? (
              <Box style={{ display: "flex", alignItems: "center" }}>
                <Email sx={{ fontSize: "20px" }} />
                &nbsp;
                <Typography component="span" variant="body1">
                  {contactDetails.email}
                </Typography>
                &nbsp;&nbsp;
              </Box>
            ) : (
              <></>
            )}

            {contactDetails.city || contactDetails.country ? (
              <Box style={{ display: "flex", alignItems: "center" }}>
                <LocationOn sx={{ fontSize: "20px" }} />
                &nbsp;
                <Typography variant="body1">
                  {contactDetails.city}, {contactDetails.country}
                </Typography>
                &nbsp;&nbsp;
              </Box>
            ) : (
              <></>
            )}
            {contactDetails.github ? (
              <Box style={{ display: "flex", alignItems: "center" }}>
                <GitHub sx={{ fontSize: "20px" }} />
                &nbsp;
                <Typography variant="body1">{contactDetails.github}</Typography>
                &nbsp;&nbsp;
              </Box>
            ) : (
              <></>
            )}
          </Stack>
        </Grid>
        <Grid item sx={{ width: "50%" }}>
          <Stack
            direction="column"
            spacing={2}
            sx={{ justifyContent: "center" }}
          >
            {contactDetails.github ? (
              <Box style={{ display: "flex", alignItems: "center" }}>
                <Phone sx={{ fontSize: "20px" }} />
                &nbsp;
                <Typography variant="body1">{contactDetails.number}</Typography>
                &nbsp;&nbsp;
              </Box>
            ) : (
              <></>
            )}
            {contactDetails.linkedin ? (
              <Box style={{ display: "flex", alignItems: "center" }}>
                <LinkedIn sx={{ fontSize: "20px" }} />
                &nbsp;
                <Typography variant="body1">
                  {contactDetails.linkedin}
                </Typography>
                &nbsp;&nbsp;
              </Box>
            ) : (
              <></>
            )}
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactDetails;
