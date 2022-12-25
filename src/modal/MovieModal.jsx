import PropTypes from 'prop-types';
import './movieModal.css';
import React from 'react';
import MovieForm from './MovieForm.jsx';

const MovieModal = ({ onClose, modalTitle, onSubmit, movie }) => {
  return (
    <div className='overlay' onClick={onClose}>
      <div
        className='modalContainer'
        onClick={(event) => event.stopPropagation()}
      >
        <p className='closeBtn' onClick={onClose}>
          X
        </p>
        <p className='titleText fullWidth'>{modalTitle}</p>
        <MovieForm movie={movie} onMovieFormSubmit={onSubmit} />
      </div>
    </div>
  );
};

MovieModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  modalTitle: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  movie: PropTypes.object,
};

MovieModal.defaultProps = {
  showSuccessModal: false,
};

export default React.memo(MovieModal);
