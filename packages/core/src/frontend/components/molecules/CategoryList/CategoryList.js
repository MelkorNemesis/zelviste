import React from "react";
import cx from "classnames";

import { ButtonLink } from "../../atoms";
import { Routes } from "../../../consts";

import "./CategoryList.scss";

export const CategoryList = ({ categories, className, ...rest }) => (
  <div className={cx(className, "CategoryList")} {...rest}>
    {categories.map(c => (
      <ButtonLink.Category
        className={"CategoryList--button"}
        key={c.id}
        to={Routes.category(c.seo_url)}
      >
        {c.name}
      </ButtonLink.Category>
    ))}
  </div>
);
