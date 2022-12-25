import React, { useCallback, useState } from 'react';
import './header.css';
import MovieModal from '../modal/MovieModal.jsx';
import Button from '../util/Button.jsx';
import AddMovieSuccessModal from '../modal/AddMovieSuccessModal.jsx';
import { sendAddMovieRequest } from '../util/apiService.jsx';
import FindYourMovie from './FindYourMovie.jsx';
import { useNavigate } from 'react-router';

const Header = () => {
  const [openAddMovieModal, setOpenAddMovieModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const navigate = useNavigate();

  const handleOpenAddMovieModal = useCallback(
    () => setOpenAddMovieModal(true),
    []
  );
  const handleCloseAddMovieModal = useCallback(
    () => setOpenAddMovieModal(false),
    []
  );
  const handleAddMovieFormSubmit = useCallback((values) => {
    return sendAddMovieRequest(values).then((response) => {
      if (response.status == 201) {
        setOpenSuccessModal(true);
      } else {
        alert('Error adding movie. See network tab.');
      }
    });
  }, []);
  const handleAddMovieSuccessModalClose = useCallback(() => {
    navigate(0);
  }, [navigate]);

  return (
    <div className='header' id='searchHeader'>
      <div className='headerTop'>
        <p className='headerTitle'>
          <b>netflix</b>roulette
        </p>
        <Button
          value='+ Add movie'
          type='add'
          onClick={handleOpenAddMovieModal}
        />
      </div>
      <FindYourMovie />
      {openAddMovieModal && (
        <MovieModal
          onClose={handleCloseAddMovieModal}
          modalTitle='Add movie'
          onSubmit={handleAddMovieFormSubmit}
        />
      )}
      {openSuccessModal && (
        <AddMovieSuccessModal onClose={handleAddMovieSuccessModalClose} />
      )}
    </div>
  );
};

export default Header;
