import { configureStore } from "@reduxjs/toolkit";
import ScreenReducer from "./ScreenSizeSlice";

export const store = configureStore({
  reducer: {
    screen: ScreenReducer,
  }
});