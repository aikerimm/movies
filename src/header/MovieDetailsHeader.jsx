import './header.css';
import './movieDetails.css';
import MovieDetails from './MovieDetails';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedMovie, movieSelected } from '../util/moviesSlice.jsx';
import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

const MovieDetailsHeader = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const onSearchClick = useCallback(() => {
    dispatch(movieSelected(null));
    let newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete('movie');
    setSearchParams(newSearchParams);
  }, [searchParams, setSearchParams, dispatch]);

  const movie = useSelector(getSelectedMovie);
  return (
    <div className='movieDetailsHeader' id='movieDetailsHeader'>
      <div className='movieDetailsTopPanel'>
        <p className='headerTitle'>
          <b>netflix</b>roulette
        </p>
        <img
          src='/searchIcon.svg'
          alt='searchIcon'
          onClick={onSearchClick}
          className='searchIcon'
          id='searchIcon'
        />
      </div>
      <div className='movieDetailsContent'>
        <MovieDetails movie={movie} />
      </div>
    </div>
  );
};

export default MovieDetailsHeader;
