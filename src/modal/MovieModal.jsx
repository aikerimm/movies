import PropTypes from 'prop-types';
import './movieModal.css';
import AddMovieSuccessModal from './AddMovieSuccessModal';
import { useCallback, useState } from 'react';
import Button from '../util/Button';

const MovieModal = ({ open, onClose, title, movieForm, showSuccessModal }) => {
  if (!open) return null;
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const handleCloseAddMovieSuccessModal = useCallback(() => {
    setOpenSuccessModal(false);
    onClose();
  }, []);
  const handleSuccessfullSubmit = useCallback(() => {
    if (showSuccessModal) {
      setOpenSuccessModal(true);
    }
  }, []);
  if (openSuccessModal) {
    return <AddMovieSuccessModal onClose={handleCloseAddMovieSuccessModal} />;
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
            <Button value='Reset' type='cancel' />
            <input
              type='submit'
              value='Submit'
              className='submit roundedCorners'
              onClick={handleSuccessfullSubmit}
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
  showSuccessModal: PropTypes.bool,
};

MovieModal.defaultProps = {
  open: false,
  showSuccessModal: false,
};

export default MovieModal;
