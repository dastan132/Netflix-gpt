import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import uiReducer from "./uiSlice";
import searchReducer from "./searchSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    ui: uiReducer,
    search: searchReducer,
  },
});

export default appStore;
