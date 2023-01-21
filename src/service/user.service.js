import { apiSlice } from "./api";

export const UserApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendOTP: builder.query({
      query: (email) => ({
        url: `/user/sendOTP?email=${email}`,
        method: "GET",
      }),
    }),
    signupUser: builder.mutation({
      query: (body) => ({
        url: "/user/signup",
        method: "POST",
        body,
      }),
    }),

    googleRedirectURL: builder.query({
      query: () => ({
        url: "/user/google",
        method: "GET",
      }),
    }),
    githubRedirectURL: builder.query({
      query: () => ({
        url: "/user/github",
        method: "GET",
      }),
    }),

    googleAuth: builder.mutation({
      query: (code) => ({
        url: `/user/google/auth?code=${code}`,
        method: "POST",
      }),
    }),
    githubAuth: builder.mutation({
      query: (code) => ({
        url: `/user/github/auth?code=${code}`,
        method: "POST",
      }),
    }),

    login: builder.mutation({
      query: (body) => ({
        url: "/user/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useLazySendOTPQuery,
  useSignupUserMutation,
  useLazyGoogleRedirectURLQuery,
  useLazyGithubRedirectURLQuery,
  useGoogleAuthMutation,
  useGithubAuthMutation,
  useLoginMutation,
} = UserApi;
