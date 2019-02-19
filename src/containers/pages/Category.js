import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import { Category as CategoryComp, NotFound } from "../../components/pages";
import { sagaMiddleware } from "../../redux/configureStore";
import { loadCategorySaga } from "../../redux/sagas";
import { API } from "../../consts";

class CategoryContainer extends Component {
  static serverFetch = match =>
    sagaMiddleware.run(loadCategorySaga, match.params.seo_url);

  componentDidMount() {
    const { match, status } = this.props;

    if (!status.done && !status.error) {
      Category.serverFetch(match);
    }
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    if (prevProps.match.params.seo_url !== match.params.seo_url) {
      Category.serverFetch(match);
    }
  }

  render() {
    const { status, ...props } = this.props;

    if (status.error && status.error.status === API.ERROR_CODES.NOT_FOUND) {
      return <NotFound />;
    } else {
      return <CategoryComp status={status} {...props} />;
    }
  }
}

const withStore = connect(state => ({
  status: state.category.status,
  data: state.category.data,
  products: state.category.products
}));

const enhance = compose(
  withStore,
  withRouter
);

export const Category = enhance(CategoryContainer);
