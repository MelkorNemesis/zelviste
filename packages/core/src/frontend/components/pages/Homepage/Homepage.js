import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { Box, Text } from "../../atoms";
import { CategoryList, Product } from "../../molecules";
import { ProductsSlider } from "../../organisms";
import routes from "../../../consts/routes";

export class Homepage extends PureComponent {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object)
  };

  render() {
    return (
      <div className="Homepage">
        <Box>
          <Text.Header h2 first>
            Nové produkty
          </Text.Header>

          <ProductsSlider>
            <Product
              price={200}
              priceBefore={250}
              name="Kokosová skořápka s otvorem - Abcdef"
              seoUrl={routes.product("kokosova-skorapka")}
              stockQuantity={10}
              imageURL="https://www.robimaus.cz/graphics/product/ukryt-pro-plazy-25cm-z-kokosoveho-vlakna-452.jpg"
              showButton={false}
            />
            <Product
              price={200}
              priceBefore={250}
              name="Kokosová skořápka s otvorem - Abcdef"
              seoUrl={routes.product("kokosova-skorapka")}
              stockQuantity={10}
              imageURL="https://www.robimaus.cz/graphics/product/ukryt-pro-plazy-25cm-z-kokosoveho-vlakna-452.jpg"
              showButton={false}
            />
            <Product
              price={200}
              priceBefore={250}
              name="Kokosová skořápka s otvorem - Abcdef"
              seoUrl={routes.product("kokosova-skorapka")}
              stockQuantity={10}
              imageURL="https://www.robimaus.cz/graphics/product/ukryt-pro-plazy-25cm-z-kokosoveho-vlakna-452.jpg"
              showButton={false}
            />
            <Product
              price={200}
              priceBefore={250}
              name="Kokosová skořápka s otvorem - Abcdef"
              seoUrl={routes.product("kokosova-skorapka")}
              stockQuantity={10}
              imageURL="https://www.robimaus.cz/graphics/product/ukryt-pro-plazy-25cm-z-kokosoveho-vlakna-452.jpg"
              showButton={false}
            />
            <Product
              price={200}
              priceBefore={250}
              name="Kokosová skořápka s otvorem - Abcdef"
              seoUrl={routes.product("kokosova-skorapka")}
              stockQuantity={10}
              imageURL="https://www.robimaus.cz/graphics/product/ukryt-pro-plazy-25cm-z-kokosoveho-vlakna-452.jpg"
              showButton={false}
            />
          </ProductsSlider>
        </Box>

        <Box>
          <Text.Header h2 first>
            Kdo jsme?
          </Text.Header>
        </Box>

        <Box>
          <Text.Header h2 first>
            Kategorie
          </Text.Header>

          <CategoryList categories={this.props.categories} />
        </Box>

        <Box>
          <Text.Header h2 first>
            Výprodej
          </Text.Header>

          <ProductsSlider>
            <Product
              price={200}
              priceBefore={250}
              name="Kokosová skořápka s otvorem - Robimaus"
              seoUrl={routes.product("kokosova-skorapka")}
              stockQuantity={10}
              imageURL="https://www.robimaus.cz/graphics/product/kokosova-slupka-405.jpg"
              showButton={false}
            />
            <Product
              price={200}
              priceBefore={250}
              name="Kokosová skořápka s otvorem - Robimaus"
              seoUrl={routes.product("kokosova-skorapka")}
              stockQuantity={10}
              imageURL="https://www.robimaus.cz/graphics/product/kokosova-slupka-405.jpg"
              showButton={false}
            />
            <Product
              price={200}
              priceBefore={250}
              name="Kokosová skořápka s otvorem - Robimaus"
              seoUrl={routes.product("kokosova-skorapka")}
              stockQuantity={10}
              imageURL="https://www.robimaus.cz/graphics/product/kokosova-slupka-405.jpg"
              showButton={false}
            />
            <Product
              price={200}
              priceBefore={250}
              name="Kokosová skořápka s otvorem - Robimaus"
              seoUrl={routes.product("kokosova-skorapka")}
              stockQuantity={10}
              imageURL="https://www.robimaus.cz/graphics/product/ukryt-pro-plazy-25cm-z-kokosoveho-vlakna-452.jpg"
              showButton={false}
            />
            <Product
              price={200}
              priceBefore={250}
              name="Kokosová skořápka s otvorem - Robimaus"
              seoUrl={routes.product("kokosova-skorapka")}
              stockQuantity={10}
              imageURL="https://www.robimaus.cz/graphics/product/ukryt-pro-plazy-25cm-z-kokosoveho-vlakna-452.jpg"
              showButton={false}
            />
          </ProductsSlider>
        </Box>
      </div>
    );
  }
}
