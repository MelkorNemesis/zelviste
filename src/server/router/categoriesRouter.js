import { Router } from "express";

import { CategoriesController } from "../controller";
import { asyncHandlerWrapper } from "./helpers";

export const router = new Router();

router.get("/", asyncHandlerWrapper(CategoriesController.getAll));
