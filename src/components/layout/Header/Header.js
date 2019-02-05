import React from "react";
import { Link } from "react-router-dom";

import * as Icons from "../../icons";

import "./Header.scss";
import { Colors } from "../../../consts";

export const Header = ({ onMenuClick }) => (
  <div className="Header">
    <Icons.Menu
      size={25}
      fill={Colors.LIGHT}
      className="Header__menu"
      onClick={() => onMenuClick()}
    />
    <Link to="/" className="Header__logo">
      <Icons.Logo fill={Colors.LIGHT} />
    </Link>
    <Icons.Search size={20} fill={Colors.LIGHT} className="Header__search" />
    <Icons.Cart size={25} fill={Colors.LIGHT} />
  </div>
);
