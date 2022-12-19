/**
 * @jest-environment jsdom
 */

import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import MoviesList from '../MoviesList.jsx';
import moviesReducer from '../../util/moviesSlice.jsx';
import { configureStore } from '@reduxjs/toolkit';
import { testMovie } from '../../util/test-util.jsx';
import { BrowserRouter } from 'react-router-dom';

it('MovieCard renders correctly', () => {
  const testStore = configureStore({
    reducer: { movies: moviesReducer },
    preloadedState: {
      movies: {
        data: { totalAmount: 1, data: [testMovie], offset: 0, limit: 12 },
        totalAmount: 1,
      },
    },
  });

  const tree = renderer
    .create(
      <Provider store={testStore}>
        <BrowserRouter>
          <MoviesList />
        </BrowserRouter>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
