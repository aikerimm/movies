import PropTypes from 'prop-types';
import React from 'react';

const MovieCardContent = ({ movie, onMovieCardClick }) => {
  return (
    <>
      <img
        src={movie.poster_path}
        alt='moviePoster'
        className='movieCardPoster'
        onClick={onMovieCardClick}
      />
      <div className='titleYear'>
        <p className='movieCardTitle'>{movie.title}</p>
        <p className='movieCardYear'>{movie.release_date.substring(0, 4)}</p>
      </div>
      <p className='movieCardGenre'>{movie.genres.join(', ')}</p>
    </>
  );
};

MovieCardContent.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  onMovieCardClick: PropTypes.func.isRequired
};

export default React.memo(MovieCardContent);
