import React, { Fragment, useState, useEffect } from "react";
import { Text } from "@eshop/admin_ui";

import * as API from "../../../api";

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.getProducts().then(({ json }) => setProducts(json.data));
  }, []);

  return (
    <Fragment>
      <Text.Header first h1>
        Produkty
      </Text.Header>

      {products.map(p => (
        <div key={p.id}>{p.name}</div>
      ))}
    </Fragment>
  );
};
