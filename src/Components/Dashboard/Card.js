import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, TextField } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import {
  useDeleteResumeMutation,
  useUpdateResumeMutation,
} from "../../service/resume.service";
import { LoadingButton } from "@mui/lab";
import { toastError, toastSuccess } from "../../utils/toastMessage";
import PublishModel from "../Templates/PublishModel";
import { useSelector } from "react-redux";
import { getUserDetails } from "../../feature/userSlice";

const DashboardCard = ({ resume }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [resumeName, setResumeName] = useState(resume.name || "");
  const [publish, setPublish] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const userDetails = useSelector((state) => getUserDetails(state));
  const handleEditClick = () => {
    return navigate(`/edit/resume/${resume._id}`);
  };

  const [updateResume, updateResumeResult] = useUpdateResumeMutation();
  const [deleteResume, deleteResumeResult] = useDeleteResumeMutation();

  const handleNameChange = () => {
    if (resumeName !== resume.name) {
      updateResume({ resume_id: resume._id, name: resumeName });
    }
    setIsEditing(false);
  };

  const handleDeleteResume = () => {
    deleteResume({ resume_id: resume._id });
  };

  useEffect(() => {
    const { isLoading, isSuccess, isError, error } = updateResumeResult;

    setLoading(isLoading);

    if (isSuccess) {
      setIsEditing(false);
      toastSuccess("Resume Updated");
    }

    if (isError) {
      setIsEditing(true);
      toastError("", error);
    }
  }, [updateResumeResult]);
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
      <PublishModel
        publish={publish}
        setPublish={setPublish}
        resume_id={resume._id}
        isPublished={resume.isPublished}
        url={`${process.env.REACT_APP_FRONTEND_URL}/${userDetails.username}/${resumeName}`}
      />
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <AccountCircle />

          {isEditing ? (
            <TextField
              variant="standard"
              value={resumeName}
              onChange={(e) => setResumeName(e.target.value)}
              onBlur={() => {
                handleNameChange();
              }}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  handleNameChange();
                }
              }}
            />
          ) : (
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              onDoubleClick={() => {
                setIsEditing(true);
                setResumeName(resume.name);
              }}
            >
              &nbsp;&nbsp; {resumeName}&nbsp;&nbsp;
            </Typography>
          )}

          <LoadingButton
            loading={loading}
            onClick={handleEditClick}
            sx={{ color: "#f1c40f", fontWeight: 600, cursor: "pointer" }}
            component="span"
          >
            Edit
          </LoadingButton>
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
          onClick={() => {
            setPublish(true);
          }}
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
