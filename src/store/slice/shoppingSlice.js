import { createSlice } from "@reduxjs/toolkit";

const shoppingSlice = createSlice({
  name: "shopping-slice",
  initialState: {
    shopList: [],
  },
  reducers: {
    getShopList(state, action) {
      function objToArr(data) {
        return Object.keys(data).map((key) => {
          return { id: key, ...data[key] };
        });
      }

      const shopList = action.payload ? objToArr(action.payload) : [];

      state.shopList = shopList;
    },
  },
});

export const shoppingAction = shoppingSlice.actions;
export default shoppingSlice.reducer;
