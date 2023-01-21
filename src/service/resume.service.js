import { apiSlice } from "./api";

export const UserApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createResume: builder.mutation({
      query: (resume_id) => ({
        url: `/resume/create`,
        method: "POST",
      }),
    }),

    getPersonalInfo: builder.query({
      query: (resume_id) => ({
        url: `/resume/personal/${resume_id}`,
        method: "GET",
      }),
      providesTags: ["Personal"],
    }),

    updatePersonalInfo: builder.mutation({
      query: (body) => ({
        url: `/resume/personal`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Personal", "Resume"],
    }),

    getContactInfo: builder.query({
      query: (resume_id) => ({
        url: `/resume/contact/${resume_id}`,
        method: "GET",
      }),
      providesTags: ["Contact"],
    }),

    updateContactInfo: builder.mutation({
      query: (body) => ({
        url: `/resume/contact`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Contact", "Resume"],
    }),

    getEducationInfo: builder.query({
      query: (resume_id) => ({
        url: `/resume/education/${resume_id}`,
        method: "GET",
      }),
      providesTags: ["Education"],
    }),

    updateEducationInfo: builder.mutation({
      query: (body) => ({
        url: `/resume/education`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Education", "Resume"],
    }),
    getExperienceInfo: builder.query({
      query: (resume_id) => ({
        url: `/resume/experience/${resume_id}`,
        method: "GET",
      }),
      providesTags: ["Experience"],
    }),

    updateExperienceInfo: builder.mutation({
      query: (body) => ({
        url: `/resume/experience`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Experience", "Resume"],
    }),
  }),
});

export const {
  useCreateResumeMutation,
  useLazyGetPersonalInfoQuery,
  useUpdatePersonalInfoMutation,
  useLazyGetContactInfoQuery,
  useUpdateContactInfoMutation,
  useLazyGetEducationInfoQuery,
  useUpdateEducationInfoMutation,
  useLazyGetExperienceInfoQuery,
  useUpdateExperienceInfoMutation,
} = UserApi;
