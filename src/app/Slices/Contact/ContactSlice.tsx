/* eslint-disable react-refresh/only-export-components */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ContactState {
  name: string;
  email: string;
  phone: string;
  message: string;
  is_gdpr: string;
}

const initialState: ContactState = {
  email: "",
  name: "",
  phone: "",
  message: "",
  is_gdpr: "",
};

const ContactSlice = createSlice({
  name: "Contact",
  initialState,
  reducers: {
    setFormDataContact: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      const { name, value } = action.payload;
      state[name as keyof ContactState] = value;
    },
  },
});

export const { setFormDataContact } = ContactSlice.actions;

export default ContactSlice.reducer;
