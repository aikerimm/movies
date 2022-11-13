import './contextMenu.css';
import PropTypes from 'prop-types';
import DeleteMovieModal from './DeleteMovieModal.jsx';
import MovieModal from './MovieModal.jsx';
import { useCallback, useState } from 'react';

const ContextMenu = ({ open, onClose, movieForm }) => {
  if (!open) return null;
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const handleEditModalClose = useCallback(() => {
    setOpenEditModal(false);
    onClose();
  }, []);
  const handleDeleteModalClose = useCallback(() => {
    setOpenDeleteModal(false);
    onClose();
  }, []);
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
      <MovieModal
        open={openEditModal}
        onClose={handleEditModalClose}
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
