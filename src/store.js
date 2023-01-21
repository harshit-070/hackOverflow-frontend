import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import resumeReducer from "./feature/resumeSlice";
import userReducer from "./feature/userSlice";
import { apiSlice } from "./service/api";

export const store = configureStore({
  reducer: {
    resume: resumeReducer,
    user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);
