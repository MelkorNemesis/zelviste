import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import cx from "classnames";

import { Routes } from "../../../../consts";

import "./CategoriesNav.scss";

export class CategoriesNav extends PureComponent {
  static propTypes = {
    onSelect: PropTypes.func,
    activeIds: PropTypes.arrayOf(PropTypes.number)
  };

  static defaultProps = {
    onSelect: undefined,
    categories: [],
    activeIds: []
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

    const { activeIds } = this.props;

    return (
      <ul>
        {c.children.map(c => {
          const categoryURL = Routes.category(c.seo_url);

          return (
            <li key={c.id}>
              <Link
                className={cx({ active: activeIds.indexOf(c.id) > -1 })}
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

  render() {
    const { categories, activeIds } = this.props;
    return (
      <div className="CategoriesNav">
        <ul>
          {categories.map(c => {
            const hasChildren = c.children.length > 0;
            const isActive = activeIds.indexOf(c.id) > -1;
            const isExpanded = hasChildren && isActive;

            const categoryURL = Routes.category(c.seo_url);

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
                  className={cx({ active: isActive })}
                  onClick={() => {
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
