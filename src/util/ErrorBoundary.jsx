import React from 'react';
import PropTypes from 'prop-types';

const ErrorBoundary = (props) => {
  const FallbackText = () => <h2>Oops, no movies were found.</h2>;

  let isOk = props.data.data.length > 0;
  return <>{isOk ? props.children : <FallbackText />}</>;
};

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  data: PropTypes.object
};

export default React.memo(ErrorBoundary);
