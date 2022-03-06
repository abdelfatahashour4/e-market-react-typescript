import { configureStore } from "@reduxjs/toolkit";
import welcomeMsg from "./reducers/welcomeMsg";

const store = configureStore({
  reducer: {
    welcomeMsg: welcomeMsg,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: [],
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
