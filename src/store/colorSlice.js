import { createSlice } from "@reduxjs/toolkit";
const persistedColorVal = localStorage.getItem("color");
const initialState = {
  color: persistedColorVal || "",
};
const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    color: (state, action) => {
      state.color = action.payload;
      console.log(state.color);
    },
  },
});

export const { color } = colorSlice.actions;

export default colorSlice.reducer;
