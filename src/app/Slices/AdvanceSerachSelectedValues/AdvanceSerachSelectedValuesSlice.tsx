/* eslint-disable react-refresh/only-export-components */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedLocationMain: "",
  selectedLocationId: '',
  selectedBedroom: "",
  selectedbathrooms: "",
  selectedPropertyType: "",
  selectedSortby: "",
  selectedGarage: "",
};

const AdvanceSerachSelectedValuesSlice = createSlice({
  name: "AdvanceSerachSelectedValuesSlice",
  initialState,
  reducers: {
    setSelectedLocationMain: (state, action) => {
      state.selectedLocationMain = action.payload;
    },
    setSelectedBedroom: (state, action) => {
      state.selectedBedroom = action.payload;
    },
    setSelectedBathrooms: (state, action) => {
      state.selectedbathrooms = action.payload;
    },
    setSelectedPropertyType: (state, action) => {
      state.selectedPropertyType = action.payload;
    },
    setSelectedSortby: (state, action) => {
      state.selectedSortby = action.payload;
    },
    setSelectedGarage: (state, action) => {
      state.selectedGarage = action.payload;
    },
  },
});

export const {
  setSelectedLocationMain,
  setSelectedBedroom,
  setSelectedBathrooms,
  setSelectedPropertyType,
  setSelectedSortby,
  setSelectedGarage,
} = AdvanceSerachSelectedValuesSlice.actions;

export default AdvanceSerachSelectedValuesSlice.reducer;
