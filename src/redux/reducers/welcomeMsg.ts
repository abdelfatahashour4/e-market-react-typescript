import { createSlice } from "@reduxjs/toolkit";

const welcomeMsg = createSlice({
  name: "welcomeMsg",
  initialState: "",
  reducers: {
    setWelcomeMsg: (state, action) => {
      return action.payload;
    },
  },
});

export const { setWelcomeMsg } = welcomeMsg.actions;

export default welcomeMsg.reducer;
