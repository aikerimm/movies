import './App.css';
import Header from './header/Header.jsx';
import Footer from './footer/Footer.jsx';
import MoviesPanel from './moviesPanel/MoviesPanel.jsx';
import ErrorBoundary from './util/ErrorBoundary.jsx';

const App = () => (
  <>
    <Header />
    <ErrorBoundary>
      <MoviesPanel />
    </ErrorBoundary>
    <Footer />
  </>
);

export default App;
