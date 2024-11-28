import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface get_bathroom_State {
  bathroom: string;
}

const initialState: get_bathroom_State = {
  bathroom: "",
};

// Create a slice for Login  form.
const get_bathroom_Slice = createSlice({
  name: "get_all_main_location",
  initialState,
  reducers: {
    set_get_bathroom: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      const { name, value } = action.payload;
      state[name as keyof get_bathroom_State] = value;
    },
  },
});

export const { set_get_bathroom } = get_bathroom_Slice.actions;

export default get_bathroom_Slice.reducer;
