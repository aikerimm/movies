/**
 * @jest-environment jsdom
 */

import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import FindYourMovie from '../FindYourMovie.jsx';

it('Find Your Movie renders correctly', () => {
  const tree = renderer.create(<BrowserRouter><FindYourMovie /></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
