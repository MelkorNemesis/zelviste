import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Text } from "../../atoms";
import * as Icons from "../../icons";
import { CategoriesNav } from "../../../containers";

import "./Navigation.scss";

const NavigationHeader = ({ children, Icon }) => (
  <header className="Navigation__header">
    <Icon />
    <Text strong>{children}</Text>
  </header>
);

const NavigationBox = ({ children }) => (
  <div className="Navigation__box">{children}</div>
);

const NavigationIcon = {
  Categories: () => <Icons.List size={20} className="Navigation__icon" />,
  Contact: () => <Icons.Phone size={20} className="Navigation__icon" />,
  ImportantPages: () => <Icons.Info size={20} className="Navigation__icon" />,
  OrderStatus: () => <Icons.Package size={20} className="Navigation__icon" />
};

export class Navigation extends PureComponent {
  static propTypes = {
    onNavigate: PropTypes.func
  };

  node = null;

  listenToClickOutside = () => {
    document.addEventListener("mousedown", this.handleClickOutside);
  };

  unlistenToClickOutside = () => {
    document.removeEventListener("mousedown", this.handleClickOutside);
  };

  componentDidUpdate(prevProps) {
    const props = this.props;

    if (prevProps.watchOutsideClick !== props.watchOutsideClick) {
      if (props.watchOutsideClick) {
        this.listenToClickOutside();
      } else {
        this.unlistenToClickOutside();
      }
    }
  }

  componentDidMount() {
    if (this.props.watchOutsideClick) {
      this.listenToClickOutside();
    }
  }

  handleClickOutside = e => {
    if (this.node && this.node.contains(e.target)) {
      return;
    }
    this.props.onClickOutside();
  };

  render() {
    const { categories, onNavigate } = this.props;

    return (
      <div
        className="Navigation"
        ref={node => {
          this.node = node;
        }}
      >
        <NavigationHeader Icon={NavigationIcon.Categories}>
          Kategorie
        </NavigationHeader>
        <NavigationBox>
          <CategoriesNav onSelect={onNavigate} categories={categories} />
        </NavigationBox>

        <NavigationHeader Icon={NavigationIcon.Contact}>
          Kontakt
        </NavigationHeader>
        <NavigationBox>
          <Text light mediumBold>
            Tel.: +420 777 889 992
            <br />
            E-mail: <a href="mailto:info@zelviste.cz">info@zelviste.cz</a>
          </Text>
        </NavigationBox>

        <NavigationHeader Icon={NavigationIcon.ImportantPages}>
          Důležité stránky
        </NavigationHeader>
        <NavigationBox>
          <Text light mediumBold>
            def
          </Text>
        </NavigationBox>

        <NavigationHeader Icon={NavigationIcon.OrderStatus}>
          Stav objednávky
        </NavigationHeader>
        <NavigationBox>
          <Text light mediumBold>
            Klikněte <Link to="/xyz">ZDE</Link> pro zjištění stavu objednávky.
          </Text>
        </NavigationBox>
      </div>
    );
  }
}
