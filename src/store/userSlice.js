import { createSlice } from "@reduxjs/toolkit";

const initialUserData = JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
  user: initialUserData,
  openLoginDialog: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    clearUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
    setOpenLoginDialog: (state, action) => {
      state.openLoginDialog = action.payload;
    },
  },
});

export const { setUser, clearUser, setOpenLoginDialog } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
