import MovieCard from './MovieCard';
import React from 'react';
import { useSelector } from 'react-redux';

const MoviesList = () => {
  const movies = useSelector((state) => state.movies.data);
  return (
    <>
      <p className='moviesCounter'>{movies.totalAmount} movies found</p>
      <div className='moviesList'>
        {movies.data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default React.memo(MoviesList);
