import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BACKEND}/api/v1`,
    mode: "cors",
    credentials: "include",
    // mode: "cors",
  }),
  tagTypes: [
    "Personal",
    "Contact",
    "Education",
    "Experience",
    "Achievement",
    "Skills",
    "Project",
    "CustomizedSections",
    "Resume",
    "Dashboard",
    "BasicDetails",
  ],
  endpoints: (builder) => ({}),
});
