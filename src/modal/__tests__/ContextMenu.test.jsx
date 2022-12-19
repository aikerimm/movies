/**
 * @jest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { testMovie } from '../../util/test-util';
import ContextMenu from '../ContextMenu';

describe('ContextMenu tests', () => {
  test('should call onClose on closeButton click', () => {
    const onClose = jest.fn();
    const contextMenu = render(
      <MemoryRouter initialEntries={['/search']}>
        <ContextMenu onClose={onClose} movie={testMovie} />
      </MemoryRouter>
    );

    const closeButton = contextMenu.container.querySelector(
      '#contextMenuCloseButton'
    );

    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
