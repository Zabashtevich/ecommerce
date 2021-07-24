import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IProduct } from "../../interfaces/product";

type InitialStateType = {
  description: null | string[];
  images: null | string[];
  price: null | string;
  size: null | string;
  name: null | string;
  id: null | string;
};

interface IPurchase extends IProduct {
  size: string;
}

const initialState = {
  description: null,
  images: null,
  price: null,
  size: null,
  name: null,
  id: null,
} as InitialStateType;

const purchaseSlice = createSlice({
  name: "purchase",
  initialState,
  reducers: {
    addProduct: (state, { payload }: PayloadAction<IPurchase>) => {
      state = payload;
    },
  },
});

export default purchaseSlice;

export const { addProduct } = purchaseSlice.actions;
