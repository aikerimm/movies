import PropTypes from 'prop-types';
import './movieModal.css';
import AddMovieSuccessModal from './AddMovieSuccessModal';
import { useState } from 'react';

const MovieModal = ({ open, onClose, title, movieForm }) => {
  if (!open) return null;
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  if (openSuccessModal) {
    return (
      <AddMovieSuccessModal
        onClose={() => {
          setOpenSuccessModal(false);
          onClose();
        }}
      />
    );
  }
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
            <input
              type='button'
              value='Reset'
              className='blackBtn roundedCorners'
            ></input>
            <input
              type='submit'
              value='Submit'
              className='redBtn roundedCorners'
              onClick={() => {
                if (title === 'Add movie') {
                  setOpenSuccessModal(true);
                }
              }}
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
};

MovieModal.defaultProps = {
  open: false,
};

export default MovieModal;
