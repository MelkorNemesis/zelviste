import express from "express";
import morgan from "morgan";
import redis from "redis";
import session from "express-session";
import sessionStorage from "express-sessions";
import cookieParser from "cookie-parser";
import cors from 'cors'

import db from "./db";
import { CategoriesRouter, ProductsRouter, AdminRouter } from "./router";
import { serverRender } from "./handlers";
import { serverErrorHandler, clientErrorHandler } from "./middlewares";

// setup redis client
const redisClient = redis.createClient(6379, "localhost");

// setup knex & objection
db.initDatabase();

const index = express();

index
  .disable("x-powered-by")
  // TODO: temporary solution, limit to known hosts
  .use(cors())
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
