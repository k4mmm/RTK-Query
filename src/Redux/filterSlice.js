import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filter: (_, { payload }) => payload,
  },
});

export const { filter } = counterSlice.actions;
export default counterSlice.reducer;
