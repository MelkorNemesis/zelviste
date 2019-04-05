import React from "react";
import { Helmet } from "react-helmet";

import { Platform } from "../../../consts";

export function Meta({ title }) {
  return (
    <Helmet
      defaultTitle={Platform.ESHOP_NAME_DOMAIN}
      titleTemplate={`%s | ${Platform.ESHOP_NAME_DOMAIN}`}
    >
      {title && <title>{title}</title>}
    </Helmet>
  );
}
