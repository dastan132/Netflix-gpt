// In your UI slice (e.g., uiSlice.js)
import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isDropdownOpen: false,
  },
  reducers: {
    setDropdownOpen: (state, action) => {
      state.isDropdownOpen = action.payload;
    },
  },
});

export const { setDropdownOpen } = uiSlice.actions;
export default uiSlice.reducer;