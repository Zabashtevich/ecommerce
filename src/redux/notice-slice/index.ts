import { createSlice } from "@reduxjs/toolkit";

export interface InitialStateType {
  visible: boolean;
  message: string | null;
  running: boolean;
  id: number;
}

const initialState = { visible: false, message: null, id: 1, running: false } as InitialStateType;

const noticeSlice = createSlice({
  name: "notice",
  initialState,
  reducers: {
    closeNotice: (state) => {
      state.running = false;
      state.message = null;
      state.visible = false;
    },
    animStart: (state) => {
      state.running = true;
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

export const { closeNotice, animStart } = noticeSlice.actions;

export default noticeSlice;
