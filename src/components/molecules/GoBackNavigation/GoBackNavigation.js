import React from "react";

import { Link, Text } from "../../atoms";
import { ArrowLeft } from "../../icons";

import "./GoBackNavigation.scss";

export const GoBackNavigation = ({ seoUrl, caption }) => (
  <div className="GoBackNavigation">
    <Link to={seoUrl} className="GoBackNavigation__link">
      <ArrowLeft className="GoBackNavigation__arrow" />
      <Text inline smaller mediumBold>
        {caption}
      </Text>
    </Link>
  </div>
);
