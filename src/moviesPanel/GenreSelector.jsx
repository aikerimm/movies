import React from 'react';
import PropTypes from 'prop-types';

const GenreSelector = ({genre, onGenreChanged}) => {
  return (
    <div className='genreRadioDiv'>
      <input
        id='genreAll'
        type='radio'
        checked={genre === 'All'}
        onChange={() => onGenreChanged('All')}
      />
      <label htmlFor='genreAll' className='genreRadioOption'>
        All
      </label>
      <input
        id='genreDrama'
        type='radio'
        checked={genre === 'Drama'}
        onChange={() => onGenreChanged('Drama')}
      />
      <label htmlFor='genreDrama' className='genreRadioOption'>
        Drama
      </label>
      <input
        id='genreComedy'
        type='radio'
        checked={genre === 'Comedy'}
        onChange={() => onGenreChanged('Comedy')}
      />
      <label htmlFor='genreComedy' className='genreRadioOption'>
        Comedy
      </label>
      <input
        id='genreAdventure'
        type='radio'
        checked={genre === 'Adventure'}
        onChange={() => onGenreChanged('Adventure')}
      />
      <label htmlFor='genreAdventure' className='genreRadioOption'>
        Adventure
      </label>
      <input
        id='genreHorror'
        type='radio'
        checked={genre === 'Horror'}
        onChange={() => onGenreChanged('Horror')}
      />
      <label htmlFor='genreHorror' className='genreRadioOption'>
        Horror
      </label>
    </div>
  );
};

GenreSelector.propTypes = {
  genre: PropTypes.string.isRequired,
  onGenreChanged: PropTypes.func.isRequired
};

export default React.memo(GenreSelector);
