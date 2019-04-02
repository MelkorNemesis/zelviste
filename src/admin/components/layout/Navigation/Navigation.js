import React, { createElement } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import MarketplaceIcon from "@atlaskit/icon/glyph/marketplace";
import DashboardIcon from "@atlaskit/icon/glyph/dashboard";
import SettingsIcon from "@atlaskit/icon/glyph/settings";
import EmojiFoodIcon from "@atlaskit/icon/glyph/emoji/food";

import { theme } from "../../../styles";

const Group = ({ children }) => <ul>{children}</ul>;

const Item = ({ text, to, before, className }) => {
  return (
    <li className={className}>
      <NavLink activeClassName="active" to={to}>
        {before && <span className="before">{createElement(before)}</span>}
        {text}
      </NavLink>
    </li>
  );
};

const StyledItem = styled(Item)`
  a {
    display: flex;
    align-items: center;
    padding: ${theme("spacing_s")} ${theme("spacing_m")};

    color: #444;
    text-decoration: none;
    font-weight: 500;

    border: 2px solid transparent;
    border-radius: 3px;

    &:hover,
    &.active {
      background: rgba(0, 0, 0, 0.05);
    }

    &:active {
      background: ${theme("c_green_1")};
      border: 2px solid ${theme("c_green_2")};
      color: ${theme("c_green_3")};
    }

    .before {
      margin-right: ${theme("spacing_s")};
    }
  }
`;

const StyledNavigation = styled.nav``;

export const Navigation = () => (
  <StyledNavigation>
    <Group>
      <StyledItem text="Dashboard" to="/dashboard" before={DashboardIcon} />
      <StyledItem text="Objednávky" to="/orders" before={MarketplaceIcon} />
      <StyledItem text="Produkty" to="/products" before={EmojiFoodIcon} />
      <StyledItem text="Nastavení" to="/settings" before={SettingsIcon} />
    </Group>

    <footer />
  </StyledNavigation>
);
