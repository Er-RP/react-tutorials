/* Slice is an collection of the reducer logic and actions for a single feature in app*/

import { createSlice } from "@reduxjs/toolkit";

/* Initial state of the counter */

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  /* reducers contains logics */
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    dynamicAction: (state, action) => {
      const DA = {
        inc: state.count + action.payload.amount,
        dec: state.count - action.payload.amount,
        default: 0,
      };
      state.count = DA[action.payload.operation] || DA["default"];
    },
  },
});

/* actions */
export const { increment, decrement, reset, incrementByAmount, dynamicAction } =
  counterSlice.actions;

/* reducers */

export default counterSlice.reducer;
