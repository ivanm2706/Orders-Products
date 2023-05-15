import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../types/Order";
import { Product } from "../types/Product";
import { orders, products } from "../utils/app";

type InitialState = {
  orders: Order[],
  activeOrder: null | Order;
  products: Product[],
  activeProducts: Product[],
};

const initialState: InitialState = {
  orders,
  activeOrder: null,
  products,
  activeProducts: [],
};

export const ordersSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setActiveOrder(state, action: PayloadAction<null | Order>) {
      state.activeOrder = action.payload;

      if (action.payload) {
        state.activeProducts = state.products.filter(product => {
          return product.order === action.payload?.id;
        });
      } else {
        state.activeProducts = [];
      }

      return state;
    },
    removeProductOrder(state, action: PayloadAction<number>) {
      state.products = state.products.filter(product => {
        return product.id !== action.payload;
      })

      return state;
    },
    removeOrder(state, action: PayloadAction<number>) {
      state.orders = state.orders.filter(order => {
        return order.id !== action.payload;
      })

      return state;
    }
  },
});

export const { setActiveOrder, removeProductOrder, removeOrder } = ordersSlice.actions;
