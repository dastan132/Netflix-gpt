import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
  name: "search",
  initialState: {
    showSearchBtn: false,
    inputMovieSearch: "",
    typingInput: "",
  },

  reducers: {
    setTypingInput: (state, action) => {
      state.typingInput = action.payload;
    },
    addToggleSearchBtn: (state) => {
      state.showSearchBtn = !state.showSearchBtn;
    },
    submitSearch: (state, action) => {
      state.inputMovieSearch = action.payload;
    },
  },
});
export const { setTypingInput, addToggleSearchBtn, submitSearch } =
  searchSlice.actions;
export default searchSlice.reducer;
