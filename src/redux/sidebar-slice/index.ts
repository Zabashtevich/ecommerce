import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialStateType, NewSizeType, NewAmountType } from "./types";
import { IPurchase } from "@src/interfaces/product";

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
      const existedElement = state.purchases.find((item) => item.id === payload.id);
      if (existedElement) {
        state.purchases.map((item) =>
          item.id === existedElement.id
            ? ((item.price = (Number(item.price) + Number(payload.price)).toString()), item.amount++)
            : item,
        );
      } else {
        state.purchases.push(payload);
      }

      state.totalPrice = state.purchases.reduce((acc, curr) => {
        acc += Number(curr.price);
        return acc;
      }, 0);
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

      if (purchase!.amount === 1) {
        state.purchases.splice(
          state.purchases.findIndex((item) => item.id === payload.id),
          1,
        );
      } else {
        state.purchases.map((item) => (item.id === purchase!.id ? { ...item, amount: item.amount-- } : item));
      }
      state.totalPrice = state.totalPrice - Number(purchase!.price);
    },

    updateState: (state, { payload }: PayloadAction<{ purchases: IPurchase[]; totalPrice: number }>) => {
      state.purchases.push(...payload.purchases);
      state.totalPrice = payload.totalPrice;
    },
  },
});

export default sidebarSlice;

export const { add, open, close, increase, decrease, changeSize, updateState } = sidebarSlice.actions;
