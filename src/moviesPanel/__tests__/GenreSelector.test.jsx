/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from '@testing-library/react';
import GenreSelector from '../GenreSelector';

describe('Genre Selector tests', () => {
  test('checks genre selection', () => {
    const inputGenre = 'Comedy';
    const currentGenre = 'All';
    const onGenreChanged = jest.fn();
    render(
      <GenreSelector
        onGenreChanged={onGenreChanged}
        currentGenre={currentGenre}
      />
    );

    const genreComedyRadio = screen.getByLabelText(inputGenre);
    expect(genreComedyRadio.checked).toEqual(false);

    fireEvent.click(genreComedyRadio);

    expect(onGenreChanged).toHaveBeenCalledTimes(1);
  });
});
