import express from "express";
import morgan from "morgan";

import db from "./server/db";
import { CategoriesRouter } from "./server/router";
import { serverRender } from "./server/handlers";
import { serverErrorHandler, clientErrorHandler } from "./server/middlewares";

// setup knex & objection
db.initDatabase();

const server = express();

server
  .disable("x-powered-by")
  .use(morgan("dev"))
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))

  // routes
  .use("/api/categories", CategoriesRouter)

  // server-side rendering fallback
  .get("/*", serverRender)

  // error handlers
  .use(serverErrorHandler)
  .use(clientErrorHandler);

export default server;
