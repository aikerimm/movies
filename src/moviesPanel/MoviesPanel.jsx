/* eslint-disable require-jsdoc */
import MoviesList from './MoviesList.jsx';
import './moviesPanel.css';
import ErrorBoundary from '../util/ErrorBoundary.jsx';
import Pagination from './Pagination.jsx';
import GenreSelector from './GenreSelector.jsx';
import SortTypeSelector from './SortTypeSelector.jsx';
import { useSearchParams } from 'react-router-dom';
import { fetchMovies } from '../util/moviesSlice.jsx';
import React from 'react';

const MoviesPanel = () => {
  const [searchParams] = useSearchParams();

  const getLinkForPageDecrement = () => {
    let newPage = (Number.parseInt(searchParams.get('page')) || 1) - 1;
    let newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('page', newPage);
    return '?' + newSearchParams.toString();
  };

  const getLinkForPageIncrement = () => {
    const newPage = (Number.parseInt(searchParams.get('page')) || 1) + 1;
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('page', newPage);
    return '?' + newSearchParams.toString();
  };

  const getLinkForGenreChange = (newGenre) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('genre', newGenre);
    return '?' + newSearchParams.toString();
  };

  const getLinkForSortChange = (newSort, newDirection) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('sortBy', newSort);
    newSearchParams.set('sortDir', newDirection);
    return '?' + newSearchParams.toString();
  };

  const movies = fetchMovies({
    query: searchParams.get('searchQuery'),
    genre: searchParams.get('genre'),
    sortType: searchParams.get('sortBy'),
    sortDirection: searchParams.get('sortDir'),
    page: searchParams.get('page'),
  });

  const currentGenre = searchParams.get('genre') || 'All';
  const currentSortType = searchParams.get('sortBy');
  const currentSortDirection = searchParams.get('sortDir') || 'asc';
  const currentPage = Number.parseInt(searchParams.get('page')) || 1;
  return (
    <div className='moviesPanel'>
      <div className='moviesPanelSelectors'>
        <GenreSelector
          currentGenre={currentGenre}
          onGenreChanged={getLinkForGenreChange}
        />
        <SortTypeSelector
          sortType={currentSortType}
          sortDirection={currentSortDirection}
          onSortChanged={getLinkForSortChange}
        />
      </div>
      <ErrorBoundary data={movies}>
        <MoviesList data={movies} />
        <Pagination
          page={currentPage}
          onPageDecrement={getLinkForPageDecrement}
          onPageIncrement={getLinkForPageIncrement}
        />
      </ErrorBoundary>
    </div>
  );
};

export default React.memo(MoviesPanel);
