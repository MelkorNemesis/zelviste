import { Router } from "express";

import { asyncHandlerWrapper } from "../helpers";
import { Manufacturer } from "../../model";
import { format } from "../../controllers/helpers";

// -- router
const router = new Router();

router.get(
  "/",
  asyncHandlerWrapper(async () => {
    const manufacturers = await Manufacturer.query().orderBy("name", "asc");
    return format.ok(manufacturers);
  })
);

export default router;
