import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    showSearchBtn: false,
    inputMovieSearch: "",
    typingInput: "",
    searchResults: null, 
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
     setSearchResults: (state, action) => {
      state.searchResults = action.payload; // ✅ Add this
    },
  },
});
export const { setTypingInput, addToggleSearchBtn, submitSearch,setSearchResults } =
  searchSlice.actions;
export default searchSlice.reducer;
