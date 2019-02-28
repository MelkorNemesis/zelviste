import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import PropTypes from "prop-types";
import qs from "qs";

import { Category as CategoryComp, NotFound } from "../../components/pages";
import { sagaMiddleware } from "../../redux/configureStore";
import { loadCategorySaga } from "../../redux/sagas";
import { categoryUnset } from "../../redux/ducks";
import { API } from "../../consts";
import { Category as CategoryConsts } from "../../shared/consts";
import { falidateOrder, falidatePage } from "../../falidators";
import { Routes } from "../../consts";

class CategoryContainer extends Component {
  static serverFetch = (match, query) => {
    const {
      params: { seo_url }
    } = match;

    let { page, order } = query;

    order = falidateOrder(order, undefined);
    page = falidatePage(page, undefined);

    return sagaMiddleware.run(loadCategorySaga, {
      seo_url,
      order,
      page
    });
  };

  static propTypes = {
    onUnmount: PropTypes.func.isRequired
  };

  get sortOptions() {
    const {
      match: {
        params: { seo_url }
      }
    } = this.props;

    let { page, order } = this.query;

    page = falidatePage(page, undefined);
    order = falidateOrder(order, CategoryConsts.DEFAULT_SORTING);

    return CategoryConsts.AVAILABLE_SORTING_OPTIONS.map(sortOption => {
      return {
        ...sortOption,
        active: sortOption.id === order,
        link: Routes.category(seo_url, { order: sortOption.id, page })
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
    const {
      match: {
        params: { seo_url }
      },
      location: { search }
    } = this.props;

    const {
      match: {
        params: { seo_url: prev_seo_url }
      },
      location: { search: prev_search }
    } = prevProps;

    const hasUrlChanged = seo_url !== prev_seo_url;
    const hasParamsChanged = search !== prev_search;

    if (hasUrlChanged || hasParamsChanged) {
      this.update();
    }
  }

  componentWillUnmount() {
    this.props.onUnmount();
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

const withStore = connect(
  state => ({
    status: state.category.status,
    data: state.category.data,
    products: state.category.products,
    total: state.category.total
  }),
  dispatch => ({
    onUnmount: () => dispatch(categoryUnset())
  })
);

const enhance = compose(
  withStore,
  withRouter
);

export const Category = enhance(CategoryContainer);
