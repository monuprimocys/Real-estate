import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  loginModal: boolean;
  forgotpasswordModal: boolean;
  registrationModal: boolean;
  resetPasswordModal: boolean;
  verifyOtpModal: boolean;
}

const initialState: ModalState = {
  loginModal: false,
  forgotpasswordModal: false,
  registrationModal: false,
  resetPasswordModal: false,
  verifyOtpModal: false,
};

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<keyof ModalState>) => {
      state[action.payload] = true;
    },
    hideModal: (state, action: PayloadAction<keyof ModalState>) => {
      state[action.payload] = false;
    },
 
  },
});

export const { showModal, hideModal,  } = modalSlice.actions;
export default modalSlice.reducer;
