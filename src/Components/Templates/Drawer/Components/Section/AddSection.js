import React, { useEffect } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { useAddCustomizedSectionMutation } from "../../../../../service/resume.service";
import { toastError, toastSuccess } from "../../../../../utils/toastMessage";
import { useParams } from "react-router-dom";

const AddSection = ({ setSelected }) => {
  const [value, setValue] = useState("");
  const [sectionname, setsectionname] = useState("");
  const [loading, setLoading] = useState(false);

  const { resume_id } = useParams();

  const [addCustomizedSection, addCustomizedSectionResult] =
    useAddCustomizedSectionMutation();

  useEffect(() => {
    const { isLoading, isSuccess, isError, error } = addCustomizedSectionResult;
    setLoading(isLoading);

    if (isSuccess) {
      setSelected(0);
      toastSuccess("Section Added");
    }

    if (isError) {
      toastError("", error);
    }
  }, [addCustomizedSectionResult, setSelected]);

  const handleAddSection = (e) => {
    e.preventDefault();
    addCustomizedSection({ resume_id, title: sectionname, type: value });
  };

  return (
    <form onSubmit={handleAddSection}>
      <Box>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Choose Section Type
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          >
            <FormControlLabel
              value="Experience Type"
              control={<Radio />}
              label="Experience Type"
            />
            <FormControlLabel
              value="Achievement Type"
              control={<Radio />}
              label="Achievement Type"
            />{" "}
            <FormControlLabel
              value="Skill Type"
              control={<Radio />}
              label="Skill Type"
            />
          </RadioGroup>
        </FormControl>
        <TextField
          size="small"
          variant="standard"
          label="Enter Section Name"
          value={sectionname}
          onChange={(e) => setsectionname(e.target.value)}
          required
        />
        <LoadingButton loading={loading} type="submit">
          Add
        </LoadingButton>
      </Box>
    </form>
  );
};

export default AddSection;
