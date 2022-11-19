import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "./reducers/hello.reducer";

export const store = configureStore({
  reducer: {
    hello: helloReducer,
  },
});
