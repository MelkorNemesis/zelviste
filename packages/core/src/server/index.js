import express from "express";
import morgan from "morgan";
import redis from "redis";
import cookieParser from "cookie-parser";

import db from "./db";
import { CategoriesRouter, ProductsRouter, AdminRouter } from "./router";
import { serverRender } from "./handlers";
import {
  serverErrorHandler,
  clientErrorHandler,
  cors,
  session
} from "./middlewares";

// setup redis client
const redisClient = redis.createClient(6379, "localhost");

// setup knex & objection
db.init();

const index = express();
index
  .disable("x-powered-by")
  .use(cors)
  .use(cookieParser())
  .use(
    session({
      redisClient
    })
  )
  .use(morgan("dev"))
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))

  // frontend routes
  .use("/api/categories", CategoriesRouter)
  .use("/api/products", ProductsRouter)

  // admin router
  .use("/admin/api", AdminRouter)

  // server-side rendering fallback
  .get("/*", serverRender)

  // error handlers
  .use(serverErrorHandler)
  .use(clientErrorHandler);

export default index;
