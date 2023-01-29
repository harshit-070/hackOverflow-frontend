import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import {
  useDeleteResumeMutation,
  usePublishResumeMutation,
} from "../../service/resume.service";
import { LoadingButton } from "@mui/lab";
import { toastError, toastSuccess } from "../../utils/toastMessage";

const DashboardCard = ({ resume }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleEditClick = () => {
    return navigate(`/edit/resume/${resume._id}`);
  };

  const [publishResume, publishResumeResult] = usePublishResumeMutation();
  const [deleteResume, deleteResumeResult] = useDeleteResumeMutation();
  const handlePublishResume = () => {
    publishResume({ resume_id: resume._id, publish: !resume.isPublished });
  };

  const handleDeleteResume = () => {
    deleteResume({ resume_id: resume._id });
  };

  useEffect(() => {
    const { isLoading, isSuccess, isError, error } = publishResumeResult;

    setLoading(isLoading);

    if (isSuccess) {
    }

    if (isError) {
      toastError("", error);
    }
  }, [publishResumeResult]);
  useEffect(() => {
    const { isLoading, isSuccess, isError, error } = deleteResumeResult;

    setLoading(isLoading);

    if (isSuccess) {
      toastSuccess("Resume Deleted");
    }

    if (isError) {
      toastError("", error);
    }
  }, [deleteResumeResult]);

  return (
    <Card
      sx={{
        backgroundColor: "rgb(0 0 0 / 29%)",
        color: "white",
        boxShadow: "2px 2px 2px 3px #0ff",
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography gutterBottom variant="h5" component="div">
            <AccountCircle />
            &nbsp;&nbsp; Resume&nbsp;&nbsp;
            <LoadingButton
              loading={loading}
              onClick={handleEditClick}
              sx={{ color: "#f1c40f", fontWeight: 600, cursor: "pointer" }}
              component="span"
            >
              Edit
            </LoadingButton>
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ width: "50%" }}>
            <Typography variant="subtitle1" color="gray" fontWeight={600}>
              Created At
            </Typography>
            <Typography variant="h6" color="black" fontWeight={600}>
              12/08/2002
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <LoadingButton
          loading={loading}
          size="small"
          color="warning"
          sx={{
            textTransform: "none",
            fontWeight: 600,
            fontSize: "1.3rem",
            padding: "5px 20px",
          }}
          onClick={handlePublishResume}
        >
          Publish
        </LoadingButton>
        <LoadingButton
          loading={loading}
          size="small"
          color="error"
          sx={{
            textTransform: "none",
            fontWeight: 600,
            fontSize: "1.3rem",
            padding: "5px 20px",
          }}
          onClick={handleDeleteResume}
        >
          Delete
        </LoadingButton>
      </CardActions>
    </Card>
  );
};

export default DashboardCard;
