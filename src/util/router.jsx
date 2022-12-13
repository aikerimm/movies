import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import RedirectPage from './RedirectPage';
import { fetchMovie, fetchMovies } from './moviesSlice';
import App from '../App';

const moviesLoader = ({ params, request }) => {
  const url = new URL(request.url);
  return {
    moviesThunk: fetchMovies({
      query: params.searchQuery,
      genre: url.searchParams.get('genre'),
      sortType: url.searchParams.get('sortBy'),
      sortDirection: url.searchParams.get('sortDir'),
      page: url.searchParams.get('page'),
    }),
    movieThunk:
      url.searchParams.get('movie') &&
      fetchMovie(url.searchParams.get('movie')),
  };
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RedirectPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/search',
    element: <App />,
    errorElement: <ErrorPage />,
    loader: moviesLoader,
    children: [
      {
        path: '/search/:searchQuery',
        element: <App />,
        errorElement: <ErrorPage />,
        loader: moviesLoader,
      },
    ],
  },
]);