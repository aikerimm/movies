import './contextMenu.css';
import PropTypes from 'prop-types';
import DeleteMovieModal from './DeleteMovieModal.jsx';
import MovieModal from './MovieModal.jsx';
import { useCallback, useState } from 'react';
import React from 'react';

const ContextMenu = ({ onClose, movieForm }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const handleEditModalClose = useCallback(() => {
    setOpenEditModal(false);
    onClose();
  }, [onClose]);

  const handleDeleteModalClose = useCallback(() => {
    setOpenDeleteModal(false);
    onClose();
  }, [onClose]);

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
        onClose={handleDeleteModalClose}
      />
      {openEditModal ? (
        <MovieModal
          onClose={handleEditModalClose}
          title='Edit movie'
          movieForm={movieForm}
        />
      ) : null}
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

export default React.memo(ContextMenu);
