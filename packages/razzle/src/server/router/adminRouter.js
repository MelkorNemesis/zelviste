import { Router } from "express";
// import { celebrate, Joi } from "celebrate";
// import boom from "boom";

// -- imports
import { format } from "../controllers/helpers";
import { asyncHandlerWrapper } from "./helpers";

// -- middlewares

// -- router
export const router = new Router();

router.get(
  "/",
  asyncHandlerWrapper(async function get(req) {
    return format.ok({ hovno: 6 });
  })
);
