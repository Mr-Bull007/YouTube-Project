import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "header",
  initialState: {
    isMenuOpen: true,
    searchCache: {},
  },
  reducers: {
    toggleNav: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    cacheResults: (state, action) => {
      state.searchCache = { ...state.searchCache, ...action.payload}
    }
  },
});

export const { toggleNav, cacheResults } = headerSlice.actions;
export default headerSlice.reducer;
