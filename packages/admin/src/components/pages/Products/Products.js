import React, { Fragment, useState, useEffect } from "react";
import { Text, Spinner, TableList } from "@eshop/admin_ui";

import * as API from "../../../api";

function mapProducts(product) {
  return [
    `#${product.id}`,
    product.name,
    product.manufacturer.name,
    product.category.name,
    <Fragment>
      {product.price}
      {product.priceBefore && <Text strike>{product.priceBefore}</Text>}
    </Fragment>,
    `${product.stock_quantity} ks`,
    "akce"
  ];
}

const ProductsTableList = ({ products }) => (
  <TableList
    headings={["ID", "Název", "Výrobce", "Kategorie", "Cena", "Skladem", ""]}
    rows={products.map(mapProducts)}
  />
);

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.getProducts().then(({ json }) => {
      setLoading(false);
      setProducts(json.data);
    });
  }, []);

  return (
    <Fragment>
      <Text.Header first h1>
        Produkty
      </Text.Header>

      {loading && <Spinner>Nahrávám produkty...</Spinner>}
      {!loading && <ProductsTableList products={products} />}
    </Fragment>
  );
};
