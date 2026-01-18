import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },

  reducers: {
    addToggleGPT: (state) => {
      state.showGptSearch = !state.showGptSearch
    },
  },
});
export const { addToggleGPT } = gptSlice.actions;
export default gptSlice.reducer;
