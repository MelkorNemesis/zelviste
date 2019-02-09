import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import { Category as CategoryComp } from "../../components/pages";

const withStore = connect(state => ({
  status: state.category.status,
  data: state.category.data
}));
const enhance = compose(
  withRouter,
  withStore
);

export const Category = enhance(CategoryComp);
