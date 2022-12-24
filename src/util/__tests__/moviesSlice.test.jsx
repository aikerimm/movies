import { configureStore } from '@reduxjs/toolkit';
import reducer, { fetchMovie, fetchMovies, movieSelected } from '../moviesSlice';
import { testMovie } from '../test-util';

describe('tests for reducers', () => {
  test('movieSelected reducer should set selectedMovie state', () => {
    const previousState = {};
    const payload = { id: 11 };
    expect(reducer(previousState, movieSelected(payload))).toEqual({
      selectedMovie: payload,
    });
  });

  test('fetchMovie should set selectedMovie state', async () => {
    const fetchMock = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve({ id: 123, title: 'Zootopia' }),
      })
    );
    const testStore = configureStore({
      reducer: {movies: reducer},
      preloadedState: {
        movies: {
          data: { totalAmount: 1, data: [testMovie], offset: 0, limit: 12 },
          totalAmount: 1,
        },
      },
    });
    global.fetch = fetchMock;
    const fetchMovieThunk = fetchMovie(123);
    await testStore.dispatch(fetchMovieThunk);
    const state = testStore.getState();
    
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith('http://localhost:4000/movies/123');
    expect(state.movies.selectedMovie).toEqual({id: 123, title: 'Zootopia'});
  });

  test('fetchMovies should set data state', async () => {
    const fetchMock = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve({ totalAmount: 1, offset: 0, limit: 12, data: [testMovie] }),
      })
    );
    const testStore = configureStore({
      reducer: {movies: reducer},
      preloadedState: {
        movies: {
          data: { totalAmount: 1, data: [], offset: 0, limit: 12 },
          totalAmount: 1,
        },
      },
    });
    global.fetch = fetchMock;
    const fetchMovieThunk = fetchMovies({query: 'test', genre: 'Comedy', sortType: 'title', sortDirection: 'asc', page: 2});
    await testStore.dispatch(fetchMovieThunk);
    const state = testStore.getState();

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith('http://localhost:4000/movies?limit=12&offset=12&sortBy=title&sortOrder=asc&filter=Comedy&search=test');
    expect(state.movies.data).toEqual({ totalAmount: 1, data: [testMovie], offset: 0, limit: 12 });
  });
});
