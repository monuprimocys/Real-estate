import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
  email: string;
  password: string;
}

const initialState: LoginState = {
  email: "",
  password: "",
};

// Create a slice for Login  form.
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setFormDataLogin: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      const { name, value } = action.payload;
      state[name as keyof LoginState] = value;
    },
  },
});

export const { setFormDataLogin } = loginSlice.actions;

export default loginSlice.reducer;
