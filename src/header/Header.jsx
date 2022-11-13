import React, { useCallback, useState } from 'react';
import './header.css';
import MovieModal from '../modal/MovieModal.jsx';
import MovieForm from '../modal/MovieForm';
import Button from '../util/Button';
import AddMovieSuccessModal from '../modal/AddMovieSuccessModal.jsx';

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
  const handleAddMovieFormSubmit = useCallback(() => {
    setOpenSuccessModal(true);
  }, []);
  const handleAddMovieSuccessModalClose = useCallback(() => {
    setOpenSuccessModal(false);
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
          open={openAddMovieModal}
          onClose={handleCloseAddMovieModal}
          title='Add movie'
          onSubmit={handleAddMovieFormSubmit}
          movieForm=<MovieForm />
        />
      )}
      {openSuccessModal ? (
        <AddMovieSuccessModal onClose={handleAddMovieSuccessModalClose} />
      ) : null}
    </div>
  );
};

export default Header;
