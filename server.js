import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import bodyParser from 'body-parser';
import App from './src/App.jsx';
import { MoviesContext } from './src/util/MoviesContext.jsx';
import { Routes, Route } from 'react-router-dom';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('build'));
global.syncRequest = require('sync-request');

app.get('*', (req, resp) => {
  const context = {};

  const content = ReactDOMServer.renderToString(
    <MoviesContext.Provider>
      <StaticRouter location={req.url} context={context}>
        <Routes>
          <Route exact path='/' element={<App />} />
          <Route path='/search' element={<App />} />
        </Routes>
      </StaticRouter>
    </MoviesContext.Provider>
  );
  const html = `
    <html>
    <head>
    <link rel="stylesheet" href="main.css">
    </head>
    <body>
    <div id='root'>
      ${content}
    </div>
    </body>
    </html>
  `;
  resp.send(html);
});

app.listen(PORT, () => {
  console.log('running');
});
