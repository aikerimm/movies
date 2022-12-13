import React, { useCallback, useState } from 'react';
import './header.css';
import MovieModal from '../modal/MovieModal.jsx';
import Button from '../util/Button';
import AddMovieSuccessModal from '../modal/AddMovieSuccessModal.jsx';
import { sendAddMovieRequest } from '../util/apiService';

const Header = () => {
  const [openAddMovieModal, setOpenAddMovieModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
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
    setOpenSuccessModal(false);
    setOpenAddMovieModal(false);
    window.location.reload();
  }, []);

  return (
    <div className='header'>
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
      <div className='findYourMovie'>
        <p className='titleText fullWidth'>Find your movie</p>
        <div className='search'>
          <input
            type='text'
            placeholder='What do you want to watch?'
            className='searchInput roundedCorners'
          ></input>
          <Button value='search' type='submit' />
        </div>
      </div>
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
