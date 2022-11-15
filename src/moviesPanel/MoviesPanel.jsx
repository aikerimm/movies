/* eslint-disable require-jsdoc */
import React, { useEffect, useState } from 'react';
import AllMovies from '../util/AllMovies.jsx';
import MoviesList from './MoviesList.jsx';
import PropTypes from 'prop-types';
import './moviesPanel.css';

const sortByType = (sortType, a, b) => {
  if (sortType === 'releaseDate') {
    return a.releaseYear > b.releaseYear ? 1 : -1;
  }
  return a.title > b.title ? 1 : -1;
};

const MoviesPanel = ({ onMovieClick }) => {
  const [genre, setGenre] = useState('All');
  const [sortType, setSortType] = useState('releaseDate');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const filteredMovies = AllMovies.filter(
      (movie) => genre === 'All' || movie.genre.includes(genre)
    ).sort((a, b) => sortByType(sortType, a, b));
    setMovies(filteredMovies);
  }, [genre, sortType]);

  return (
    <div className='moviesPanel'>
      <div className='moviesPanelSelectors'>
        <div className='genreRadioDiv'>
          <input
            id='genreAll'
            type='radio'
            checked={genre === 'All'}
            onChange={() => setGenre('All')}
          />
          <label htmlFor='genreAll' className='genreRadioOption'>
            All
          </label>
          <input
            id='genreDrama'
            type='radio'
            checked={genre === 'Drama'}
            onChange={() => setGenre('Drama')}
          />
          <label htmlFor='genreDrama' className='genreRadioOption'>
            Drama
          </label>
          <input
            id='genreComedy'
            type='radio'
            checked={genre === 'Comedy'}
            onChange={() => setGenre('Comedy')}
          />
          <label htmlFor='genreComedy' className='genreRadioOption'>
            Comedy
          </label>
          <input
            id='genreSuperhero'
            type='radio'
            checked={genre === 'Superhero'}
            onChange={() => setGenre('Superhero')}
          />
          <label htmlFor='genreSuperhero' className='genreRadioOption'>
            Superhero
          </label>
          <input
            id='genreCrime'
            type='radio'
            checked={genre === 'Crime'}
            onChange={() => setGenre('Crime')}
          />
          <label htmlFor='genreCrime' className='genreRadioOption'>
            Crime
          </label>
        </div>
        <div className='sortTypeSelect'>
          <label htmlFor='sortType' className='sortTypeLabel'>
            Sort by
          </label>
          <select
            name='sortType'
            id='sortType'
            onChange={({ target: { value } }) => setSortType(value)}
          >
            <option value='releaseDate'>Release Date</option>
            <option value='title'>Title</option>
          </select>
        </div>
      </div>
      <MoviesList movies={movies} onMovieClick={onMovieClick} />
    </div>
  );
};

MoviesPanel.propTypes = {
  onMovieClick: PropTypes.func.isRequired,
};

export default React.memo(MoviesPanel);
