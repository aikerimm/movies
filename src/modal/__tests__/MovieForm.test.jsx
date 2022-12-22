/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MovieForm from '../MovieForm';

describe('MovieForm tests', () => {
  test('should show validation error', async () => {
    const onMovieFormSubmit = jest.fn();
    render(<MovieForm onMovieFormSubmit={onMovieFormSubmit} />);

    const submitButton = screen.getByText(/submit/i);
    expect(submitButton).not.toBeNull();

    userEvent.click(submitButton);

    let error;
    await waitFor(
      () =>
        (error = screen.getByText(
          'Overview can not be empty. Title can not be empty. Release date can not be empty. Movie url can not be empty. At least 1 genre is required.'
        ))
    );
    expect(error).not.toBeNull();
  });
});
