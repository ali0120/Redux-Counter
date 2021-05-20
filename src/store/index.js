import { createSlice, configureStore } from "@reduxjs/toolkit";
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
const initialAuthState = {
  auth: false
};
const AuthSlice = createSlice({
  name: "Auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.auth = true;
    },
    logOut(state) {
      state.auth = false;
    }
  }
});
const store = configureStore({
  reducer: { counter: counterSlice.reducer, Auth: AuthSlice.reducer }
});
export const counterAction = counterSlice.actions;
export const authActions = AuthSlice.actions;
export default store;
