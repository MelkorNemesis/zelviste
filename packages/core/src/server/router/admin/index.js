import { Router } from "express";
import boom from "boom";

// -- imports
import authRouter from "./authRouter";
import userRouter from "./userRouter";

// -- middlewares
function requireAuth(req, res, next) {
  if (req.session && req.session.user) {
    return next();
  }
  next(boom.unauthorized());
}

// -- router
export const router = new Router();

// auth router
router.use("/auth", authRouter);

// require auth for all routes to follow
router.use(requireAuth);

// user router
router.use("/user", userRouter);
