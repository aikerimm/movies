import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './movieCard.css';
import ContextMenu from '../modal/ContextMenu.jsx';
import MovieCardContent from './MovieCardContent';
import { fetchMovie } from '../util/moviesSlice.jsx';
import { useSearchParams } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const [openContextMenu, setOpenContextMenu] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const handleContextMenuClose = useCallback(
    () => setOpenContextMenu(false),
    []
  );
  const dispatch = useDispatch();
  const onMovieCardClick = useCallback(() => {
    let newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('movie', movie.id);
    setSearchParams(newSearchParams);
    dispatch(fetchMovie(movie.id));
    window.scroll(0, 0);
  }, [dispatch, movie.id, searchParams, setSearchParams]);

  return (
    <div className='movieCard'>
      <MovieCardContent movie={movie} onMovieCardClick={onMovieCardClick} />
      <img
        id='contextMenuIcon'
        src='/contextMenu.svg'
        alt='contextMenu'
        className='contextMenuIcon'
        onClick={() => setOpenContextMenu(true)}
      />
      {openContextMenu && (
        <ContextMenu onClose={handleContextMenuClose} movie={movie} />
      )}
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default React.memo(MovieCard);
