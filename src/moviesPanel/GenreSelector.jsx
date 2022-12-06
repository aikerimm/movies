import React from 'react';
import PropTypes from 'prop-types';
import GenreInput from './GenreInput';

const genres = ['All', 'Drama', 'Comedy', 'Adventure', 'Horror'];

const GenreSelector = ({ currentGenre, onGenreChanged }) => {
  console.log('currentGenre=' + currentGenre);
  return (
    <div className='genreRadioDiv'>
      {genres.map((genre) => (
        <GenreInput
          key={genre}
          genre={genre}
          currentGenre={currentGenre}
          onGenreChanged={onGenreChanged}
        />
      ))}
    </div>
  );
};

GenreSelector.propTypes = {
  currentGenre: PropTypes.string.isRequired,
  onGenreChanged: PropTypes.func.isRequired,
};

export default React.memo(GenreSelector);
