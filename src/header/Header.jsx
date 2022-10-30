import React from 'react';
import './header.css';

const Header = () => (
  <div className='header'>
    <div className='headerTop'>
      <p className='headerTitle'>
        <b>netflix</b>roulette
      </p>
      <input
        type='button'
        value='+ Add movie'
        className='addMovieBtn roundedCorners'
      ></input>
    </div>
    <p className='headerPrompt'>Find your movie</p>
    <div className='search'>
      <input
        type='text'
        placeholder='What do you want to watch?'
        className='searchInput roundedCorners'
      ></input>
      <input
        type='button'
        value='search'
        className='searchBtn roundedCorners'
      ></input>
    </div>
  </div>
);

export default Header;
