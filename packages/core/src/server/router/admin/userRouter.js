import { Router } from "express";
import { asyncHandlerWrapper } from "../helpers";
import { format } from "../../controllers/helpers";

const router = new Router();

router.get(
  "/",
  asyncHandlerWrapper(async req => {
    return format.ok(req.session.user);
  })
);

export default router;
