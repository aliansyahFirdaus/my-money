import { configureStore } from "@reduxjs/toolkit";

import salarySlice from "./slice/salarySlice";
import shoppingSlice from "./slice/shoppingSlice";

const store = configureStore({
  reducer: { salary: salarySlice, shopping: salarySlice },
});

export default store;
