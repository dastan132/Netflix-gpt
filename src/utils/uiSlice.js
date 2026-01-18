
import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isDropdownOpen: false,
    langChange: "en",
  },
  reducers: {
    setDropdownOpen: (state, action) => {
      state.isDropdownOpen = action.payload;
    },
    setLanguage: (state, action) => {
      state.langChange = action.payload;
    },
  },
});

export const { setDropdownOpen, setLanguage, setLangButton } = uiSlice.actions;
export default uiSlice.reducer;
