import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  authState: false,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState(state, action) {
      state.authState = action.payload;
    },
  }
})

export const { setAuthState } = authSlice.actions;
export const selectAuthState = (state) => state.auth.authState;
export default authSlice.reducer;
