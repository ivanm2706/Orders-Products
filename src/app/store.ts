import { configureStore } from "@reduxjs/toolkit";
import { ordersSlice } from "../feachers/ordersReduser";
import { productsSlice } from "../feachers/productsReduser";
import { searchSlice } from "../feachers/searchReduser";

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    orders: ordersSlice.reducer,
    products: productsSlice.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
