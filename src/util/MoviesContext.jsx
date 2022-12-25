import React from 'react';

export const MoviesContext = React.createContext({
  data: { totalAmount: 0, data: [], offset: 0, limit: 12 },
  genre: 'All',
  status: 'initial',
  selectedMovie: null,
});