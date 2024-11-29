/* eslint-disable react-refresh/only-export-components */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ForgetPasswordState {
  email: string;
  
}

const initialState: ForgetPasswordState = {
  email: "",
 
};

// Create a slice for ForgetPasswo  form.
const ForgetPasswoSlice = createSlice({
  name: "ForgetPassword",
  initialState,
  reducers: {
    setFormDataForgetPassword: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      const { name, value } = action.payload;
      state[name as keyof ForgetPasswordState] = value;
    },
  },
});

export const { setFormDataForgetPassword } = ForgetPasswoSlice.actions;

export default ForgetPasswoSlice.reducer;
