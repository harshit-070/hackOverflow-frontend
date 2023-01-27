import { List, ListItem, ListItemButton } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { getCustomizedSectionsDetails } from "../../../../../feature/resumeSlice";

const ShowSections = ({ selectSection }) => {
  const customizedSections = useSelector((state) =>
    getCustomizedSectionsDetails(state)
  );

  return (
    <>
      <h1>Customized Section</h1>
      {customizedSections.map((section) => {
        return (
          <List
            onClick={() => {
              selectSection(section._id, section.title);
            }}
          >
            <ListItemButton>
              <ListItem>&nbsp;&nbsp;{section.title}</ListItem>
            </ListItemButton>
          </List>
        );
      })}
    </>
  );
};

export default ShowSections;
