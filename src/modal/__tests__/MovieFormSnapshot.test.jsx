/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer';
import MovieForm from '../MovieForm.jsx';
import { testMovie } from '../../util/test-util.jsx';

it('MovieForm renders correctly', () => {
  const onMovieFormSubmit = () => {
    console.log('test');
  };
  const tree = renderer
    .create(
      <MovieForm movie={testMovie} onMovieFormSubmit={onMovieFormSubmit} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
