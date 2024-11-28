import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface get_all_main_location_State {
  location: string;
}

const initialState: get_all_main_location_State = {
  location: "",
};

// Create a slice for Login  form.
const get_all_main_location_Slice = createSlice({
  name: "get_all_main_location",
  initialState,
  reducers: {
    set_all_main_location: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      const { name, value } = action.payload;
      state[name as keyof get_all_main_location_State] = value;
    },
  },
});

export const { set_all_main_location } = get_all_main_location_Slice.actions;

export default get_all_main_location_Slice.reducer;
