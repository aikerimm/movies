import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './footer/Footer.jsx';
import { useSelector } from 'react-redux';
import { getSelectedMovie } from './util/moviesSlice.jsx';
import MovieDetailsHeader from './header/MovieDetailsHeader.jsx';
import Header from './header/Header.jsx';
import MoviesPanel from './moviesPanel/MoviesPanel.jsx';

const App = () => {
  const selectedMovie = useSelector(getSelectedMovie);

  return (
    <Routes>
      <Route
        path='/search'
        element={
          <>
            {selectedMovie ? <MovieDetailsHeader /> : <Header />} 
            <MoviesPanel />
            <Footer />
          </>
        }
      />
    </Routes>
  );
};

export default App;
