import { Dispatch, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl, key } from '../../constants/base';
import { State, BookState, GetBooks } from '../../models/book.type';

const initialState: BookState = {
  books: [],
  error: false,
  loading: false,
  totalCounter: 0,
  paginationIndex: 0,
  searchWord: '',
  searchCategory: 'all',
  searchSort: 'relevance',
}

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    SetBooks: (state: BookState, action: PayloadAction<any>) => {
      state.books.push(...action.payload);
    },
    SetClearBooks: (state: BookState) => {
      state.books = [];
      state.totalCounter = 0;
    },
    SetError: (state: BookState, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
    SetLoading: (state: BookState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    SetTotalCounter: (state: BookState, action: PayloadAction<number>) => {
      state.totalCounter = action.payload;
    },
    SetPaginationIndex: (state: BookState, action: PayloadAction<number>) => {
      state.paginationIndex = action.payload;
    },
    SetSearchWord: (state: BookState, action: PayloadAction<string>) => {
      state.searchWord = action.payload;
    },
    SetSearchCategory: (state: BookState, action: PayloadAction<string>) => {
      state.searchCategory = action.payload;
    },
    SetSearchSort: (state: BookState, action: PayloadAction<string>) => {
      state.searchSort = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { SetBooks, SetClearBooks, SetError, SetLoading, SetTotalCounter, SetPaginationIndex, SetSearchWord, SetSearchCategory, SetSearchSort } = bookSlice.actions;

// Selectors
export const selectBooks = (state: State) => state.books.books;
export const selectError = (state: State) => state.books.error;
export const selectLoading = (state: State) => state.books.loading;
export const selectTotalCounter = (state: State) => state.books.totalCounter;
export const selectPaginationIndex = (state: State) => state.books.paginationIndex;
export const selectSearchWord = (state: State) => state.books.searchWord;
export const selectSearchCategory = (state: State) => state.books.searchCategory;
export const selectSearchSort = (state: State) => state.books.searchSort;

// Async actions 
export const getBooks: GetBooks = (endpoint) => {
  return async (dispatch: Dispatch) => {
    dispatch(SetLoading(true));
    try{
      const res = await axios.get(baseUrl + endpoint + `&key=${key}`);
      dispatch(SetBooks(res.data.items));
      dispatch(SetTotalCounter(res.data.totalItems));
      dispatch(SetLoading(false));
    } catch {
      dispatch(SetError(true));
      dispatch(SetLoading(false));
    }
  }
};

export default bookSlice.reducer;
