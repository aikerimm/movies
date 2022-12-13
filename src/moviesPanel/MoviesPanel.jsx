/* eslint-disable require-jsdoc */
import React, { useCallback } from 'react';
import MoviesList from './MoviesList.jsx';
import './moviesPanel.css';
import ErrorBoundary from '../util/ErrorBoundary.jsx';
import Pagination from './Pagination.jsx';
import GenreSelector from './GenreSelector.jsx';
import SortTypeSelector from './SortTypeSelector.jsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useLoaderData, useSearchParams } from 'react-router-dom';

const MoviesPanel = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onPageDecrement = useCallback(() => {
    let newPage = (Number.parseInt(searchParams.get('page')) || 1) - 1;
    if (newPage < 1) return;
    let newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('page', newPage);
    setSearchParams(newSearchParams);
  }, [searchParams, setSearchParams]);
  const onPageIncrement = useCallback(() => {
    let newPage = (Number.parseInt(searchParams.get('page')) || 1) + 1;
    let newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('page', newPage);
    setSearchParams(newSearchParams);
  }, [searchParams, setSearchParams]);

  const onGenreChanged = useCallback(
    (newGenre) => {
      let newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set('genre', newGenre);
      setSearchParams(newSearchParams);
    },
    [searchParams, setSearchParams]
  );

  const onSortChanged = useCallback(
    (newSort, newDirection) => {
      let newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set('sortBy', newSort);
      newSearchParams.set('sortDir', newDirection);
      setSearchParams(newSearchParams);
    },
    [searchParams, setSearchParams]
  );

  const dispatch = useDispatch();
  const thunks = useLoaderData();
  useEffect(() => {
    thunks.moviesThunk && dispatch(thunks.moviesThunk);
    thunks.movieThunk && dispatch(thunks.movieThunk);
  }, [dispatch, thunks]);

  const currentGenre = searchParams.get('genre') || 'All';
  const currentSortType = searchParams.get('sortBy');
  const currentSortDirection = searchParams.get('sortDir') || 'asc';
  const currentPage = Number.parseInt(searchParams.get('page')) || 1;

  return (
    <div className='moviesPanel'>
      <div className='moviesPanelSelectors'>
        <GenreSelector
          currentGenre={currentGenre}
          onGenreChanged={onGenreChanged}
        />
        <SortTypeSelector
          sortType={currentSortType}
          sortDirection={currentSortDirection}
          onSortChanged={onSortChanged}
        />
      </div>
      <ErrorBoundary>
        <MoviesList />
        <Pagination
          page={currentPage}
          onPageDecrement={onPageDecrement}
          onPageIncrement={onPageIncrement}
        />
      </ErrorBoundary>
    </div>
  );
};

export default React.memo(MoviesPanel);
