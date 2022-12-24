import './app.css';
import Header from './header/Header.jsx';
import Footer from './footer/Footer.jsx';
import MoviesPanel from './moviesPanel/MoviesPanel.jsx';
import MovieDetailsHeader from './header/MovieDetailsHeader';
import { useSelector } from 'react-redux';
import { getSelectedMovie } from './util/moviesSlice';

const App = () => {
  const selectedMovie = useSelector(getSelectedMovie);
  console.log('render app ' + selectedMovie);

  return (
    <>
      {selectedMovie ? <MovieDetailsHeader /> : <Header />}
      <MoviesPanel />
      <Footer />
    </>
  );
};

export default App;
