import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    data: { totalAmount: 0, data: [], offset: 0, limit: 12 },
    genre: 'All',
    status: 'initial',
    selectedMovie: null,
  },
  reducers: {
    movieSelected: (state, action) => {
      state.selectedMovie = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      state.selectedMovie = action.payload;
    });
  },
});

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async ({ query, genre, sortType, sortDirection, page }) => {
    let offset = (page ? page - 1 : 0) * 12;
    let url =
      'http://localhost:4000/movies?limit=12&offset=' +
      offset +
      (sortType ? '&sortBy=' + sortType + '&sortOrder=' + sortDirection : '') +
      (genre && genre !== 'All' ? '&filter=' + genre : '') +
      (query ? '&search=' + query : '');
    return fetch(url).then((response) => response.json());
  }
);

export const fetchMovie = createAsyncThunk(
  'movies/fetchMovie',
  async (movieId) => {
    return fetch('http://localhost:4000/movies/' + movieId).then((response) =>
      response.json()
    );
  }
);

export const getSelectedMovie = (state) => {
  return state.movies.selectedMovie;
};

export const getMoviesData = (state) => {
  return state.movies.data;
};

export default moviesSlice.reducer;
export const { movieSelected } = moviesSlice.actions;
