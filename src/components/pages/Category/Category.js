import React, { Fragment, PureComponent } from "react";

import { sagaMiddleware } from "../../../redux/configureStore";
import { Box, Text, Separator, Button } from "../../atoms";
import { CategoryControls, ProductsGrid } from "../../organisms";
import { Product } from "../../molecules";

import { loadCategorySaga } from "../../../sagas";
import routes from "../../../consts/routes";

import "./Category.scss";

const sortOptionsDefault = [
  {
    name: "Názvu",
    active: true,
    link: "abc"
  },
  {
    name: "Nejnižší ceny",
    active: false,
    link: "def"
  },
  {
    name: "Nejvyšší ceny",
    active: false,
    link: "ghi"
  }
];

export class Category extends PureComponent {
  state = {
    sortOptions: [...sortOptionsDefault]
  };

  static serverFetch = match =>
    sagaMiddleware.run(loadCategorySaga, match.params.seo_url);

  componentDidMount() {
    const { match, status } = this.props;

    if (!status.done && !status.error) {
      Category.serverFetch(match);
    }
  }

  get loader() {
    return <Box>Načítám ...</Box>;
  }

  get error() {
    return <Box>Chyba při načítání kategorie.</Box>;
  }

  get content() {
    const { data } = this.props;

    return (
      <Fragment>
        <Box>
          <Text.Header h1 first>
            {data.name}
          </Text.Header>

          <Text.Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus ac quam sem. <strong>Phasellus nec ante eu</strong>{" "}
            ante scelerisque convallis. Proin sed tellus varius, vehicula
            lectus at, sollicitudin eros. Sed ut lectu.
          </Text.Paragraph>
        </Box>

        <Box>
          <CategoryControls
            productsCount={22}
            sortOptions={this.state.sortOptions}
          />

          <Separator />

          <ProductsGrid>
            <Product
              price={200}
              priceBefore={250}
              name="Kokosová skořápka s otvorem - Robimaus"
              seoUrl={routes.product("kokosova-skorapka")}
              isAvailable={true}
              imageURL="https://www.robimaus.cz/graphics/product/kokosova-slupka-405.jpg"
            />
            <Product
              price={200}
              priceBefore={250}
              name="Kokosová skořápka s otvorem - Robimaus"
              seoUrl={routes.product("kokosova-skorapka")}
              isAvailable={true}
              imageURL="https://www.robimaus.cz/graphics/product/kokosova-slupka-405.jpg"
            />
            <Product
              price={200}
              priceBefore={250}
              name="Kokosová skořápka s otvorem - Robimaus"
              seoUrl={routes.product("kokosova-skorapka")}
              isAvailable={true}
              imageURL="https://www.robimaus.cz/graphics/product/kokosova-slupka-405.jpg"
            />
            <Product
              price={200}
              priceBefore={250}
              name="Kokosová skořápka s otvorem - Robimaus"
              seoUrl={routes.product("kokosova-skorapka")}
              isAvailable={true}
              imageURL="https://www.robimaus.cz/graphics/product/kokosova-slupka-405.jpg"
            />
            <Product
              price={200}
              priceBefore={250}
              name="Kokosová skořápka s otvorem - Robimaus"
              seoUrl={routes.product("kokosova-skorapka")}
              isAvailable={false}
              imageURL="https://www.robimaus.cz/graphics/product/kokosova-slupka-405.jpg"
            />
          </ProductsGrid>

          <Separator small taller />

          <div className="Category__more">
            <Button.Secondary>Načíst dalších 8</Button.Secondary>
          </div>
        </Box>
      </Fragment>
    );
  }

  render() {
    const { status } = this.props;

    return (
      <div className="Category">
        {status.error && this.error}
        {status.pending && this.loader}
        {status.done && this.content}
      </div>
    );
  }
}
