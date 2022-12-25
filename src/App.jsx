import './App.css';
import Footer from './footer/Footer.jsx';
import MovieDetailsHeader from './header/MovieDetailsHeader.jsx';
import Header from './header/Header.jsx';
import MoviesPanel from './moviesPanel/MoviesPanel.jsx';
import { useSearchParams } from 'react-router-dom';

const App = () => {
  const [searchParams] = useSearchParams();

  return (
    <>
      {searchParams.get('movie') ? (
        <MovieDetailsHeader movieId={searchParams.get('movie')} />
      ) : (
        <Header />
      )}
      <MoviesPanel />
      <Footer />
    </>
  );
};

export default App;
