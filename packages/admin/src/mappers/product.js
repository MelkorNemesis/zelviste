export function productToForm({
  name,
  seo_url,
  ean,
  code,
  price,
  vat,
  discount,
  description,
  ...product
}) {
  return {
    name,
    seo_url,
    ean,
    code,
    price,
    vat,
    discount,
    description
  };
}
