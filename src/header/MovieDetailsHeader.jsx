import './header.css';
import './movieDetails.css';
import MovieDetails from './MovieDetails.jsx';
import { fetchMovie } from '../util/moviesSlice.jsx';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieDetailsHeader = ({ movieId }) => {
  const [searchParams] = useSearchParams();

  let newSearchParams = new URLSearchParams(searchParams);
  newSearchParams.delete('movie');
  const onCloseLink = '?' + newSearchParams.toString();

  const movie = fetchMovie(movieId);
  return (
    <div className='movieDetailsHeader' id='movieDetailsHeader'>
      <div className='movieDetailsTopPanel'>
        <p className='headerTitle'>
          <b>netflix</b>roulette
        </p>
        <a href={onCloseLink}><img
          src='/searchIcon.svg'
          alt='searchIcon'
          className='searchIcon'
          id='searchIcon'
        /></a>
      </div>
      <div className='movieDetailsContent'>
        <MovieDetails movie={movie} />
      </div>
    </div>
  );
};

MovieDetailsHeader.propTypes = {
  movieId: PropTypes.string,
};

export default MovieDetailsHeader;
