import { createSlice } from "@reduxjs/toolkit";

const salarySlice = createSlice({
  name: "salary-slice",
  initialState: {
    base: 0,
    extras: [],
    kredit: []
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
    getKreditSalary(state, action) {
      function objToArr(data) {
        return Object.keys(data).map((key) => {
          return { id: key, amount: data[key] };
        });
      }

      const kredit = action.payload ? objToArr(action.payload) : [];
      state.kredit = kredit;
    },
  },
});

export const salaryAction = salarySlice.actions;
export default salarySlice.reducer;
