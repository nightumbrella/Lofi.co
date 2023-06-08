import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bg: "",
  allBg: [],
};

const BackgroundProvider = createSlice({
  name: "background",
  initialState,
  reducers: {},
});

export default BackgroundProvider.reducer;
export const {} = BackgroundProvider.actions;
