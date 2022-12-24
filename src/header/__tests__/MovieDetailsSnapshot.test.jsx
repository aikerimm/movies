import renderer from 'react-test-renderer';
import MovieDetails from '../MovieDetails.jsx';

it('MovieDetails renders correctly', () => {
  const movie = {
    title: 'Zootopia',
    vote_average: 9.8,
    runtime: 120,
    genres: ['Drama', 'Comedy'],
    release_date: '1994-01-01',
    overview: 'Lorem Ipsum Some',
    poster_path: '',
  };
  const tree = renderer.create(<MovieDetails movie={movie} />).toJSON();
  expect(tree).toMatchSnapshot();
});
