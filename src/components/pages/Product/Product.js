import React from "react";

import { Box, Separator, Text, Button } from "../../atoms";
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

export const Product = () => {
  return (
    <div className="ProductPage">
      <Box>
        <GoBackNavigation
          caption="Osvětlení terárií a akvárií"
          seoUrl={Routes.category("abc")}
        />
        <Text.Header h1>
          Topná deska 8W střední tropic Heat Wave Exo Terra Hagen
        </Text.Header>

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

        <ProductPrice large price={1296} priceBefore={1350} />
        <ProductAvailability isAvailable />

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
            { property: "Kód zboží", value: "50101" },
            { property: "EAN", value: "81573301225" },
            {
              property: "Výrobce / Dodavatel",
              value: "Animal handling prducts"
            }
          ]}
        />
        <Separator small />

        <Text.SubHeader h2>Popis</Text.SubHeader>

        <Text paragraph>
          Rukavice pro manipulaci se zvířaty <strong>Venom Defender</strong>{" "}
          jsou určeny pro manipulaci s jedovatými plazy jako ochrana pře
          kousnutím. Dalé je vhodné je použít při manipulaci se zvířaty které
          mohou kousnout nebo zranit drápy a pařáty.
        </Text>

        <Text paragraph>
          Své uplatnění najdou jak v zoologických zahradách tak u soukromých
          chovatelů při manipulaci se různými druhy zvířat. Například jedovatí
          hadi, ještěři, velcí hadi, vodní želvy, dravci, papoušci, šelmy,
          rejnoci a další. Unikátní 2 a 3 vrstvá vysoce výkonná technologie
          značek SuperFabric® - je navržena tak, aby poskytovaly nejvyšší úroveň
          ochrany.
        </Text>

        <Text.SubHeader h2>Vlastnosti</Text.SubHeader>

        <PropertyValueList
          data={[
            { property: "Délka", value: "46cm" },
            { property: "Výška", value: "46cm" },
            { property: "Šířka", value: "46cm" },
            { property: "Váha", value: "46cm" }
          ]}
        />
      </Box>
    </div>
  );
};
