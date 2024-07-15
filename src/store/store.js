import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./colorSlice";
import localStorageMiddleware from "./idSlice";

const store = configureStore({
  reducer: {
    color: colorReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
console.log(store.getState().color);

export default store;
