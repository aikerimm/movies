import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getMoviesData } from './moviesSlice.jsx';

const ErrorBoundary = (props) => {
  const movies = useSelector(getMoviesData);
  const FallbackText = () => <h2>Oops, no movies were found.</h2>;

  let isOk = movies.data.length > 0;
  return <>{isOk ? props.children : <FallbackText />}</>;
};

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default React.memo(ErrorBoundary);
