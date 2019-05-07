import { Router } from "express";

import { asyncHandlerWrapper } from "../helpers";
import { ProductsController } from "../../controllers/admin";

const router = new Router();

router.get("/", asyncHandlerWrapper(ProductsController.getAll));
router.get("/:id", asyncHandlerWrapper(ProductsController.getById));

export default router;
