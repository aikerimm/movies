import PropTypes from 'prop-types';
import './movieModal.css';
import Button from '../util/Button';
import React from 'react';

const MovieModal = ({ onClose, title, movieForm, onSubmit }) => {
  return (
    <div className='overlay' onClick={onClose}>
      <div
        className='modalContainer'
        onClick={(event) => event.stopPropagation()}
      >
        <p className='closeBtn' onClick={onClose}>
          X
        </p>
        <p className='titleText fullWidth'>{title}</p>
        <form className='addMovieForm'>
          {movieForm}
          <div className='btnContainer'>
            <Button value='Reset' type='cancel' />
            <input
              type='submit'
              value='Submit'
              className='submitBtn roundedCorners'
              onClick={onSubmit}
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

MovieModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  movieForm: PropTypes.element,
  onSubmit: PropTypes.func,
};

MovieModal.defaultProps = {
  open: false,
  showSuccessModal: false,
};

export default React.memo(MovieModal);
