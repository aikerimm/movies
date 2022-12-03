import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice.jsx';

export default configureStore({
  reducer: {
    movies: moviesReducer
  }
});