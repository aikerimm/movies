import { useState, useEffect } from 'react';

export const useMoviesCounter = (movies) => {
  const [counter, setCounter] = useState('0 movies found');

  useEffect(() => {
    let counterMessage =
      movies.length + (movies.length == 1 ? ' movie found' : ' movies found');
    setCounter(counterMessage);
  }, [movies]);

  return counter;
};
