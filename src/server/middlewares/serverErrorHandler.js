import * as colors from "colors/safe";

export function serverErrorHandler(err, req, res, next) {
  console.log(colors.bgRed("// -- <Error>"));
  console.log(err);
  console.log(colors.bgRed("// -- </Error>"));

  return next(err);
}
