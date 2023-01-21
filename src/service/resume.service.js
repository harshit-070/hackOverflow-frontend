import { apiSlice } from "./api";

export const UserApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createResume: builder.mutation({
      query: (resume_id) => ({
        url: `/resume/create`,
        method: "POST",
      }),
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

    getProjectInfo: builder.query({
      query: (resume_id) => ({
        url: `/resume/project/${resume_id}`,
        method: "GET",
      }),
      providesTags: ["Project"],
    }),

    updateProjectInfo: builder.mutation({
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
    getAchievementInfo: builder.query({
      query: (resume_id) => ({
        url: `/resume/achievements/${resume_id}`,
        method: "GET",
      }),
      providesTags: ["Achievement"],
    }),

    updateAchievementInfo: builder.mutation({
      query: (body) => ({
        url: `/resume/achievements`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Achievement", "Resume"],
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
  useLazyGetProjectInfoQuery,
  useUpdateProjectInfoMutation,
  useLazyGetSkillsInfoQuery,
  useUpdateSkillsInfoMutation,
  useLazyGetAchievementInfoQuery,
  useUpdateAchievementInfoMutation,
} = UserApi;
