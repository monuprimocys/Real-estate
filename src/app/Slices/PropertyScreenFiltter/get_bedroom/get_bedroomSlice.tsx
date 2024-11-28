import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface get_bedroom_State {
  bedroom: string;
}

const initialState: get_bedroom_State = {
  bedroom: "",
};

// Create a slice for Login  form.
const get_bedroom_Slice = createSlice({
  name: "get_bedroom",
  initialState,
  reducers: {
   set_get_bedroom: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      const { name, value } = action.payload;
      state[name as keyof get_bedroom_State] = value;
    },
  },
});

export const { set_get_bedroom} = get_bedroom_Slice.actions;

export default get_bedroom_Slice.reducer;
