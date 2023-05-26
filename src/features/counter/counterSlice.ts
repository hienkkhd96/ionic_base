import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import storage from "../storage";
export const getCounter = createAsyncThunk(
  "counter/getCounter",
  async (action) => {
    const response = await storage.get("counter");
    return response;
  }
);
export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
      storage.set("counter", state.value);
    },
    increment: (state) => {
      state.value += 1;
      storage.set("counter", state.value);
    },
    decrement: (state) => {
      state.value -= 1;
      storage.set("counter", state.value);
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
      storage.set("counter", state.value);
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getCounter.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setValue } =
  counterSlice.actions;
export default counterSlice.reducer;
