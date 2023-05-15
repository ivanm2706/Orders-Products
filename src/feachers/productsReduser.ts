import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/Product";
import { products } from "../utils/app";

type InitialState = {
  products: Product[],
};

const initialState: InitialState = {
  products,
};

export const productsSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    removeProduct(state, action: PayloadAction<number>) {
      if (action.payload) {
        state.products = state.products.filter(prod => {
          return prod.id !== action.payload;
        });
      }

      return state;
    }
  },
});

export const { removeProduct } = productsSlice.actions;
