import React from 'react';
import PropTypes from 'prop-types';

const GenreInput = ({genre, onGenreChanged, currentGenre}) => {
  return (
    <>
      <input
        id={`genre${genre}`}
        type='radio'
        checked={currentGenre === genre}
        onChange={() => onGenreChanged(genre)}
      />
      <label htmlFor={`genre${genre}`} className='genreRadioOption'>
        {genre}
      </label>
    </>
  );
};

GenreInput.propTypes = {
  genre: PropTypes.string.isRequired,
  onGenreChanged: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired
};

export default React.memo(GenreInput);
