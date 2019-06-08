import React from "react";
import useReactRouter from "use-react-router";
import { Err, Spinner, useFetchStatus } from "@eshop/admin_ui";

// import
import { ProductForm } from "./ProductForm";
import * as API from "../../../api";
import { productToForm } from "../../../mappers";
import { flattenCategories } from "../../../utils";

export const Product = () => {
  // prettier-ignore
  const { match: { params: { id } } } = useReactRouter();

  // fetch data
  const { loading, error, result } = useFetchStatus(() => {
    return Promise.all([
      API.getProductById({ id }),
      API.getCategories(),
      API.getManufacturers(),
      API.getVats()
    ]);
  })([id]);

  if (loading) return <Spinner>Nahrávám produkt...</Spinner>;
  if (error) return <Err>Chyba při načítání produktu: {error.message}</Err>;
  if (!result) return null;

  // destructure fetched data
  const [
    productResponse,
    categoriesResponse,
    manufacturersResponse,
    vatsResponse
  ] = result;

  const product = productResponse.json.data;
  const formData = productToForm(product);
  const categories = Array.from(
    flattenCategories(categoriesResponse.json.data)
  );
  const manufacturers = manufacturersResponse.json.data;
  const vats = vatsResponse.json.data;

  const handleSubmit = values => {
    console.log({ values });
  };

  return (
    <ProductForm
      formData={formData}
      handleSubmit={handleSubmit}
      product={product}
      manufacturers={manufacturers}
      categories={categories}
      vats={vats}
    />
  );
};
