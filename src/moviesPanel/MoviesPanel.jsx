/* eslint-disable require-jsdoc */
import React, { useState } from 'react';
import AllMovies from '../util/AllMovies.jsx';
import MovieCard from './MovieCard.jsx';
import './moviesPanel.css';

const sortByType = (sortType, a, b) => {
  if (sortType === 'releaseDate') {
    return a.releaseYear > b.releaseYear ? 1 : -1;
  }
  return a.title > b.title ? 1 : -1;
};

const MoviesPanel = () => {
  const [ genre, setGenre ] = useState('All');
  const [ sortType, setSortType] = useState('releaseDate');

  const filteredMovies = AllMovies.filter(
    (movie) => genre === 'All' || movie.genre === genre
  )
    .sort((a, b) => sortByType(sortType, a, b))
    .map(({ id, title, imageName, genre, releaseYear }) => (
      <MovieCard
        key={id}
        title={title}
        imageName={imageName}
        genre={genre}
        releaseYear={releaseYear}
      />
    ));

  const counterMessage =
    filteredMovies.length == 1
      ? filteredMovies.length + ' movie found'
      : filteredMovies.length + ' movies found';

  return (
    <div className='moviesPanel'>
      <div className='moviesPanelSelectors'>
        <div>
          <input
            type='radio'
            checked={genre === 'All'}
            className='genreRadioOption'
            onChange={() => setGenre('All')}
          />
          All
          <input
            type='radio'
            checked={genre === 'Drama'}
            className='genreRadioOption'
            onChange={() => setGenre('Drama')}
          />
          Drama
          <input
            type='radio'
            checked={genre === 'Comedy'}
            className='genreRadioOption'
            onChange={() => setGenre('Comedy')}
          />
          Comedy
          <input
            type='radio'
            checked={genre === 'Superhero'}
            className='genreRadioOption'
            onChange={() => setGenre('Superhero')}
          />
          Superhero
          <input
            type='radio'
            checked={genre === 'Crime'}
            className='genreRadioOption'
            onChange={() => setGenre('Crime')}
          />
          Crime
        </div>
        <div>
          <label htmlFor='sortType' className='sortTypeLabel'>
            Sort by
          </label>
          <select name='sortType' id='sortType' onChange={({target: {value}}) => setSortType(value)}>
            <option value='releaseDate'>Release Date</option>
            <option value='title'>Title</option>
          </select>
        </div>
      </div>
      <p className='moviesCounter'>{counterMessage}</p>
      <div className='moviesList'>{filteredMovies}</div>
    </div>
  );
};

export default React.memo(MoviesPanel);
