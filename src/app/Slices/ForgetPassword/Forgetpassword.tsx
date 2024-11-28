import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Forgetpassword {
  email: string;

}

const initialState: Forgetpassword = {
  email: "",
  
};

// Create a slice for Login  form.
const loginSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    setFormDataLogin: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      const { name, value } = action.payload;
      state[name as keyof Forgetpassword] = value;
    },
  },
});

export const { setFormDataLogin } = loginSlice.actions;

export default loginSlice.reducer;
