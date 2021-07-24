import { configureStore } from "@reduxjs/toolkit";
import purchaseSlice from "./purchase-slice";

export const store = configureStore({
  reducer: {
    purchase: purchaseSlice.reducer,
  },
});
