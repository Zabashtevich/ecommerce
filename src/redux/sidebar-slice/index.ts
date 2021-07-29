import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialStateType, NewSizeType, NewAmountType } from "./types";
import { IPurchase } from "@src/interfaces/product";
import { IProduct } from "../../interfaces/product";

const initialState = {
  visible: false,
  purchases: [],
  totalPrice: 0,
} as InitialStateType<IPurchase>;

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<IPurchase>) => {
      state.totalPrice = state.purchases.reduce((acc, curr) => {
        acc += Number(curr.price);
        console.log(acc);
        return acc;
      }, 0);

      state.purchases.push(payload);
      state.visible = true;
    },
    open: (state) => {
      state.visible = true;
    },
    close: (state) => {
      state.visible = false;
    },
    changeSize: (state, { payload }: PayloadAction<NewSizeType>) => {
      state.purchases.map((item) => {
        item.id === payload.id ? (item.size = payload.size) : item;
      });
    },
    increase: (state, { payload }: PayloadAction<NewAmountType>) => {
      const purchase = state.purchases.find((item) => item.id === payload.id);

      state.totalPrice += Number(purchase!.price);
      state.purchases.map((item) => (item.id === purchase!.id ? { ...item, amount: item.amount++ } : item));
    },
    decrease: (state, { payload }: PayloadAction<NewAmountType>) => {
      const purchase = state.purchases.find((item) => item.id === payload.id);

      state.totalPrice -= Number(purchase!.price);
      state.purchases.map((item) => (item.id === purchase!.id ? { ...item, amount: item.amount-- } : item));
    },
    remove: (state, { payload }: PayloadAction<{ id: string }>) => {
      state.purchases.splice(
        state.purchases.findIndex((item) => item.id === payload.id),
        1,
      );
    },
  },
});

export default sidebarSlice;

export const { add, open, close, increase, decrease, remove, changeSize } = sidebarSlice.actions;
