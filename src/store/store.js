import { configureStore } from "@reduxjs/toolkit";
import managerReducer from "./manager/managerSlice";

export const store = configureStore({
  reducer: {
    manager: managerReducer,
  },
});
