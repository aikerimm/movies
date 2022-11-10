import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

const MoviesList = ({ movies }) => {
  const [counter, setCounter] = useState('0 movies found');

  useEffect(() => {
    let counterMessage =
      movies.length + (movies.length == 1 ? ' movie found' : ' movies found');
    setCounter(counterMessage);
  }, [movies]);

  return (
    <>
      <p className='moviesCounter'>{counter}</p>
      <div className='moviesList'>
        {movies.map(({ id, title, imageName, genre, releaseDate }) => (
          <MovieCard
            key={id}
            title={title}
            imageName={imageName}
            genre={genre}
            releaseDate={releaseDate}
          />
        ))}
      </div>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;
