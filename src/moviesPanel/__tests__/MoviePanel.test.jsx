/**
 * @jest-environment jsdom
 */

import { render, waitFor, screen } from '@testing-library/react';
import MoviesPanel from '../MoviesPanel.jsx';
import { wrapWithReduxAndRouter } from '../../util/test-util.jsx';
import userEvent from '@testing-library/user-event';

describe('MoviesPanel tests', () => {
  test('should increment page', async () => {
    const [component, testRouter] = wrapWithReduxAndRouter(<MoviesPanel />, '/search');

    const moviesPanel = render(component);

    await waitFor(() => screen.getByLabelText('Horror'));

    const pageIncrement = moviesPanel.container.querySelector('#pageIncrement');
    await userEvent.click(pageIncrement);

    expect(testRouter.state.location.search).toEqual('?page=2');
  });

  test('should decrement page', async () => {
    const [component, testRouter] = wrapWithReduxAndRouter(<MoviesPanel />, '/search?page=2');

    const moviesPanel = render(component);

    await waitFor(() => screen.getByLabelText('Horror'));

    const pageDecrement = moviesPanel.container.querySelector('#pageDecrement');
    await userEvent.click(pageDecrement);

    expect(testRouter.state.location.search).toEqual('?page=1');
  });

  test('should not decrement page if on the first page', async () => {
    const [component, testRouter] = wrapWithReduxAndRouter(<MoviesPanel />, '/search');

    const moviesPanel = render(component);

    await waitFor(() => screen.getByLabelText('Horror'));

    const pageDecrement = moviesPanel.container.querySelector('#pageDecrement');
    await userEvent.click(pageDecrement);

    expect(testRouter.state.location.search).toEqual('');
  });

  test('should update URL on genre change', async () => {
    const [component, testRouter] = wrapWithReduxAndRouter(<MoviesPanel />, '/search');

    const moviesPanel = render(component);

    await waitFor(() => screen.getByLabelText('Horror'));

    const genreComedyRadio = moviesPanel.container.querySelector('#genreComedy');
    await userEvent.click(genreComedyRadio);

    expect(testRouter.state.location.search).toEqual('?genre=Comedy');
  });

  test('should update URL on sort change', async () => {
    const [component, testRouter] = wrapWithReduxAndRouter(<MoviesPanel />, '/search');

    render(component);

    await waitFor(() => screen.getByLabelText('Horror'));

    await userEvent.selectOptions(screen.getByRole('combobox'), ['title']);

    expect(testRouter.state.location.search).toEqual('?sortBy=title&sortDir=asc');
  });
});
