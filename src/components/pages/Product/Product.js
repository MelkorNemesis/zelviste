import React from "react";

import {
  Box,
  Separator,
  Text,
  Button,
  Spinner,
  Weight,
  Size,
  Manufacturer
} from "../../atoms";
import {
  GoBackNavigation,
  PropertyValueList,
  NumericStepper,
  ProductPrice,
  ProductAvailability,
  ProductImage,
  ProductOtherImages
} from "../../molecules";

import { Routes } from "../../../consts";

import "./Product.scss";

const { Item } = ProductOtherImages;

// -- sub components
const Loader = () => (
  <Box>
    <Spinner.Block>Načítám...</Spinner.Block>
  </Box>
);

const Err = () => <Box>Chyba při načítání kategorie.</Box>;

const Content = ({ data }) => {
  return (
    <Box>
      <GoBackNavigation
        caption={data.category.name}
        seoUrl={Routes.category(data.category.seo_url)}
      />
      <Text.Header h1>{data.name}</Text.Header>

      <ProductImage
        src="https://www.robimaus.cz/graphics/product/kokosovy-provaz-2-zilovy-397.jpg"
        alt="Název produktu"
      />

      <ProductOtherImages>
        <Item
          key={1}
          src="https://www.robimaus.cz/graphics/product/kokosovy-provaz-2-zilovy-397.jpg"
          alt="abc"
          isActive
        />
        <Item
          key={2}
          src="https://www.robimaus.cz/graphics/product/kokosovy-provaz-2-zilovy-397.jpg"
          alt="abc"
        />
        <Item
          key={3}
          src="https://www.robimaus.cz/graphics/product/kokosovy-provaz-2-zilovy-397.jpg"
          alt="abc"
        />
      </ProductOtherImages>

      <Separator small />

      <ProductPrice large price={data.price} priceBefore={data.priceBefore} />
      <ProductAvailability stockQuantity={data.stock_quantity} />

      <div className="Product__add-to-basket">
        <NumericStepper
          min={1}
          max={99}
          defaultValue={1}
          className="Product__quantity"
        />
        <Button.AddToBasket larger>Koupit</Button.AddToBasket>
      </div>

      <Separator small />

      <PropertyValueList
        data={[
          { property: "Kód zboží", value: data.code },
          { property: "EAN", value: data.ean },
          {
            property: "Výrobce / Dodavatel",
            value: <Manufacturer manufacturer={data.manufacturer} />
          }
        ]}
      />
      <Separator small />

      <Text.SubHeader h2>Popis</Text.SubHeader>

      <Text paragraph>
        Rukavice pro manipulaci se zvířaty <strong>Venom Defender</strong> jsou
        určeny pro manipulaci s jedovatými plazy jako ochrana pře kousnutím.
        Dalé je vhodné je použít při manipulaci se zvířaty které mohou kousnout
        nebo zranit drápy a pařáty.
      </Text>

      <Text paragraph>
        Své uplatnění najdou jak v zoologických zahradách tak u soukromých
        chovatelů při manipulaci se různými druhy zvířat. Například jedovatí
        hadi, ještěři, velcí hadi, vodní želvy, dravci, papoušci, šelmy, rejnoci
        a další. Unikátní 2 a 3 vrstvá vysoce výkonná technologie značek
        SuperFabric® - je navržena tak, aby poskytovaly nejvyšší úroveň ochrany.
      </Text>

      <Text.SubHeader h2>Vlastnosti</Text.SubHeader>

      <PropertyValueList
        data={[
          { property: "Délka", value: <Size millimeters={data.length} /> },
          { property: "Výška", value: <Size millimeters={data.height} /> },
          { property: "Šířka", value: <Size millimeters={data.width} /> },
          { property: "Váha", value: <Weight weight={data.weight} /> }
        ]}
      />
    </Box>
  );
};

// -- main component
export const Product = ({ data, status }) => {
  return (
    <div className="ProductPage">
      {status.error && <Err />}
      {status.pending && <Loader />}
      {status.done && <Content data={data} />}
    </div>
  );
};
