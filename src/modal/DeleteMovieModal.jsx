import PropTypes from 'prop-types';
import './deleteMovieModal.css';

const DeleteMovieModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className='overlay' onClick={onClose}>
      <div
        className='deleteMovieModal'
        onClick={(event) => event.stopPropagation()}
      >
        <p className='closeBtn' onClick={onClose}>
          X
        </p>
        <p className='titleText fullWidth'>Delete movie</p>
        <p className='promptText'>Are you sure you want to delete this movie</p>
        <div className='deleteConfirmDiv'>
          <input
            type='button'
            value='confirm'
            className='redBtn deleteCofirmBtn roundedCorners'
          ></input>
        </div>
      </div>
    </div>
  );
};

DeleteMovieModal.defaultProps = {
  open: false,
};

DeleteMovieModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

export default DeleteMovieModal;
