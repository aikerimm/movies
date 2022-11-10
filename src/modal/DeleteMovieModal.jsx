import PropTypes from 'prop-types';
import './deleteMovieModal.css';
import Button from '../util/Button';

const DeleteMovieModal = ({ open, onClose }) => {
  return (
    open && (
      <div className='overlay' onClick={onClose}>
        <div
          className='deleteMovieModal'
          onClick={(event) => event.stopPropagation()}
        >
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <p className='titleText fullWidth'>Delete movie</p>
          <p className='promptText'>
            Are you sure you want to delete this movie
          </p>
          <div className='deleteConfirmDiv'>
            <Button value='confirm' type='submit' />
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
};

export default DeleteMovieModal;
