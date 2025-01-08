import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "./headerSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    header: headerSlice,
    chat: chatSlice,
  },
});

export default store;
