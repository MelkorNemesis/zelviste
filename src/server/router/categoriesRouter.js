import { Router } from "express";
import bodyParser from "body-parser";
import { celebrate, Joi } from "celebrate";
import boom from "boom";

// imports
import { CategoriesController } from "../controller";
import { CategoryRepository } from "../repository";
import { asyncHandlerWrapper } from "./helpers";

// middlewares
async function getActiveCategoryOrThrow(req, res, next) {
  if (req.params.id) {
    req.category = await CategoryRepository.getActiveById(req.params.id);
  }

  if (!req.category) {
    next(boom.notFound());
  }
  next();
}

// router
export const router = new Router();

router.get("/", asyncHandlerWrapper(CategoriesController.getAll));

router.get(
  "/:id",
  getActiveCategoryOrThrow,
  asyncHandlerWrapper(async req => {
    return req.category;
  })
);

router.get(
  "/:id/products",
  celebrate({
    query: Joi.object().keys({
      sort: Joi.string().valid("price.asc", "price.desc", "name.asc"),
      limit: Joi.number()
        .integer()
        .positive(),
      offset: Joi.number()
        .integer()
        .positive()
        .allow(0)
    })
  }),
  getActiveCategoryOrThrow,
  asyncHandlerWrapper(CategoriesController.getProducts)
);
