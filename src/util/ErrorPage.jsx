import { useRouteError } from 'react-router-dom';
import React from 'react';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <h1>Router Error</h1>
      <p>{error.statusText || error.message}</p>
    </>
  );
};

export default React.memo(ErrorPage);
