import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalDetails: {
    name: "",
    summary: "",
  },
  isPublished: false,
  template_number: 1,
  loading: false,
  name: "",
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
  education: [
    {
      specialization: "",
      name: "",
      percentage: "",
      location: "",
      startDate: "",
      endDate: "",
      start_month: "",
      end_month: "",
      start_year: "",
      end_year: "",
      description: "",
      category: "",
      otherCategory: "",
    },
  ],
  customziedSections: [],
  experience: [],
  projects: [],
  skills: [],
  achievements: "",
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

    setEducationDetails: (state, action) => {
      if (action.payload) {
        state.education = [...action.payload];
      }
    },

    setExperienceDetails: (state, action) => {
      if (action.payload) {
        state.experience = [...action.payload];
      }
    },

    setProjectsDetails: (state, action) => {
      if (action.payload) {
        state.projects = [...action.payload];
      }
    },

    setAchievementsDetails: (state, action) => {
      if (action.payload) {
        state.achievements = [...action.payload];
      }
    },

    setSkillsDetails: (state, action) => {
      if (action.payload) {
        state.skills = [...action.payload];
      }
    },

    setCustomizedSectionsDetails: (state, action) => {
      if (action.payload) {
        state.customziedSections = [...action.payload];
      } else {
        state.customziedSections = [];
      }
    },

    setIsPublished: (state, action) => {
      if (action.payload) {
        state.isPublished = action.payload;
      } else {
        state.isPublished = false;
      }
    },

    setTemplateNumber: (state, action) => {
      if (action.payload) {
        state.template_number = action.payload;
      }
    },

    setBasicDetails: (state, action) => {
      if (action.payload) {
        if (action.payload.name) {
          state.name = action.payload.name;
        }
        if (action.payload.template_number) {
          state.template_number = action.payload.template_number.toString();
        }
        state.isPublished = action.payload.isPublished;
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
  setEducationDetails,
  setExperienceDetails,
  setProjectsDetails,
  setSkillsDetails,
  setAchievementsDetails,
  setResume,
  setContactDetails,
  setCustomizedSectionsDetails,
  setIsPublished,
  setTemplateNumber,
  setBasicDetails,
} = resumeSlice.actions;

export default resumeSlice.reducer;

export const getPersonalDetails = (state) => state.resume.personalDetails;
export const getContactDetails = (state) => state.resume.contactDetails;
export const getEducationDetails = (state) => state.resume.education;
export const getExperienceDetails = (state) => state.resume.experience;
export const getProjectsDetails = (state) => state.resume.projects;
export const getSkillsDetials = (state) => state.resume.skills;
export const getAchievementDetails = (state) => state.resume.achievements;
export const getCustomizedSectionsDetails = (state) =>
  state.resume.customziedSections;
export const getCustomizedSectionDetails = (state, id) =>
  state.resume.customziedSections.find((section) => section._id === id);
export const getPublishDetails = (state) => state.resume.isPublished;
export const getTemplateNumberDetails = (state) => state.resume.template_number;
export const getResumeNameDetails = (state) => state.resume.name;
