import renderer from 'react-test-renderer';
import AddMovieSuccessModal from '../AddMovieSuccessModal';

it('AddMovieSuccessModal should render correctly', () => {
  const onClose = jest.fn();
  const tree = renderer.create(<AddMovieSuccessModal onClose={onClose}/>).toJSON();
  expect(tree).toMatchSnapshot();
});