import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "header",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleNav: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleNav } = headerSlice.actions;
export default headerSlice.reducer;
