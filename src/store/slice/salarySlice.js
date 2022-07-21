import { createSlice } from "@reduxjs/toolkit";

const salarySlice = createSlice({
  name: "salary-slice",
  initialState: {
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
    }
  },
});

export const salaryAction = salarySlice.actions;
export default salarySlice.reducer;
