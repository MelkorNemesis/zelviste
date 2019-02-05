import express from "express";
import morgan from "morgan";
import React from "react";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";

import db from "./server/db";
import { CategoriesRouter } from "./server/router";
import { Layout } from "./Layout";
import configureStore, { sagaMiddleware } from "./redux/configureStore";
import { startupSaga } from "./sagas";

// setup knex & objection
db.initDatabase();

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

server
  .disable("x-powered-by")
  .use(morgan("dev"))
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))

  .use("/api/categories", CategoriesRouter)

  // server-side rendering fallback
  .get("/*", (req, res) => {
    const context = {};
    const store = configureStore();
    const task = sagaMiddleware.run(startupSaga);

    task.toPromise().then(() => {
      const reduxState = store.getState();

      const markup = renderToString(
        <StaticRouter context={context} location={req.url}>
          <Provider store={store}>
            <Layout />
          </Provider>
        </StaticRouter>
      );

      if (context.url) {
        res.redirect(context.url);
      } else {
        res.status(200).send(
          `<!doctype html>
                <html lang="">
                <head>
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta charset="utf-8" />
                    <title>Welcome to Razzle</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    ${
                      assets.client.css
                        ? `<link rel="stylesheet" href="${assets.client.css}">`
                        : ""
                    }
                    <script>
                        window.__REDUX_DATA__ = ${JSON.stringify(
                          reduxState,
                          null,
                          4
                        )}
                    </script>
                    ${
                      process.env.NODE_ENV === "production"
                        ? `<script src="${assets.client.js}" defer></script>`
                        : `<script src="${
                            assets.client.js
                          }" defer crossorigin></script>`
                    }
                </head>
                <body>
                    <div id="root">${markup}</div>
                </body>
            </html>`
        );
      }
    });
  });

export default server;
