import React, { Fragment } from "react";
import { Text, Spinner, TableList, ProductPrice, Err } from "@eshop/admin_ui";

import * as API from "../../../api";
import { useFetchStatus } from "@eshop/admin_ui";

function mapProducts({
  id,
  name,
  code,
  ean,
  manufacturer,
  category,
  price,
  priceBefore,
  stock_quantity
}) {
  return [
    <strong>#{id}</strong>,
    name,
    code,
    ean,
    manufacturer.name,
    category.name,
    <ProductPrice price={price} priceBefore={priceBefore} />,
    `${stock_quantity} ks`,
    "..."
  ];
}

const ProductsTableList = ({ products }) => (
  <TableList
    headings={[
      "ID",
      "Název",
      "Kód",
      "EAN",
      "Výrobce",
      "Kategorie",
      "Cena",
      "Skladem",
      ""
    ]}
    rows={products.map(mapProducts)}
  />
);

export const Products = () => {
  const { loading, done, error, result } = useFetchStatus(API.getProducts);
  const products = (result && result.data) || [];

  return (
    <Fragment>
      <Text.Header first h1>
        Produkty
      </Text.Header>

      {loading && <Spinner>Nahrávám produkty...</Spinner>}
      {error && <Err>Chyba při načítání produktů: {error.message}</Err>}
      {done && <ProductsTableList products={products} />}
    </Fragment>
  );
};
