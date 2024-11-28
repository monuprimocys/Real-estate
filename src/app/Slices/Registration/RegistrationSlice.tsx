import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RegistrationState {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
  mobile: string;
}

const initialState: RegistrationState = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirm_password: "",
  mobile: "",
};

// Create a slice for registration form.
const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    setFormDataRegistration: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      const { name, value } = action.payload;
      state[name as keyof RegistrationState] = value;
    },
  },
});

export const { setFormDataRegistration } = registrationSlice.actions;

export default registrationSlice.reducer;
