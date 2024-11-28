import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface get_all_status_State {
  status: string;
}

const initialState: get_all_status_State = {
  status: "",
};

// Create a slice for status 
const get_all_statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    set_status: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      const { name, value } = action.payload;
      state[name as keyof get_all_status_State] = value;
    },
  },
});

export const { set_status } = get_all_statusSlice.actions;

export default get_all_statusSlice.reducer;
