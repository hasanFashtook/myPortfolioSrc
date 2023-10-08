import { createSlice } from "@reduxjs/toolkit";

const screenSizeSlice = createSlice({
  initialState: window.innerWidth,
  name: 'screenSize',
  reducers: {
    changeCurrentSize: (state, action) => {
      return action.payload;
    }
  }
});

export const { changeCurrentSize } = screenSizeSlice.actions;
export default screenSizeSlice.reducer