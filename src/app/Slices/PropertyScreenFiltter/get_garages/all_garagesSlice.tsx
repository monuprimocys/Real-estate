import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface get_all_garages_State {
  garages: string;
}

const initialState: get_all_garages_State = {
  garages: "",
};

// Create a slice for Login  form.
const get_all_garages_Slice = createSlice({
  name: "get_all_garages",
  initialState,
  reducers: {
    set_all_garages: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      const { name, value } = action.payload;
      state[name as keyof get_all_garages_State] = value;
    },
  },
});

export const { set_all_garages } = get_all_garages_Slice.actions;

export default get_all_garages_Slice.reducer;
