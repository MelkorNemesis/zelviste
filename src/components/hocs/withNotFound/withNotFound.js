import React from "react";
import { branch, renderComponent } from "recompose";
import { NotFound } from "../../pages";

export const withNotFound = isNotFoundFn =>
  branch(isNotFoundFn, renderComponent(() => <NotFound />));
