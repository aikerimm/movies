import renderer from 'react-test-renderer';
import MovieModal from '../MovieModal';

it('MovieModal should render correctly', () => {
  const movie = {id: 123};
  const tree = renderer.create(<MovieModal modalTitle='Title' onClose={jest.fn()} onSubmit={jest.fn()} movie={movie}/>).toJSON();
  expect(tree).toMatchSnapshot();
});