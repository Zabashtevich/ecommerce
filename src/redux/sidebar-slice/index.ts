import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPurchase } from "@src/interfaces/product";

export interface InitialStateType<T> {
  visible: boolean;
  purchases: [] & T[];
}

const initialState = {
  visible: false,
  purchases: [],
} as InitialStateType<IPurchase>;

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    addProduct: (state, { payload }: PayloadAction<IPurchase>) => {
      state.visible = true;
      state.purchases.push(payload);
    },
    openSidebar: (state) => {
      state.visible = true;
    },
    closeSidebar: (state) => {
      state.visible = false;
    },
  },
});

export default sidebarSlice;

export const { addProduct, openSidebar, closeSidebar } = sidebarSlice.actions;
