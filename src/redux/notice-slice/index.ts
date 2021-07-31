import { createSlice } from "@reduxjs/toolkit";

export interface InitialStateType {
  visible: boolean;
  message: string | null;
  id: number;
}

const initialState = { visible: false, message: null, id: 1 } as InitialStateType;

const noticeSlice = createSlice({
  name: "notice",
  initialState,
  reducers: {
    closePopup: (state) => {
      state.message = null;
      state.visible = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("sidebar/add", (state) => {
      state.message = "Product added to card";
      state.visible = true;
      state.id++;
    });
    builder.addCase("sidebar/decrease", (state) => {
      state.message = "Product amount decreased";
      state.visible = true;
      state.id++;
    });
  },
});

export const { closePopup } = noticeSlice.actions;

export default noticeSlice;
