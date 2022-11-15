import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import './movieCard.css';
import ContextMenu from '../modal/ContextMenu.jsx';
import MovieForm from '../modal/MovieForm';
import MovieCardContent from './MovieCardContent';

const MovieCard = ({ movie, onMovieClick }) => {
  const [openContextMenu, setOpenContextMenu] = useState(false);
  const movieForm = <MovieForm movie={movie} />;
  const handleContextMenuClose = useCallback(
    () => setOpenContextMenu(false),
    []
  );
  return (
    <div className='movieCard'>
      <MovieCardContent movie={movie} onMovieClick={onMovieClick} />
      <img
        id='contextMenuIcon'
        src='contextMenu.svg'
        alt='contextMenu'
        className='contextMenuIcon'
        onClick={() => setOpenContextMenu(true)}
      />
      {openContextMenu && (
        <ContextMenu onClose={handleContextMenuClose} movieForm={movieForm} />
      )}
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  onMovieClick: PropTypes.func.isRequired,
};

export default React.memo(MovieCard);
