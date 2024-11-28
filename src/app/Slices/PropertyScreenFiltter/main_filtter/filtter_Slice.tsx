import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState= {
 

};

const get_filtter_Slice = createSlice({
  name: "get_filtter",
  initialState,
  reducers: {
   
    update_multiple_filters: (
      state,
      action: PayloadAction<Partial>
    ) => {
      Object.assign(state, action.payload);
    },
    reset_filters: () => initialState,
  },
});

export const {  update_multiple_filters, reset_filters } =
  get_filtter_Slice.actions;

export default get_filtter_Slice.reducer;
