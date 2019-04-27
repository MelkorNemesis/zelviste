import { Router } from "express";

import { asyncHandlerWrapper } from "../helpers";
import { ProductsController } from "../../controllers/admin";

const router = new Router();

router.get("/", asyncHandlerWrapper(ProductsController.getAll));

export default router;
