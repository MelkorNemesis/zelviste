import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import { Category as CategoryComp } from "../../components/pages";
import { withNotFound, withStatics } from "../../components/hocs";
import { API } from "../../consts";

const withStore = connect(state => ({
  status: state.category.status,
  data: state.category.data,
  products: state.category.products
}));

const enhance = compose(
  withStatics(CategoryComp),
  withStore,
  withNotFound(
    props =>
      props.status.error &&
      props.status.error.status === API.ERROR_CODES.NOT_FOUND
  ),
  withRouter
);

export const Category = enhance(CategoryComp);
