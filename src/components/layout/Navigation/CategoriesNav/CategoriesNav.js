import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import cx from "classnames";

import { Routes } from "../../../../consts";

import "./CategoriesNav.scss";

export class CategoriesNav extends PureComponent {
  state = {
    categoryExpandedId: null,
    onSelect: undefined
  };

  static propTypes = {
    onSelect: PropTypes.func
  };

  static defaultProps = {
    categories: []
  };

  isActive = route => {
    return (
      typeof window !== "undefined" &&
      window.location.pathname.startsWith(route)
    );
  };

  onClick = () => {
    const { onSelect } = this.props;
    if (typeof onSelect === "function") {
      onSelect();
    }
    // because only change in URL
    // does not trigger re-render
    this.forceUpdate();
  };

  renderChildren = c => {
    if (c.children.length === 0) {
      return null;
    }

    return (
      <ul>
        {c.children.map(c => {
          const categoryURL = Routes.category(c.seo_url);
          // const isActive = this.isActive(categoryURL);

          return (
            <li key={c.id}>
              <Link
                // className={cx({ active: isActive })}
                onClick={this.onClick}
                to={categoryURL}
              >
                {c.name}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  handleRootCategoryClick = category => {
    this.setState({ categoryExpandedId: category.id });
  };

  render() {
    const { categories } = this.props;
    return (
      <div className="CategoriesNav">
        <ul>
          {categories.map(c => {
            const hasChildren = c.children.length > 0;
            const isExpanded =
              hasChildren && c.id === this.state.categoryExpandedId;

            const categoryURL = Routes.category(c.seo_url);
            // const isActive = this.isActive(categoryURL);

            return (
              <li
                key={c.id}
                className={cx({
                  "has-children": hasChildren,
                  "is-expanded": isExpanded
                })}
              >
                <Link
                  to={categoryURL}
                  // className={cx({ active: isActive })}
                  onClick={() => {
                    this.handleRootCategoryClick(c);
                    this.props.onSelect();
                  }}
                >
                  {c.name}
                </Link>
                {isExpanded && this.renderChildren(c)}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
