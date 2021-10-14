import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./contactsApi";
import filter from "./filterSlice";

const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
