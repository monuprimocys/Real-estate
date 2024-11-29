/* eslint-disable react-refresh/only-export-components */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ResetPasswordState {
  email: string;
  password: string;
  cnf_pass: string;
}

const initialState: ResetPasswordState = {
  email: "", 
  password: "",
  cnf_pass: "",
};

const ResetPasswordSlice = createSlice({
  name: "resetPassword",
  initialState,
  reducers: {
    setResetPassword: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      const { name, value } = action.payload;
      state[name as keyof ResetPasswordState] = value;
    },
  },
});

export const { setResetPassword } = ResetPasswordSlice.actions;

export default ResetPasswordSlice.reducer;
