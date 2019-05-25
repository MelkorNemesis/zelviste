import { Router } from "express";
import { celebrate, Joi } from "celebrate";

import { CategoriesController } from "../../controllers/admin";
import { asyncHandlerWrapper } from "../helpers";

// -- router
const router = new Router();

router.get(
  "/",
  asyncHandlerWrapper(CategoriesController.getAll)
);

export default router;
