import React, { useCallback, useState } from 'react';
import './header.css';
import MovieModal from '../modal/MovieModal.jsx';
import MovieForm from '../modal/MovieForm';
import Button from '../util/Button';

const Header = () => {
  const [openAddMovieModal, setOpenAddMovieModal] = useState(false);
  const handleOpenAddMovieModal = useCallback(() => setOpenAddMovieModal(true), []);
  const handleCloseAddMovieModal = useCallback(() => setOpenAddMovieModal(false), []);

  return (
    <div className='header'>
      <div className='headerTop'>
        <p className='headerTitle'>
          <b>netflix</b>roulette
        </p>
        <Button value='+ Add movie' type='add' onClick={handleOpenAddMovieModal} />
      </div>
      <div className='findYourMovie'>
        {openAddMovieModal && (
          <MovieModal
            open={openAddMovieModal}
            onClose={handleCloseAddMovieModal}
            title='Add movie'
            showSuccessModal={true}
            movieForm=<MovieForm />
          />
        )}
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
    </div>
  );
};

export default Header;
