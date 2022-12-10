export const sendEditMovieRequest = (values, id) => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...values, id: id }),
  };
  return fetch('http://localhost:4000/movies', requestOptions);
};

export const sendAddMovieRequest = (values) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...values,
      vote_average: Number(values.vote_average),
      runtime: Number(values.runtime),
    }),
  };
  return fetch('http://localhost:4000/movies', requestOptions);
};

export const sendDeleteMovieRequest = (id) => {
  const requestOptions = {
    method: 'DELETE',
  };
  return fetch('http://localhost:4000/movies/' + id, requestOptions);
};
