import { connect } from "react-redux";
import { CategoriesNav as CategoriesNavComp } from "../../components/layout/Navigation/CategoriesNav/CategoriesNav";
import { selectActiveIds } from "../../redux/ducks";

export const CategoriesNav = connect(state => ({
  activeIds: selectActiveIds(state)
}))(CategoriesNavComp);
