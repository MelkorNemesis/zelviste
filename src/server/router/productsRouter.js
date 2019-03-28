import { Router } from "express";
import { celebrate, Joi } from "celebrate";

import { ProductsController } from "../controllers";
import { asyncHandlerWrapper } from "./helpers";

// -- router
export const router = new Router();

router.get(
  "/",
  celebrate({
    query: Joi.object().keys({
      seo_url: Joi.string()
    })
  }),
  asyncHandlerWrapper(ProductsController.getAll)
);
