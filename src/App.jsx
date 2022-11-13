import './app.css';
import Header from './header/Header.jsx';
import Footer from './footer/Footer.jsx';
import MoviesPanel from './moviesPanel/MoviesPanel.jsx';
import ErrorBoundary from './util/ErrorBoundary.jsx';
import { useCallback, useState } from 'react';
import MovieDetailsHeader from './header/MovieDetailsHeader';

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const onMovieClick = useCallback((movie) => {
    setSelectedMovie(movie);
    window.scrollTo(0, 0);
  }, []);

  const onSearchClick = useCallback(() => {
    setSelectedMovie(null);
  }, []);

  return (
    <>
      {selectedMovie ? (
        <MovieDetailsHeader
          onSearchClick={onSearchClick}
          movie={selectedMovie}
        />
      ) : (
        <Header />
      )}
      <ErrorBoundary>
        <MoviesPanel onMovieClick={onMovieClick} />
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default App;
