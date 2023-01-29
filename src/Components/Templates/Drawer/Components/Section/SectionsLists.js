import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Delete, Edit, Widgets } from "@mui/icons-material";
import { getCustomizedSectionsDetails } from "../../../../../feature/resumeSlice";
import {
  useDeleteCustomizedSectionsMutation,
  useUpdateCustomizedTitleSectionsMutation,
} from "../../../../../service/resume.service";
import { useParams } from "react-router-dom";
import { toastError, toastSuccess } from "../../../../../utils/toastMessage";

const ShowSections = ({ selectSection }) => {
  const customizedSections = useSelector((state) =>
    getCustomizedSectionsDetails(state)
  );
  const [name, setName] = useState(" ");
  const [isEditing, setIsEditing] = useState(false);
  const { resume_id } = useParams();

  const [deleteSection, deleteSectionResult] =
    useDeleteCustomizedSectionsMutation();

  const [updateSectionTitle, updateSectionTitleResult] =
    useUpdateCustomizedTitleSectionsMutation();

  const handleDeleteSection = (_id) => {
    deleteSection({ resume_id, _id });
  };
  const handleEditSectionTitle = (_id) => {
    setIsEditing(false);
    updateSectionTitle({ resume_id, _id, title: name });
  };

  useEffect(() => {
    const { isSuccess, isError, error } = updateSectionTitleResult;

    if (isSuccess) {
      toastSuccess("Title Updated");
    }

    if (isError) {
      toastError("", error);
    }
  }, [updateSectionTitleResult]);
  useEffect(() => {
    const { isSuccess, isError, error } = deleteSectionResult;

    if (isSuccess) {
      toastSuccess("Section Deleted");
    }

    if (isError) {
      toastError("", error);
    }
  }, [deleteSectionResult]);

  return (
    <>
      <h1>Customized Section</h1>
      {customizedSections.map((section, index) => {
        return (
          <List key={index}>
            <ListItemButton>
              <Widgets />
              <ListItem>
                {isEditing ? (
                  <TextField
                    size="small"
                    variant="standard"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => {
                      handleEditSectionTitle(section._id);
                    }}
                    onKeyPress={(event) => {
                      if (event.key === "Enter") {
                        handleEditSectionTitle(section._id);
                      }
                    }}
                  />
                ) : (
                  <>
                    <Typography
                      onClick={() => {
                        selectSection(section._id, section.title);
                      }}
                    >
                      &nbsp;&nbsp;{section.title}
                    </Typography>
                    <Box>
                      <IconButton
                        onClick={() => {
                          setIsEditing(true);
                          setName(section.title);
                        }}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton
                        onClick={() => handleDeleteSection(section._id)}
                      >
                        <Delete />
                      </IconButton>
                    </Box>
                  </>
                )}
              </ListItem>
            </ListItemButton>
          </List>
        );
      })}
    </>
  );
};

export default ShowSections;
