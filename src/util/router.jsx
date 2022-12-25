import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import RedirectPage from './RedirectPage';
import App from '../App';

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
    children: [
      {
        path: '/search/:searchQuery',
        element: <App />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);