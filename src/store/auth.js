import { createSlice } from "@reduxjs/toolkit";
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
export const authActions = AuthSlice.actions;
export default AuthSlice.reducer;
