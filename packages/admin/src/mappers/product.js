export function productToForm({
  name,
  seo_url,
  ean,
  code,
  discount,
  description,
  is_active,
  is_on_sale,
  width,
  height,
  length,
  weight,
  stock_quantity,
  manufacturer,
  category,
  vat,
  price_with_vat
}) {
  return {
    name,
    seo_url,
    ean,
    code,
    price_with_vat,
    discount,
    description,
    is_active,
    is_on_sale,
    width,
    height,
    length,
    weight,
    stock_quantity,
    id_manufacturer: manufacturer.id,
    id_category: category.id,
    id_vat: vat.id
  };
}
