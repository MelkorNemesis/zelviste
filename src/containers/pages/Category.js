import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import qs from "qs";

import { Category as CategoryComp, NotFound } from "../../components/pages";
import { sagaMiddleware } from "../../redux/configureStore";
import { loadCategorySaga } from "../../redux/sagas";
import { API } from "../../consts";
import { Category as CategoryConsts } from "../../shared/consts";
import { falidator, isValidPage, isValidSorting } from "../../validations";
import { Routes } from "../../consts";

class CategoryContainer extends Component {
  static serverFetch = (match, query) => {
    const {
      params: { seo_url }
    } = match;

    let { page, order } = query;

    order = falidator(isValidSorting, CategoryConsts.DEFAULT_SORTING)(order);
    page = falidator(isValidPage, 1)(page);

    return sagaMiddleware.run(loadCategorySaga, {
      seo_url,
      order,
      page
    });
  };

  get sortOptions() {
    return CategoryConsts.AVAILABLE_SORTING_OPTIONS.map(sortOption => {
      return {
        ...sortOption,
        link: sortOption.id
      };
    });
  }

  get query() {
    const {
      location: { search }
    } = this.props;

    return qs.parse(search, { ignoreQueryPrefix: true });
  }

  update = () => {
    const { match } = this.props;
    Category.serverFetch(match, this.query);
  };

  componentDidMount() {
    const { status } = this.props;
    if (!status.done && !status.error) {
      this.update();
    }
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    if (prevProps.match.params.seo_url !== match.params.seo_url) {
      this.update();
    }
  }

  render() {
    const { status, ...props } = this.props;

    if (status.error && status.error.status === API.ERROR_CODES.NOT_FOUND) {
      return <NotFound />;
    } else {
      return (
        <CategoryComp
          status={status}
          sortOptions={this.sortOptions}
          {...props}
        />
      );
    }
  }
}

const withStore = connect(state => ({
  status: state.category.status,
  data: state.category.data,
  products: state.category.products,
  order: state.category.order
}));

const enhance = compose(
  withStore,
  withRouter
);

export const Category = enhance(CategoryContainer);
