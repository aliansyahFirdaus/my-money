import { configureStore } from "@reduxjs/toolkit";

import salarySlice from "./slice/salarySlice";

const store = configureStore({
  reducer: { salary: salarySlice },
});

export default store