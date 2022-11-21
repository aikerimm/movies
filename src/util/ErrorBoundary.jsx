import React from 'react';
import AllMovies from './AllMovies.jsx';
import PropTypes from 'prop-types';

const ErrorBoundary = (props) => {
  const FallbackText = () => (
    <h2>Oops, something went wrong. Please try again later.</h2>
  );

  let isOk = AllMovies.length > 0;
  return <>{isOk ? props.children : <FallbackText />}</>;
};

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default React.memo(ErrorBoundary);
