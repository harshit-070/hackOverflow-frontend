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
  }),
});

export const { useLazySendOTPQuery, useSignupUserMutation } = UserApi;
