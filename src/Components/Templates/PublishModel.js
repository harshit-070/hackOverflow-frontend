import React, { useEffect, useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import { LinkOutlined } from "@mui/icons-material";
import { useUpdateResumeMutation } from "../../service/resume.service";
import { toastError, toastSuccess } from "../../utils/toastMessage";
import { LoadingButton } from "@mui/lab";

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

const PublishModel = ({ publish, setPublish, url, isPublished, resume_id }) => {
  const [updateResume, updateResumeResult] = useUpdateResumeMutation();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { isLoading, isSuccess, isError, error } = updateResumeResult;

    setLoading(isLoading);
    if (isSuccess) {
      toastSuccess("Resume Updated");
    }

    if (isError) {
      toastError("", error);
    }
  }, [isPublished, setPublish, updateResumeResult]);

  const handlePublish = () => {
    updateResume({ resume_id, isPublished: !isPublished });
  };

  return (
    <Modal
      open={publish}
      onClose={() => setPublish(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {url}
        </Typography>
        <Button
          variant="contained"
          startIcon={<LinkOutlined />}
          sx={{ textTransform: "none" }}
        >
          Copy Url
        </Button>
        <LoadingButton
          loading={loading}
          variant="contained"
          onClick={() => handlePublish()}
        >
          {isPublished ? "Unpublish" : "Publish"}
        </LoadingButton>
      </Box>
    </Modal>
  );
};

export default PublishModel;
