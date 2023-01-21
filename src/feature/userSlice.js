import { createSlice } from "@reduxjs/toolkit";

const LOCALSTORAGE_USER_KEY = "user";

export const storeUser = (user) => {
  localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(user));
};

export const fetchUser = () => {
  return localStorage.getItem(LOCALSTORAGE_USER_KEY);
};

let user = fetchUser();
if (user) {
  user = JSON.parse(user);
}

const initialState = user
  ? user
  : {
      name: "",
      email: "",
      username: "",
    };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action.payload);
      storeUser(action.payload);
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
