import { createSlice } from "@reduxjs/toolkit";

const salarySlice = createSlice({
  name: "salary-slice",
  initialState: {
    total: 0,
    base: 0,
    extras: [],
  },
  reducers: {
    getBaseSalary(state, action) {
      state.base = action.payload;
    },
    getExtraSalary(state, action) {
      function objToArr(data) {
        return Object.keys(data).map((key) => {
          return { id: key, amount: data[key] };
        });
      }

      const extras = action.payload ? objToArr(action.payload) : [];
      state.extras = extras;
    },
    getTotal(state) {
      state.total = 10;
    },
  },
});

export const salaryAction = salarySlice.actions;
export default salarySlice.reducer;
