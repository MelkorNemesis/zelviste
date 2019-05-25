import _cors from "cors";

import { CORS_WHITELIST } from "../security";

const env = process.env.NODE_ENV;

export const cors = _cors({
  origin: function(origin, callback) {
    if (
      CORS_WHITELIST.indexOf(origin) !== -1 ||
      // allow CORS for development mode
      // when no origin is set (Postman, ...)
      (env === "development" && !origin)
    ) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
});
