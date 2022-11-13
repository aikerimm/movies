import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import './movieCard.css';
import ContextMenu from '../modal/ContextMenu.jsx';
import MovieForm from '../modal/MovieForm';
import MovieCardContent from './MovieCardContent';

const MovieCard = ({ movie, onMovieClick }) => {
  const [openContextMenu, setOpenContextMenu] = useState(false);
  const movieForm = (
    <MovieForm
      movieTitle={movie.title}
      releaseDate={movie.releaseDate}
      genre={movie.genre}
    />
  );
  const handleContextMenuClose = useCallback(
    () => setOpenContextMenu(false),
    []
  );
  return (
    <div className='movieCard' onClick={() => onMovieClick(movie)}>
      <MovieCardContent movie={movie} />
      <img
        id='contextMenuIcon'
        src='contextMenu.svg'
        alt='contextMenu'
        className='contextMenuIcon'
        onClick={() => setOpenContextMenu(true)}
      />
      {openContextMenu ? (
        <ContextMenu onClose={handleContextMenuClose} movieForm={movieForm} />
      ) : null}
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  onMovieClick: PropTypes.func.isRequired,
};

export default React.memo(MovieCard);
