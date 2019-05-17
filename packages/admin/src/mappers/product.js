export function productToForm({
  name,
  seo_url,
  ean,
  code,
  price,
  vat,
  discount,
  description,
  is_active,
  is_on_sale,
  width,
  height,
  length,
  weight,
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
    description,
    is_active,
    is_on_sale,
    width,
    height,
    length,
    weight
  };
}
