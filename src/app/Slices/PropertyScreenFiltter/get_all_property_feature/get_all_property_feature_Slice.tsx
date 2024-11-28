import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface get_all_property_feature_State {
  features: string;
}

const initialState: get_all_property_feature_State = {
  features: "",
};

// Create a slice for Login  form.
const get_all_property_feature_Slice = createSlice({
  name: "get_all_property_feature",
  initialState,
  reducers: {
    set_get_all_property_feature: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      const { name, value } = action.payload;
      state[name as keyof get_all_property_feature_State] = value;
    },
  },
});

export const { set_get_all_property_feature } = get_all_property_feature_Slice.actions;

export default get_all_property_feature_Slice.reducer;
