import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type themeType = {
  mode: "dark" | "light",
}

const initialState: themeType = {
  mode: "dark",
};

export const globalSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setColorMode: (state) => {
      console.log('oie')
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setColorMode } = globalSlice.actions;

export default globalSlice.reducer;
