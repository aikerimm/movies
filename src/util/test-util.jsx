import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice.jsx';
import { Provider } from 'react-redux';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

export const testMovie = {
  id: 123,
  title: 'Zootopia',
  vote_average: 9.8,
  runtime: 120,
  genres: ['Drama', 'Comedy'],
  release_date: '1994-01-01',
  overview: 'Lorem Ipsum Some',
  poster_path: '',
};

export const wrapWithReduxAndRouter = (component, initialPath) => {
  const testStore = configureStore({
    reducer: { movies: moviesReducer },
    preloadedState: {
      movies: {
        data: { totalAmount: 1, data: [testMovie], offset: 0, limit: 12 },
        totalAmount: 0,
      },
    },
  });

  const testFetchMovie = createAsyncThunk('movies/fetchMovie', async () => {
    return Promise.resolve(testMovie);
  });

  const testFetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
    return Promise.resolve([testMovie]);
  });

  const testLoader = () => {
    return {
      moviesThunk: testFetchMovies,
      movieThunk: testFetchMovie,
    };
  };

  const testRouter = createMemoryRouter(
    [
      {
        path: '/search',
        element: component,
        loader: testLoader,
      },
    ],
    {
      initialEntries: ['/', initialPath],
      initialIndex: 1,
    }
  );
  const wrappedComponent = (
    <Provider store={testStore}>
      <RouterProvider router={testRouter}></RouterProvider>
    </Provider>
  );
  return [wrappedComponent, testRouter];
};
