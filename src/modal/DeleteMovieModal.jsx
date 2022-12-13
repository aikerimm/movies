import PropTypes from 'prop-types';
import React from 'react';
import './deleteMovieModal.css';
import Button from '../util/Button';
import { useCallback } from 'react';

const DeleteMovieModal = ({ open, onClose, movieId, onDelete }) => {
  const onDeleteMovieModalDivClick = useCallback((event) => {
    event.stopPropagation();
  }, []);

  const onDeleteSubmitClick = useCallback(() => onDelete(movieId), [movieId, onDelete]);

  return (
    open && (
      <div className='overlay' onClick={onClose}>
        <div className='deleteMovieModal' onClick={onDeleteMovieModalDivClick}>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <p className='titleText fullWidth'>Delete movie</p>
          <p className='promptText'>
            Are you sure you want to delete this movie
          </p>
          <div className='deleteConfirmDiv'>
            <Button
              value='confirm'
              type='submit'
              onClick={onDeleteSubmitClick}
            />
          </div>
        </div>
      </div>
    )
  );
};

DeleteMovieModal.defaultProps = {
  open: false,
};

DeleteMovieModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  movieId: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default React.memo(DeleteMovieModal);
