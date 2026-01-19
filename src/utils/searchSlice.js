import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    showSearchBtn: false,
  },

  reducers: {
    addToggleSearchBtn: (state) => {
      state.showSearchBtn = !state.showSearchBtn
    },
  },
});
export const { addToggleSearchBtn } = searchSlice.actions;
export default searchSlice.reducer;
