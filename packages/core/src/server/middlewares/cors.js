import _cors from "cors";

import { CORS_WHITELIST } from "../security";

export const cors = _cors({
  origin: function(origin, callback) {
    if (CORS_WHITELIST.indexOf(origin) !== -1) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
});
