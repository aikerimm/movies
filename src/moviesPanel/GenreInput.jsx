import React from 'react';
import PropTypes from 'prop-types';

const GenreInput = ({ genre, onGenreChanged, currentGenre }) => {
  process.stderr.write(onGenreChanged(genre));
  return (
    <>
      <a href={onGenreChanged(genre)}>
        <input
          id={`genre${genre}`}
          type='radio'
          checked={currentGenre === genre}
          onChange={onGenreChanged}
        />

        <label htmlFor={`genre${genre}`} className='genreRadioOption'>
          {genre}
        </label>
      </a>
    </>
  );
};

GenreInput.propTypes = {
  genre: PropTypes.string.isRequired,
  onGenreChanged: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired,
};

export default React.memo(GenreInput);
