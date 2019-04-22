import { AdminUser } from "../model";
import Boom from "boom";
import { sha512 } from "../utils";

export const adminAuthService = {
  async signIn({ email, password, req }) {
    const user = await AdminUser.query()
      .where("email", email)
      .first();

    if (!user) {
      throw Boom.notFound("Invalid email.");
    }

    // calculate hash for given password
    const hash = sha512({
      password,
      salt: user.salt
    });

    // compare calculated hash with database
    if (hash !== user.hash) {
      throw Boom.forbidden("Invalid password");
    }

    req.session.user = user;

    return user;
  },

  signOut({ req }) {
    delete req.session.user;
  }
};
