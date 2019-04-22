import { Router } from "express";
import { celebrate, Joi } from "celebrate";
import bodyParser from "body-parser";

import { asyncHandlerWrapper } from "../helpers";
import { adminAuthService } from "../../services";
import { format } from "../../controllers/helpers";

const router = new Router();

router.post(
  "/",
  bodyParser.json(),
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required()
    })
  }),
  asyncHandlerWrapper(async req => {
    const { email, password } = req.body;

    const user = await adminAuthService.signIn({ email, password, req });
    user.$pick(["id", "email", "firstname", "surname"]);

    return format.ok(user);
  })
);

export default router;
