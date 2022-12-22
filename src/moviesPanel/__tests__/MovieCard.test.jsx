/**
 * @jest-environment jsdom
 */

import { render, waitFor, screen } from '@testing-library/react';
import { testMovie, wrapWithReduxAndRouter } from '../../util/test-util.jsx';
import userEvent from '@testing-library/user-event';
import MovieCard from '../MovieCard.jsx';

describe('MovieCard tests', () => {
  test('should update URL on movie card click', async () => {
    window.scrollTo = jest.fn();
    const [component, testRouter] = wrapWithReduxAndRouter(
      <MovieCard movie={testMovie} />,
      '/search'
    );

    render(component);

    await waitFor(() => screen.getByAltText('moviePoster'));

    const moviePoster = screen.getByAltText('moviePoster');
    await userEvent.click(moviePoster);

    expect(testRouter.state.location.search).toEqual('?movie=123');
  });

  test('should open and close context menu when user click', async () => {
    const [component] = wrapWithReduxAndRouter(
      <MovieCard movie={testMovie} />,
      '/search'
    );

    const movieCard = render(component);

    await waitFor(() => screen.getByAltText('contextMenu'));

    expect(movieCard.container.querySelector('#contextMenuCloseButton')).toBeNull();

    const contextMenuIcon = screen.getByAltText('contextMenu');
    await userEvent.click(contextMenuIcon);

    const contextMenuCloseButton = movieCard.container.querySelector('#contextMenuCloseButton');
    expect(contextMenuCloseButton).not.toBeNull();

    await userEvent.click(contextMenuCloseButton);
    expect(movieCard.container.querySelector('#contextMenuCloseButton')).toBeNull();
  });
});
