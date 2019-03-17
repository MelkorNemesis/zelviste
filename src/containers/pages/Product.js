import React, { PureComponent } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";

import { NotFound, Product as ProductComponent } from "../../components/pages";
import { sagaMiddleware } from "../../redux/configureStore";
import { loadProductSaga } from "../../redux/sagas";
import { API } from "../../consts";
import { productUnset } from "../../redux/ducks";

class ProductContainer extends PureComponent {
  static serverFetch = match => {
    const {
      params: { seo_url }
    } = match;

    return sagaMiddleware.run(loadProductSaga, { seo_url }).toPromise();
  };

  update = () => {
    const { match } = this.props;
    ProductContainer.serverFetch(match, this.query);
  };

  componentDidMount() {
    const { status } = this.props;
    if (!status.done && !status.error) {
      this.update();
    }
  }

  componentDidUpdate(prevProps) {
    const {
      match: {
        params: { seo_url }
      }
    } = this.props;

    const {
      match: {
        params: { seo_url: prev_seo_url }
      }
    } = prevProps;

    if (seo_url !== prev_seo_url) {
      this.update();
    }
  }

  componentWillUnmount() {
    this.props.onUnmount();
  }

  render() {
    const { status, staticContext, ...props } = this.props;

    if (status.error && status.error.status === API.ERROR_CODES.NOT_FOUND) {
      return <NotFound staticContext={staticContext} />;
    } else {
      return <ProductComponent status={status} {...props} />;
    }
  }
}

const withStore = connect(
  ({ product }) => ({
    status: product.status,
    data: product.data
  }),
  dispatch => ({
    onUnmount: () => dispatch(productUnset())
  })
);

const enhance = compose(withStore);

export const Product = enhance(ProductContainer);
