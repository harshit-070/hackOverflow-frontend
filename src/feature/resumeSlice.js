import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalDetails: {
    name: "",
    summary: "",
  },
  contact: {
    email: "",
    number: "",
  },
  socialMedia: {
    linkedin: "",
    github: "",
  },
  address: {
    city: "",
    country: "",
  },
};

export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setPersonalInfo: (state, action) => {
      state.personalDetails = action.payload;
    },

    setContactInfo: (state, action) => {
      state.address.city = action.payload.address?.city;
      state.address.country = action.payload.address?.country;
      state.socialMedia.linkedin = action.payload.socialMedia?.linkedin;
      state.socialMedia.github = action.payload.socialMedia?.github;
      state.contact.email = action.payload.contact?.email;
      state.contact.number = action.payload.contact?.number;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPersonalInfo, setContactInfo } = resumeSlice.actions;

export default resumeSlice.reducer;
