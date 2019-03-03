import { connect } from "react-redux";

import { Homepage as HomepageComp } from "../../components/pages";

export const Homepage = connect(state => ({
  categories: state.app.categories
}))(HomepageComp);
