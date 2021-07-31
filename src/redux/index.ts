import { configureStore } from "@reduxjs/toolkit";
import noticeSlice from "./notice-slice";
import sidebarSlice from "./sidebar-slice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
    notice: noticeSlice.reducer,
  },
});
