import './contextMenu.css';
import PropTypes from 'prop-types';
import DeleteMovieModal from './DeleteMovieModal.jsx';
import MovieModal from './MovieModal.jsx';
import { useState } from 'react';

const ContextMenu = ({ open, onClose, movieForm }) => {
  if (!open) return null;
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  return (
    <div className='contextMenuDiv'>
      <p className='closeBtn' onClick={onClose}>
        X
      </p>
      <p className='contextMenuOption' onClick={() => setOpenEditModal(true)}>
        Edit
      </p>
      <p className='contextMenuOption' onClick={() => setOpenDeleteModal(true)}>
        Delete
      </p>
      <DeleteMovieModal
        open={openDeleteModal}
        onClose={() => {
          setOpenDeleteModal(false);
          onClose();
        }}
      />
      <MovieModal
        open={openEditModal}
        onClose={() => {
          setOpenEditModal(false);
          onClose();
        }}
        title='Edit movie'
        movieForm={movieForm}
      />
    </div>
  );
};

ContextMenu.defaultProps = {
  open: false,
};

ContextMenu.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  movieForm: PropTypes.element.isRequired,
};

export default ContextMenu;
