import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalDetails: {
    name: "",
    summary: "",
  },
  loading: false,
  contact: {
    email: "",
    number: "",
    city: "",
    country: "",
    linkedin: "",
    github: "",
    instagram: "",
    facebook: "",
    otherSocialMedia: [],
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
    setPersonalDetails: (state, action) => {
      if (action.payload) {
        state.personalDetails = { ...action.payload };
      }
    },

    setContactDetails: (state, action) => {
      if (action.payload) {
        state.contactDetails = { ...action.payload };
      }
    },
    setResume: (state, action) => {
      return { ...action.payload };
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
export const {
  setPersonalDetails,
  setContactInfo,
  setResume,
  setContactDetails,
} = resumeSlice.actions;

export default resumeSlice.reducer;

export const getPersonalDetails = (state) => state.resume.personalDetails;
export const getContactDetails = (state) => state.resume.contactDetails;
