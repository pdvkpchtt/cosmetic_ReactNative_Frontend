import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newProduct = action.payload;
      const cartSameItemCheck = state.products.find(
        (i) => i.name === newProduct.name
      );

      if (cartSameItemCheck) {
        state.products = state.products.filter(
          (i) => i.name !== action.payload.name
        );
      } else {
        state.products.push(action.payload);
      }
    },
  },
});
