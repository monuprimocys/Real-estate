import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface get_sortby_options_State {
    sortby: string;
}

const initialState: get_sortby_options_State = {
    sortby: "",
};

// Create a slice for Login  form.
const get_sortby_options_Slice = createSlice({
  name: "sortby",
  initialState,
  reducers: {
    set_sortby: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      const { name, value } = action.payload;
      state[name as keyof get_sortby_options_State] = value;
    },
  },
});

export const { set_sortby } = get_sortby_options_Slice.actions;

export default get_sortby_options_Slice.reducer;
