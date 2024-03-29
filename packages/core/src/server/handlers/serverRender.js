import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import { Provider } from "react-redux";
import Helmet from "react-helmet";
import * as HttpStatus from "http-status-codes";

import configureStore, { sagaMiddleware } from "../../frontend/redux/configureStore";
import { bootstrapSaga } from "../../frontend/redux/sagas";
import { Layout } from "../../frontend/Layout";
import { routes } from "../../frontend/shared/routes";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

export async function serverRender(req, res) {
  const context = {};
  const store = configureStore();

  // run & wait to finish bootstrap task
  const bootstrapSagaTask = sagaMiddleware.run(bootstrapSaga);
  const bootstrapSagaPromise = bootstrapSagaTask.toPromise();
  await bootstrapSagaPromise;

  // find & run & wait to finish route's serverFetch method
  const dataRequirements = routes
    .map(route => ((route.match = matchPath(req.path, route)), route))
    .filter(route => route.match)
    .filter(route => route.component.serverFetch)
    .map(route =>
      route.component.serverFetch(route.match, {
        query: req.query,
        cookie: req.headers.cookie
      })
    );

  await Promise.all(dataRequirements);

  // get redux state
  const reduxState = store.getState();

  // get html markup
  const markup = renderToString(
    <StaticRouter context={context} location={req.url}>
      <Provider store={store}>
        <Layout />
      </Provider>
    </StaticRouter>
  );

  const helmetData = Helmet.renderStatic();

  if (context.url) {
    res.redirect(context.url);
  } else {
    res.status(context.code || HttpStatus.OK).send(
      `<!doctype html>
        <html lang="">
        <head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1">
          ${helmetData.title.toString()}
          ${helmetData.meta.toString()}
          ${
            assets.client.css
              ? `<link rel="stylesheet" href="${assets.client.css}">`
              : ""
          }
          <script>
            window.__REDUX_DATA__ = ${JSON.stringify(reduxState, null, 4)}
          </script>
          ${
            process.env.NODE_ENV === "production"
              ? `<script src="${assets.client.js}" defer></script>`
              : `<script src="${assets.client.js}" defer crossorigin></script>`
          }
        </head>
        <body>
          <div id="root">${markup}</div>
        </body>
    </html>`
    );
  }
}
