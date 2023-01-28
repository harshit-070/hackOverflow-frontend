import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Delete, Edit, Widgets } from "@mui/icons-material";
import { getCustomizedSectionsDetails } from "../../../../../feature/resumeSlice";

const ShowSections = ({ selectSection }) => {
  const customizedSections = useSelector((state) =>
    getCustomizedSectionsDetails(state)
  );
  const [name, setName] = useState("");
  return (
    <>
      <h1>Customized Section</h1>
      {customizedSections.map((section, index) => {
        return (
          <List
            onClick={() => {
              selectSection(section._id, section.title);
            }}
            key={index}
          >
            <ListItemButton>
              <Widgets />
              <ListItem>
                &nbsp;&nbsp;{section.title}
                {/* <TextField
                  size="small"
                  variant="standard"
                  onChange={(e) => setName(e.target.value)}
                /> */}
                <Box>
                  <IconButton>
                    <Edit />
                  </IconButton>
                  <Delete />
                </Box>
              </ListItem>
            </ListItemButton>
          </List>
        );
      })}
    </>
  );
};

export default ShowSections;
