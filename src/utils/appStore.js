import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import uiReducer from "./uiSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    ui: uiReducer,
  },
});

export default appStore;
