import PropTypes from 'prop-types';
import React from 'react';

const MovieCardContent = ({ movie, onMovieClick }) => {
  return (
    <>
      <img
        src={movie.imageName}
        alt='moviePoster'
        className='movieCardPoster'
        onClick={() => onMovieClick(movie)}
      />
      <div className='titleYear'>
        <p className='movieCardTitle'>{movie.title}</p>
        <p className='movieCardYear'>{movie.releaseDate.getFullYear()}</p>
      </div>
      <p className='movieCardGenre'>{movie.genre}</p>
    </>
  );
};

MovieCardContent.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageName: PropTypes.string.isRequired,
    releaseDate: PropTypes.instanceOf(Date).isRequired,
    genre: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  onMovieClick: PropTypes.func.isRequired,
};

export default React.memo(MovieCardContent);
