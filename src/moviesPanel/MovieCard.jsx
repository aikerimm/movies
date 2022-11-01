import React from 'react';
import PropTypes from 'prop-types';
import './movieCard.css';

const MovieCard = ({ title, imageName, genre, releaseYear }) => {
  return (
    <div className='movieCard'>
      <img src={imageName} alt='moviePoster' className='movieCardPoster' />
      <div className='titleYear'>
        <p className='movieCardTitle'>{title}</p>
        <p className='movieCardYear'>{releaseYear}</p>
      </div>
      <p className='movieCardGenre'>{genre}</p>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
};

export default React.memo(MovieCard);
