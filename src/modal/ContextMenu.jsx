import './contextMenu.css';
import PropTypes from 'prop-types';
import DeleteMovieModal from './DeleteMovieModal.jsx';
import MovieModal from './MovieModal.jsx';
import { useCallback, useState } from 'react';
import React from 'react';
import {
  sendDeleteMovieRequest,
  sendEditMovieRequest,
} from '../util/apiService';
import { useNavigate } from 'react-router';

const ContextMenu = ({ onClose, movie }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const navigate = useNavigate();

  const handleEditModalSubmit = useCallback(
    (values, id) => {
      return sendEditMovieRequest(values, id).then((response) => {
        if (response.status == 200) {
          setOpenEditModal(false);
          onClose();
          navigate(0);
        } else {
          console.log(JSON.stringify(response));
          alert('Error editing movie. See console.');
        }
      });
    },
    [onClose, navigate]
  );

  const handleEditModalClose = useCallback(() => {
    setOpenEditModal(false);
    onClose();
  }, [onClose]);

  const handleDeleteModalClose = useCallback(() => {
    setOpenDeleteModal(false);
    onClose();
  }, [onClose]);

  const handleDeleteModalSubmit = useCallback(
    async (movieId) => {
      await sendDeleteMovieRequest(movieId).then((response) => {
        if (response.status == 204) {
          navigate(0);
        } else {
          alert('Error deleting movie. See network tab.');
        }
      });
    },
    [navigate]
  );

  return (
    <div className='contextMenuDiv'>
      <p id='contextMenuCloseButton' className='closeBtn' onClick={onClose}>
        X
      </p>
      <p
        id='contextMenuEdit'
        className='contextMenuOption'
        onClick={() => setOpenEditModal(true)}
      >
        Edit
      </p>
      <p
        id='contextMenuDelete'
        className='contextMenuOption'
        onClick={() => setOpenDeleteModal(true)}
      >
        Delete
      </p>
      <DeleteMovieModal
        open={openDeleteModal}
        onClose={handleDeleteModalClose}
        movieId={movie.id}
        onDelete={handleDeleteModalSubmit}
      />
      {openEditModal && (
        <MovieModal
          onClose={handleEditModalClose}
          modalTitle='Edit movie'
          movie={movie}
          onSubmit={handleEditModalSubmit}
        />
      )}
    </div>
  );
};

ContextMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
};

export default React.memo(ContextMenu);
