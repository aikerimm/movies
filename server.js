import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import bodyParser from 'body-parser';
import { Provider } from 'react-redux';
import store from './src/util/store.jsx';
import App from './src/App.jsx';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('build'));

app.get('*', (req, resp) => {
  const context = {};
  const content = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
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
