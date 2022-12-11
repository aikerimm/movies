import PropTypes from 'prop-types';
import './addMovieSuccessModal.css';

const AddMovieSuccessModal = ({ onClose }) => {
  return (
    <div className='overlay successOverlay' onClick={onClose}>
      <div
        className='successContainer'
        onClick={(event) => event.stopPropagation()}
      >
        <img src='/success.svg' className='successIcon' alt='success' />
        <p className='closeBtn' onClick={onClose}>
          X
        </p>
        <p className='titleText'>Congratulations!</p>
        <p className='promptText'>
          The movie has been added to database successfully
        </p>
      </div>
    </div>
  );
};

AddMovieSuccessModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AddMovieSuccessModal;
