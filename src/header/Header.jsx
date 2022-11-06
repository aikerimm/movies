import React, { useState } from 'react';
import './header.css';
import MovieModal from '../modal/MovieModal.jsx';
import MovieForm from '../modal/MovieForm';

const Header = () => {
  const [openAddMovieModal, setOpenAddMovieModal] = useState(false);
  return (
    <div className='header'>
      <div className='headerTop'>
        <p className='headerTitle'>
          <b>netflix</b>roulette
        </p>
        <input
          type='button'
          value='+ Add movie'
          className='addMovieBtn roundedCorners'
          onClick={() => setOpenAddMovieModal(true)}
        ></input>
      </div>
      <div className='findYourMovie'>
        <MovieModal
          open={openAddMovieModal}
          onClose={() => setOpenAddMovieModal(false)}
          title='Add movie'
          movieForm=<MovieForm />
        />
        <p className='titleText fullWidth'>Find your movie</p>
        <div className='search'>
          <input
            type='text'
            placeholder='What do you want to watch?'
            className='searchInput roundedCorners'
          ></input>
          <input
            type='button'
            value='search'
            className='redBtn roundedCorners'
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Header;
