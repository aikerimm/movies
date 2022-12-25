import { createSlice } from '@reduxjs/toolkit';

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
    moviesLoaded: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const fetchMovies = ({
  query,
  genre,
  sortType,
  sortDirection,
  page,
}) => {
  process.stderr.write('in fetch movies \n');
  let offset = (page ? page - 1 : 0) * 12;
  let url =
    'http://localhost:4000/movies?limit=12&offset=' +
    offset +
    (sortType ? '&sortBy=' + sortType + '&sortOrder=' + sortDirection : '') +
    (genre && genre !== 'All' ? '&filter=' + genre : '') +
    (query ? '&search=' + query : '');
  process.stderr.write('url' + url + '\n');
  const response = global.syncRequest('GET', url);
  const data = JSON.parse(response.getBody('utf8'));
  return data;
};

export const fetchMovie = (movieId) => {
  const response = global.syncRequest('GET', 'http://localhost:4000/movies/' + movieId);
  process.stderr.write('movie response status' + response.status + '\n');
  const data = JSON.parse(response.getBody('utf8'));
  process.stderr.write('movie response' + JSON.stringify(data) + '\n');
  return data;
};

export const getSelectedMovie = (state) => {
  return state.movies.selectedMovie;
};

export const getMoviesData = (state) => {
  return state.movies.data;
};

export default moviesSlice.reducer;
export const { movieSelected } = moviesSlice.actions;
