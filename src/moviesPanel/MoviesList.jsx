import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

const MoviesList = ({ getMovies }) => {
  const [movies, setMovies] = useState([]);
  const [counter, setCounter] = useState('0 movies found');

  useEffect(() => {
    let moviesArray = getMovies();
    let movieCards = moviesArray.map(
      ({ id, title, imageName, genre, releaseDate }) => (
        <MovieCard
          key={id}
          title={title}
          imageName={imageName}
          genre={genre}
          releaseDate={releaseDate}
        />
      )
    );
    let counterMessage =
      moviesArray.length +
      (moviesArray.length == 1 ? ' movie found' : ' movies found');
    setMovies(movieCards);
    setCounter(counterMessage);
  }, [getMovies]);

  return (
    <>
      <p className='moviesCounter'>{counter}</p>
      <div className='moviesList'>{movies}</div>
    </>
  );
};

MoviesList.propTypes = {
  getMovies: PropTypes.func.isRequired,
};

export default MoviesList;
