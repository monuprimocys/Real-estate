import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VerifyOptState {
  email: string;
  otp: string;
}

const initialState: VerifyOptState = {
  email: "",
  otp: "",
};

const VerifyOptSlice = createSlice({
  name: "VerifyOptSlice",
  initialState,
  reducers: {
    setFormDataVerifyOpt: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      const { name, value } = action.payload;
      state[name as keyof VerifyOptState] = value;
    },
  },
});

export const { setFormDataVerifyOpt } = VerifyOptSlice.actions;
export default VerifyOptSlice.reducer;
