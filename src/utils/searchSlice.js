import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    showSearchBtn: false,
    typingInput: "",          // ✅ ADD THIS
    inputMovieSearch: "",
    searchResults: null,
  },

  reducers: {
    addToggleSearchBtn: (state) => {
      state.showSearchBtn = !state.showSearchBtn;
    },
    setTypingInput: (state, action) => {
      state.typingInput = action.payload;
    },
    submitSearch: (state, action) => {
      state.inputMovieSearch = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const {
  addToggleSearchBtn,
  setTypingInput,
  submitSearch,
  setSearchResults,
} = searchSlice.actions;

export default searchSlice.reducer;
