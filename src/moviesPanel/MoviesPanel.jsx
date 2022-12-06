/* eslint-disable require-jsdoc */
import React, { useCallback, useEffect, useState } from 'react';
import MoviesList from './MoviesList.jsx';
import './moviesPanel.css';
import { useDispatch } from 'react-redux';
import ErrorBoundary from '../util/ErrorBoundary.jsx';
import { fetchMovies } from '../util/moviesSlice.jsx';
import Pagination from './Pagination.jsx';
import GenreSelector from './GenreSelector.jsx';
import SortTypeSelector from './SortTypeSelector.jsx';

const MoviesPanel = () => {
  const [genre, setGenre] = useState('All');
  const [sortType, setSortType] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const onPageDecrement = useCallback(() => setPage(page - 1), [page]);
  const onPageIncrement = useCallback(() => setPage(page + 1), [page]);
  const onGenreChanged = useCallback((newGenre) => setGenre(newGenre), []);
  const onSortChanged = useCallback((newSort, newDirection) => {
    setSortDirection(newDirection);
    setSortType(newSort);
  }, []);
  useEffect(() => {
    dispatch(fetchMovies({ genre, sortType, sortDirection, page }));
  }, [genre, sortType, sortDirection, page, dispatch]);

  return (
    <div className='moviesPanel'>
      <div className='moviesPanelSelectors'>
        <GenreSelector currentGenre={genre} onGenreChanged={onGenreChanged} />
        <SortTypeSelector sortType={sortType} sortDirection={sortDirection} onSortChanged={onSortChanged} />
      </div>
      <ErrorBoundary>
        <MoviesList />
        <Pagination
          page={page}
          onPageDecrement={onPageDecrement}
          onPageIncrement={onPageIncrement}
        />
      </ErrorBoundary>
    </div>
  );
};

export default React.memo(MoviesPanel);
