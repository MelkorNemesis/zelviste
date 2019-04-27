import expressSession from "express-session";
import sessionStorage from "express-sessions";

export const session = function({ redisClient }) {
  return expressSession({
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
  });
};
