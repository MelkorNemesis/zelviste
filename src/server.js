import express from "express";
import morgan from "morgan";
import redis from "redis";
import session from "express-session";
import sessionStorage from "express-sessions";
import cookieParser from "cookie-parser";

import db from "./server/db";
import { CategoriesRouter, ProductsRouter } from "./server/router";
import { serverRender } from "./server/handlers";
import { serverErrorHandler, clientErrorHandler } from "./server/middlewares";

// setup redis client
const redisClient = redis.createClient(6379, "localhost");

// setup knex & objection
db.initDatabase();

const server = express();

server
  .disable("x-powered-by")
  .use(cookieParser())
  .use(
    session({
      secret: "a4f8071f-c873-4447-8ee2",
      cookie: { maxAge: 31 * 24 * 60 * 60 * 1000 }, // 31 days
      resave: true,
      saveUninitialized: true,
      store: new sessionStorage({
        storage: "redis",
        instance: redisClient,
        host: "localhost",
        port: 6379,
        collection: "sessions",
        expire: 31 * 24 * 60 * 60 // 31 days
      })
    })
  )
  .use(morgan("dev"))
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))

  // routes
  .use("/api/categories", CategoriesRouter)
  .use("/api/products", ProductsRouter)

  // server-side rendering fallback
  .get("/*", serverRender)

  // error handlers
  .use(serverErrorHandler)
  .use(clientErrorHandler);

export default server;
