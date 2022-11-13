import PropTypes from 'prop-types';
import React from 'react';

const MovieCardContent = ({
  movie: { imageName, title, releaseDate, genre },
}) => {
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
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageName: PropTypes.string.isRequired,
    releaseDate: PropTypes.instanceOf(Date).isRequired,
    genre: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};

export default React.memo(MovieCardContent);
