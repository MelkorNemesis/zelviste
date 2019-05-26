import { Router } from "express";
import { requireAuth } from "../../middlewares";

// -- imports
import authRouter from "./authRouter";
import categoriesRouter from "./categoriesRouter";
import manufacturersRouter from "./manufacturersRouter";
import productsRouter from "./productsRouter";
import userRouter from "./userRouter";
import vatsRouter from "./vatsRouter";

// -- router
export const router = new Router();

// auth router
router.use("/auth", authRouter);

// require auth for all routers/routes to follow
router.use(requireAuth);

// user router
router.use("/user", userRouter);

// products router
router.use("/products", productsRouter);

// categories router
router.use("/categories", categoriesRouter);

// manufacturers router
router.use("/manufacturers", manufacturersRouter);

// vat router
router.use("/vats", vatsRouter);
