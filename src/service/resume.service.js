import { apiSlice } from "./api";

export const UserApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createResume: builder.mutation({
      query: (body) => ({
        url: `/resume/create`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Dashboard"],
    }),

    getResume: builder.query({
      query: (resume_id) => ({
        url: `/resume/fetch/${resume_id}`,
        method: "GET",
      }),
      providesTags: ["Resume"],
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

    getProjectsInfo: builder.query({
      query: (resume_id) => ({
        url: `/resume/project/${resume_id}`,
        method: "GET",
      }),
      providesTags: ["Project"],
    }),

    updateProjectsInfo: builder.mutation({
      query: (body) => ({
        url: `/resume/project`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Project", "Resume"],
    }),

    getSkillsInfo: builder.query({
      query: (resume_id) => ({
        url: `/resume/skills/${resume_id}`,
        method: "GET",
      }),
      providesTags: ["Skills"],
    }),

    updateSkillsInfo: builder.mutation({
      query: (body) => ({
        url: `/resume/skills`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Skills", "Resume"],
    }),
    getAchievementsInfo: builder.query({
      query: (resume_id) => ({
        url: `/resume/achievements/${resume_id}`,
        method: "GET",
      }),
      providesTags: ["Achievement"],
    }),

    updateAchievementsInfo: builder.mutation({
      query: (body) => ({
        url: `/resume/achievements`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Achievement", "Resume"],
    }),

    addCustomizedSection: builder.mutation({
      query: (body) => ({
        url: `/resume/customized/add`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["CustomizedSections", "Resume"],
    }),

    getCustomizedSections: builder.query({
      query: (resume_id) => ({
        url: `/resume/customized/${resume_id}`,
        method: "GET",
      }),
      providesTags: ["CustomizedSections"],
    }),

    updateCustomizedSections: builder.mutation({
      query: (body) => ({
        url: `/resume/customized`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["CustomizedSections", "Resume"],
    }),
    updateCustomizedTitleSections: builder.mutation({
      query: (body) => ({
        url: `/resume/customized/title`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["CustomizedSections", "Resume"],
    }),
    deleteCustomizedSections: builder.mutation({
      query: (body) => ({
        url: `/resume/customized`,
        method: "DELETE",
        body,
      }),
      invalidatesTags: ["CustomizedSections", "Resume"],
    }),

    updateResume: builder.mutation({
      query: (body) => ({
        url: "/resume",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Dashboard", "Resume", "BasicDetails"],
    }),

    deleteResume: builder.mutation({
      query: ({ resume_id }) => ({
        url: `/resume/${resume_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Dashboard"],
    }),

    getBasicDetails: builder.query({
      query: (resume_id) => ({
        url: `/resume/basic/${resume_id}`,
        method: "GET",
      }),
      providesTags: ["BasicDetails"],
    }),

    getUserResume: builder.query({
      query: ({ username, resume_name }) => ({
        url: `/resume/get/${username}/${resume_name}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateResumeMutation,
  useLazyGetResumeQuery,
  useLazyGetPersonalInfoQuery,
  useUpdatePersonalInfoMutation,
  useLazyGetContactInfoQuery,
  useUpdateContactInfoMutation,
  useLazyGetEducationInfoQuery,
  useUpdateEducationInfoMutation,
  useLazyGetExperienceInfoQuery,
  useUpdateExperienceInfoMutation,
  useLazyGetProjectsInfoQuery,
  useUpdateProjectsInfoMutation,
  useLazyGetSkillsInfoQuery,
  useUpdateSkillsInfoMutation,
  useLazyGetAchievementsInfoQuery,
  useUpdateAchievementsInfoMutation,
  useAddCustomizedSectionMutation,
  useLazyGetCustomizedSectionsQuery,
  useUpdateCustomizedSectionsMutation,
  useUpdateCustomizedTitleSectionsMutation,
  useDeleteCustomizedSectionsMutation,
  useUpdateResumeMutation,
  useDeleteResumeMutation,
  useLazyGetBasicDetailsQuery,
  useLazyGetUserResumeQuery,
} = UserApi;
