import renderer from 'react-test-renderer';
import MovieCardContent from '../MovieCardContent';

it('MovieCardContent should render correctly', () => {
  const movie = {
    id: 123,
    release_date: '1995-01-01',
    title: 'Dune',
    genres: ['Action', 'Drama'],
    poster_path: '',
  };
  const tree = renderer
    .create(<MovieCardContent movie={movie} onMovieCardClick={jest.fn()} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
