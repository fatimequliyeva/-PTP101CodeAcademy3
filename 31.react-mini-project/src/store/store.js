// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import { blogsApi } from "../redux/services/blogsApi";

export const store = configureStore({
  reducer: {
    [blogsApi.reducerPath]: blogsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogsApi.middleware),
});
