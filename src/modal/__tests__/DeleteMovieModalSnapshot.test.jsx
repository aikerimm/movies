import renderer from 'react-test-renderer';
import DeleteMovieModal from '../DeleteMovieModal.jsx';

it('DeleteMovieModal should render correctly', () => {
  const tree = renderer.create(<DeleteMovieModal open={true} onClose={jest.fn()} onDelete={jest.fn()} movieId={123}/>).toJSON();
  expect(tree).toMatchSnapshot();
});