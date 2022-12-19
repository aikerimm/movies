/**
 * @jest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { createMemoryRouter, MemoryRouter } from 'react-router-dom';
import MoviesPanel from '../MoviesPanel.jsx';

describe('MoviesPanel tests', () => {
  test('should call onClose on closeButton click', () => {
    const onClose = jest.fn();
    const FAKE_EVENT = { name: 'test event' };
    const routes = [
      {
        path: '/search',
        element: <MoviesPanel />,
        loader: () => FAKE_EVENT,
      },
    ];
    const router = createMemoryRouter(routes, { initialEntries: ['/search'] });
    const contextMenu = render(
      <MemoryRouter initialEntries={['/search']}>
        <MoviesPanel />
      </MemoryRouter>
    );

    const pageIncrement = contextMenu.container.querySelector('#pageIncrement');

    fireEvent.click(pageIncrement);

    expect(onClose).toHaveBeenCalledTimes(1);
    console.log(router.state.location.pathname);
  });
});
