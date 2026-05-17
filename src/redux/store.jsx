import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./reducer";

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;
