import { connect } from "react-redux";
import { Navigation as NavigationComp } from "../../components/layout";

export const Navigation = connect(state => ({
  categories: state.app.categories
}))(NavigationComp);
