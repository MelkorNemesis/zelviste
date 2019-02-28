import React, { Fragment, PureComponent } from "react";

import {
  Box,
  Text,
  Separator,
  Button,
  Spinner,
  Meta,
  ButtonLink
} from "../../atoms";
import { CategoryControls, ProductsGrid } from "../../organisms";
import { GoBackNavigation, Product } from "../../molecules";

import { Routes } from "../../../consts";

import "./Category.scss";

export class Category extends PureComponent {
  get loader() {
    return (
      <Box>
        <Spinner.Block>Načítám...</Spinner.Block>
      </Box>
    );
  }

  get error() {
    return <Box>Chyba při načítání kategorie.</Box>;
  }

  get hasProducts() {
    return this.props.products.length > 0;
  }

  get content() {
    const { data, products, total } = this.props;

    return (
      <Fragment>
        <Meta title={data.name} />

        <Box>
          {data.parent && (
            <GoBackNavigation
              caption={data.parent.name}
              seoUrl={Routes.category(data.parent.seo_url)}
            />
          )}

          <Text.Header h1 first last={!data.description}>
            {data.name}
          </Text.Header>

          {data.description && (
            <Text.Paragraph
              dangerouslySetInnerHTML={{ __html: data.description }}
              last
            />
          )}

          {data.children.length > 0 && (
            <div className="Category__children">
              {data.children.map(category => {
                return (
                  <ButtonLink.Category
                    key={category.id}
                    to={Routes.category(category.seo_url)}
                  >
                    {category.name}
                  </ButtonLink.Category>
                );
              })}
            </div>
          )}
        </Box>

        <Box>
          {this.hasProducts > 0 && (
            <Fragment>
              <CategoryControls
                productsCount={total}
                sortOptions={this.props.sortOptions}
              />

              <Separator />

              <ProductsGrid>
                {products.map(p => (
                  <Product
                    key={p.id}
                    price={p.price}
                    priceBefore={p.priceBefore}
                    name={p.name}
                    seoUrl={Routes.product(p.seo_url)}
                    stockQuantity={p.stock_quantity}
                    imageURL="https://www.robimaus.cz/graphics/product/kokosova-slupka-405.jpg"
                  />
                ))}
              </ProductsGrid>

              <Separator small taller />

              <div className="Category__more">
                <Button.Secondary>Načíst dalších 8</Button.Secondary>
              </div>
            </Fragment>
          )}

          {!this.hasProducts && (
            <Text.Paragraph first last>
              V kategorii momentálně nejsou žádné produkty.
            </Text.Paragraph>
          )}
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
