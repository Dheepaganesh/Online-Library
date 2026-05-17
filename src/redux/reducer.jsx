import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  loading: false,
  error: null,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    // Update the book data
    updateBookData(state, action) {
      state.books = action.payload;
    },
    // Add a new book
    addNewBook(state, action) {
      state.books.unshift(action.payload);
    },
  },
});

export const { updateBookData, addNewBook } = booksSlice.actions;

export default booksSlice.reducer;
