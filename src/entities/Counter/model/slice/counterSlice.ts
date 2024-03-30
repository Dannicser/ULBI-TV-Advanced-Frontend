import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICounterSchema } from "../types/counterSchema";
import { buildSlice } from "@/shared/lib/store/buildSlice";

const initialState: ICounterSchema = {
  value: 1,
};

export const counterSlice = buildSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    addNumber(state, number: PayloadAction<number>) {
      state.value = state.value + number.payload;
    },
  },
});

export const { actions: counterActions, reducer: counterReducer, useActions: useCounterActions } = counterSlice;
