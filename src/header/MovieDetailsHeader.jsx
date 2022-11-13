import './header.css';
import './movieDetails.css';
import MovieDetails from './MovieDetails';
import PropTypes from 'prop-types';

const MovieDetailsHeader = ({ onSearchClick, movie }) => {
  return (
    <div className='movieDetailsHeader'>
      <div className='movieDetailsTopPanel'>
        <p className='headerTitle'>
          <b>netflix</b>roulette
        </p>
        <img
          src='searchIcon.svg'
          alt='searchIcon'
          onClick={onSearchClick}
          className='searchIcon'
        />
      </div>
      <div className='movieDetailsContent'>
        <MovieDetails movie={movie} />
      </div>
    </div>
  );
};

MovieDetailsHeader.propTypes = {
  onSearchClick: PropTypes.func.isRequired,
  movie: PropTypes.object,
};

export default MovieDetailsHeader;
