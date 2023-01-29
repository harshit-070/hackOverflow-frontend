import React from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
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

const PublishModel = ({ publish, setPublish }) => {
  return (
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
  );
};

export default PublishModel;
