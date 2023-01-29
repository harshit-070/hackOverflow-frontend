import { apiSlice } from "./api";

export const UserApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchDashboard: builder.query({
      query: () => ({
        url: "/dashboard",
        method: "GET",
      }),
    }),
  }),
});

export const { useLazyFetchDashboardQuery } = UserApi;
