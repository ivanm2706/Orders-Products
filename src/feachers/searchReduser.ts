import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: string,
  active: boolean,
}

const initialState: InitialState = {
  value: '',
  active: false,
}


export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    change(state, action: PayloadAction<string>) {
      state.value = action.payload;

      return state;
    },
    setActiveSearch(state, action: PayloadAction<boolean>) {
      state.active = action.payload;

      return state;
    }
  }
});

export const { change, setActiveSearch } = searchSlice.actions;
