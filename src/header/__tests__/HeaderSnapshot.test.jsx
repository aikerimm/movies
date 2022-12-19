/**
 * @jest-environment jsdom
 */

import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '../Header';

it('Header renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
