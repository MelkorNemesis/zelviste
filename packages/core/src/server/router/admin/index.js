import { Router } from "express";
import { requireAuth } from "../../middlewares";

// -- imports
import authRouter from "./authRouter";
import userRouter from "./userRouter";

// -- router
export const router = new Router();

// auth router
router.use("/auth", authRouter);

// require auth for all routes to follow
router.use(requireAuth);

// user router
router.use("/user", userRouter);
