import renderer from 'react-test-renderer';
import Button from '../Button';

it('Button should render correctly', () => {
  const tree = renderer
    .create(<Button value='OK' type='submit' onClick={jest.fn()} isFormSubmit={false}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
