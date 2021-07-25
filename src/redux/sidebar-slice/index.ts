import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPurchase } from "@src/interfaces/product";

export interface InitialStateType<T> {
  visible: boolean;
  purchases: T[] & [];
  totalPrice: number;
}

interface NewSizeType {
  size: string;
  newPrice: string;
}

const initialState = {
  visible: false,
  purchases: [],
  totalPrice: 0,
} as InitialStateType<IPurchase>;

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    addProduct: (state, { payload }: PayloadAction<IPurchase>) => {
      state.totalPrice = state.purchases.reduce((acc, curr) => {
        acc += Number(curr.price);
        return acc;
      }, 0);

      state.purchases.push(payload);
      state.visible = true;
    },
    openSidebar: (state) => {
      state.visible = true;
    },
    closeSidebar: (state) => {
      state.visible = false;
    },
    changeSize: (state, { payload }: PayloadAction<NewSizeType>) => {
      state.purchases.map((item) => {});
    },
  },
});

export default sidebarSlice;

export const { addProduct, openSidebar, closeSidebar } = sidebarSlice.actions;
