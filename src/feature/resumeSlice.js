import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = resumeSlice.actions;

export default resumeSlice.reducer;
