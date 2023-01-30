import React from "react";
import { useSelector } from "react-redux";
import { getContactDetails } from "../../../../feature/resumeSlice";

import { Box, Typography } from "@mui/material";
import {
  Email,
  GitHub,
  LinkedIn,
  LocationOn,
  Phone,
} from "@mui/icons-material";

const ContactDetails = () => {
  const contactDetails = useSelector((state) => getContactDetails(state));

  if (!contactDetails) {
    return <div>Loading...</div>;
  }

  if (contactDetails) {
    return (
      <Box sx={{ marginBottom: "1rem", display: "flex", alignItems: "center" }}>
        {contactDetails.city || contactDetails.country ? (
          <>
            <LocationOn sx={{ fontSize: "20px" }} />
            &nbsp;
            <Typography component="span" variant="body1">
              {contactDetails.city}, {contactDetails.country}
            </Typography>
            &nbsp;&nbsp;
          </>
        ) : (
          <></>
        )}{" "}
        {contactDetails.number ? (
          <>
            <Phone sx={{ fontSize: "20px" }} />
            &nbsp;
            <Typography component="span" variant="body1">
              {contactDetails.number}
            </Typography>
            &nbsp;&nbsp;
          </>
        ) : (
          <></>
        )}
        {contactDetails.email ? (
          <>
            <Email sx={{ fontSize: "20px" }} />
            &nbsp;
            <Typography component="span" variant="body1">
              {contactDetails.email}
            </Typography>
            &nbsp;&nbsp;
          </>
        ) : (
          <></>
        )}
        {contactDetails.linkedin ? (
          <>
            <LinkedIn sx={{ fontSize: "20px" }} />
            &nbsp;
            <Typography component="span" variant="body1">
              {contactDetails.linkedin}
            </Typography>
            &nbsp;&nbsp;
          </>
        ) : (
          <></>
        )}{" "}
        {contactDetails.github ? (
          <>
            <GitHub sx={{ fontSize: "20px" }} />
            &nbsp;
            <Typography component="span" variant="body1">
              {contactDetails.github}
            </Typography>
            &nbsp;&nbsp;
          </>
        ) : (
          <></>
        )}
      </Box>
    );
  }
};

export default ContactDetails;
