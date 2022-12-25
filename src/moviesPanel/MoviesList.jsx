import MovieCard from './MovieCard.jsx';
import React from 'react';
import PropTypes from 'prop-types';

const MoviesList = ({data}) => {
  return (
    <>
      <p className='moviesCounter'>{data.totalAmount} movies found</p>
      <div className='moviesList' id='moviesList'>
        {data.data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

MoviesList.propTypes = {
  data: PropTypes.object
};

export default React.memo(MoviesList);
