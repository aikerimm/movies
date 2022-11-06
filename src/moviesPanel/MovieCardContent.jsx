import PropTypes from 'prop-types';
import React from 'react';

const MovieCardContent = ({ title, imageName, genre, releaseDate }) => {
  return (
    <>
      <img src={imageName} alt='moviePoster' className='movieCardPoster' />
      <div className='titleYear'>
        <p className='movieCardTitle'>{title}</p>
        <p className='movieCardYear'>{releaseDate.getFullYear()}</p>
      </div>
      <p className='movieCardGenre'>{genre}</p>
    </>
  );
};

MovieCardContent.propTypes = {
  title: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  releaseDate: PropTypes.instanceOf(Date).isRequired,
  genre: PropTypes.array.isRequired,
};

export default React.memo(MovieCardContent);
