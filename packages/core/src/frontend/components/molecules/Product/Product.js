import React from "react";
import cx from "classnames";

import { Link, ButtonLink, Text } from "../../atoms";
import { ProductPrice } from "../index";

import "./Product.scss";
import { ProductAvailability } from "..";

export const Product = ({
  price,
  priceBefore,
  name,
  seoUrl,
  stockQuantity,
  imageURL,
  className,
  showButton = true,
  ...rest
}) => (
  <div className={cx("Product", className)} {...rest}>
    <Link to={seoUrl}>
      <img src={imageURL} alt={name} className="Product__image" />
    </Link>

    <Link.Product to={seoUrl} className="Product__name">
      <Text h2 inline>
        {name}
      </Text>
    </Link.Product>

    <ProductPrice
      price={price}
      priceBefore={priceBefore}
      className="Product__price"
    />

    <ProductAvailability
      stockQuantity={stockQuantity}
      className="Product__availability"
    />

    {showButton && (
      <ButtonLink.Next className="Product__more" to={seoUrl}>
        Více informací
      </ButtonLink.Next>
    )}
  </div>
);
