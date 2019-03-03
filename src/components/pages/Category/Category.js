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
import { GoBackNavigation, Product, CategoryList } from "../../molecules";

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

  get errorProducts() {
    return <Box>Chyba při načítání produktů.</Box>;
  }

  get hasProducts() {
    return this.props.products.length > 0;
  }

  get productsList() {
    const { products, total } = this.props;

    return (
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
    );
  }

  get noProducts() {
    return (
      <Text.Paragraph first last>
        V kategorii momentálně nejsou žádné produkty.
      </Text.Paragraph>
    );
  }

  get products() {
    const { productsStatus } = this.props;

    if (productsStatus.pending) {
      return this.loader;
    } else if (productsStatus.error) {
      return this.errorProducts;
    } else if (productsStatus.done) {
      if (this.hasProducts) {
        return this.productsList;
      } else {
        return this.noProducts;
      }
    } else {
      return null;
    }
  }

  get goBackNavigation() {
    const { data } = this.props;

    if (data.parent) {
      return (
        <GoBackNavigation
          caption={data.parent.name}
          seoUrl={Routes.category(data.parent.seo_url)}
        />
      );
    } else {
      return <GoBackNavigation caption="Hlavní strana" seoUrl="/" />;
    }
  }

  get categoryChildren() {
    const { data } = this.props;

    if (data.children.length > 0) {
      return (
        <CategoryList
          categories={data.children.map(({ id, seo_url, name }) => ({
            id,
            seo_url,
            name
          }))}
        />
      );
    }

    return null;
  }

  get content() {
    const { data } = this.props;

    return (
      <Fragment>
        <Meta title={data.name} />

        <Box>
          {this.goBackNavigation}

          <Text.Header h1 first last={!data.description}>
            {data.name}
          </Text.Header>

          {data.description && (
            <Text.Paragraph
              dangerouslySetInnerHTML={{ __html: data.description }}
              last
            />
          )}

          {this.categoryChildren}
        </Box>

        <Box>{this.products}</Box>
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
