import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import React from 'react';
import { useMoviesCounter } from '../util/MoviesCounterHook.jsx';

const MoviesList = ({ movies, onMovieClick }) => {
  const counter = useMoviesCounter(movies);

  return (
    <>
      <p className='moviesCounter'>{counter}</p>
      <div className='moviesList'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onMovieClick={onMovieClick} />
        ))}
      </div>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  onMovieClick: PropTypes.func.isRequired,
};

export default React.memo(MoviesList);
