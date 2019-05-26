import { Router } from "express";

import { asyncHandlerWrapper } from "../helpers";
import { Vat } from "../../model";
import { format } from "../../controllers/helpers";

// -- router
const router = new Router();

router.get(
  "/",
  asyncHandlerWrapper(async () => {
    const vats = await Vat.query().orderBy("value", "desc");
    return format.ok(vats);
  })
);

export default router;
