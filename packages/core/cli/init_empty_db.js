import { run } from "./helpers";
import {
  Product,
  AdminUser,
  Category,
  Manufacturer,
  Vat
} from "../src/server/model";
import { sha512, getRandomString } from "../src/server/utils";

run(async () => {
  // -- admin user
  const salt = getRandomString();
  const hash = sha512({ password: "Melkor1990", salt });

  await AdminUser.query().insert({
    firstname: "Michal",
    surname: "Ševčík",
    email: "sevcik.mi@gmail.com",
    salt,
    hash
  });

  // -- categories

  const category = {
    name: "Granule",
    seo_url: "granule",
    is_active: true,
    description: "lorem ipsum"
  };

  const categoryDb = await Category.query().insert(category);

  // -- manufacturer

  const manufacturer = {
    name: "Nobby"
  };

  const manufacturerDb = await Manufacturer.query().insert(manufacturer);

  // -- vat

  const vat_0 = {
    value: 0
  };
  await Vat.query().insert(vat_0);

  const vat_15 = {
    value: 15
  };
  await Vat.query().insert(vat_15);

  const vat_21 = {
    value: 21
  };
  const vat21Db = await Vat.query().insert(vat_21);

  // -- products

  const product = {
    name: "Granule lorem ipsum 50x40x20",
    seo_url: "granule-lorem",
    ean: "ean123456",
    code: "code123",
    description: "lorem ipsum dolor sit amet",
    description_ascii: "lorem ipsum",
    price_without_vat: 200,
    discount: 50,
    is_active: true,
    is_on_sale: false,
    weight: 100,
    width: 20,
    length: 20,
    height: 20,
    id_category: categoryDb.id,
    stock_quantity: 20,
    id_manufacturer: manufacturerDb.id,
    id_vat: vat21Db.id
  };

  await Product.query().insert(product);
});
