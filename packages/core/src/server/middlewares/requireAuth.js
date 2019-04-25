import boom from "boom";

// -- middlewares
export function requireAuth(req, res, next) {
  if (req.session && req.session.user) {
    return next();
  }
  next(boom.unauthorized());
}
