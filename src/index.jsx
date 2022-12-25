import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './util/store.jsx';
import App from './App';
import { Switch, Route } from 'react-router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Switch>
        <Route
          path='/search'
          render={(props) => {
            <App {...props} />;
          }}
        />
      </Switch>
    </Provider>
  </React.StrictMode>
);
