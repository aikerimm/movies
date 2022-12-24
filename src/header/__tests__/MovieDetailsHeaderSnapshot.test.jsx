/**
 * @jest-environment jsdom
 */

import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import MovieDetailsHeader from '../MovieDetailsHeader.jsx';
import moviesReducer from '../../util/moviesSlice.jsx';
import { configureStore } from '@reduxjs/toolkit';
import { testMovie } from '../../util/test-util.jsx';
import { BrowserRouter } from 'react-router-dom';

it('MovieDetailsHeader renders correctly', () => {
  const testStore = configureStore({
    reducer: { movies: moviesReducer },
    preloadedState: {
      movies: {
        selectedMovie: testMovie
      },
    },
  });

  const tree = renderer
    .create(
      <Provider store={testStore}>
        <BrowserRouter>
          <MovieDetailsHeader />
        </BrowserRouter>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
