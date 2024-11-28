import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface get_property_type_State {
  property_types: string;
}

const initialState: get_property_type_State = {
  property_types: "",
};

// Create a slice for Login  form.
const get_property_type_Slice = createSlice({
  name: "get_property_type",
  initialState,
  reducers: {
    set_get_property_type: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      const { name, value } = action.payload;
      state[name as keyof get_property_type_State] = value;
    },
  },
});

export const { set_get_property_type } = get_property_type_Slice.actions;

export default get_property_type_Slice.reducer;
