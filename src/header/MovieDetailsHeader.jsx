import './header.css';
import './movieDetails.css';
import MovieDetails from './MovieDetails';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedMovie, movieSelected } from '../util/moviesSlice.jsx';
import { useCallback } from 'react';

const MovieDetailsHeader = () => {
  const dispatch = useDispatch();
  const onSearchClick = useCallback(() => {
    dispatch(movieSelected(null));
  }, [dispatch]);
  const movie = useSelector(getSelectedMovie);
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

export default MovieDetailsHeader;
