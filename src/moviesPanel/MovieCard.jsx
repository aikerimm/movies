import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './movieCard.css';
import ContextMenu from '../modal/ContextMenu.jsx';
import MovieCardContent from './MovieCardContent';
import { fetchMovie } from '../util/moviesSlice.jsx';

const MovieCard = ({ movie }) => {
  const [openContextMenu, setOpenContextMenu] = useState(false);
  const handleContextMenuClose = useCallback(
    () => setOpenContextMenu(false),
    []
  );
  const dispatch = useDispatch();
  const onMovieCardClick = useCallback(() => {
    dispatch(fetchMovie(movie.id));
    window.scroll(0, 0);
  }, [dispatch, movie.id]);

  return (
    <div className='movieCard'>
      <MovieCardContent movie={movie} onMovieCardClick={onMovieCardClick} />
      <img
        id='contextMenuIcon'
        src='contextMenu.svg'
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
