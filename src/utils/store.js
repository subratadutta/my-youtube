import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./hamburgerSlice";

const store = configureStore({
  reducer: {
    hamburger: hamburgerSlice,
  },
});

export default store;
