import renderer from 'react-test-renderer';
import GenreInput from '../GenreInput';

it('GenreInput should render correctly', () => {
  const tree = renderer.create(<GenreInput genre='Comedy' onGenreChanged={jest.fn()} currentGenre='Horror'/>).toJSON();
  expect(tree).toMatchSnapshot();
});