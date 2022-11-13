import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import './movieCard.css';
import ContextMenu from '../modal/ContextMenu.jsx';
import MovieForm from '../modal/MovieForm';
import MovieCardContent from './MovieCardContent';

const MovieCard = ({ title, imageName, genre, releaseDate }) => {
  const [openContextMenu, setOpenContextMenu] = useState(false);
  const movieForm = (
    <MovieForm movieTitle={title} releaseDate={releaseDate} genre={genre} />
  );
  const handleContextMenuClose = useCallback(
    () => setOpenContextMenu(false),
    []
  );
  return (
    <div className='movieCard'>
      <MovieCardContent
        title={title}
        imageName={imageName}
        genre={genre}
        releaseDate={releaseDate}
      />
      <img
        id='contextMenuIcon'
        src='contextMenu.svg'
        alt='contextMenu'
        className='contextMenuIcon'
        onClick={() => setOpenContextMenu(true)}
      />
      <ContextMenu
        open={openContextMenu}
        onClose={handleContextMenuClose}
        movieForm={movieForm}
      />
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  releaseDate: PropTypes.instanceOf(Date).isRequired,
  genre: PropTypes.array.isRequired,
};

export default React.memo(MovieCard);
