import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  counter: 0,
  showCounter: true
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase(state) {
      state.counter++;
    },
    decrease(state) {
      state.counter--;
    },
    increament(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});
export const counterAction = counterSlice.actions;
export default counterSlice.reducer;
