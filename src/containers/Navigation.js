import { connect } from "react-redux";
import { Navigation } from "../components/layout";

export const NavigationContainer = connect(state => ({
  categories: state.app.categories
}))(Navigation);
