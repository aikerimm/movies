import renderer from 'react-test-renderer';
import SortTypeSelector from '../SortTypeSelector';

it('SortTypeSelector should render correctly', () => {
  const tree = renderer
    .create(
      <SortTypeSelector
        sortType='TITLE'
        sortDirection='asc'
        onSortChanged={jest.fn()}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
