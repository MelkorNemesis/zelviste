import * as HttpStatus from "http-status-codes";
import { isCelebrate } from "celebrate";

export function clientErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { statusCode, message, error } = err.output.payload;
    res.status(statusCode).json({
      error,
      message,
      statusCode
    });
  } else if (isCelebrate(err)) {
    res.status(HttpStatus.BAD_REQUEST).json({
      error: err.message,
      statusCode: HttpStatus.BAD_REQUEST
    });
  } else {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      error: err.message,
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR
    });
  }
  next(err);
}
