import { configureStore } from '@reduxjs/toolkit';
import books from './slices/bookSlice';

const store = configureStore({
  reducer: {
    books
  }
});

export default store;
