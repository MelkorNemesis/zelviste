/** @jsx jsx */
import { createElement } from "react";
import { NavLink } from "react-router-dom";
import { jsx, css } from "@emotion/core";

import MarketplaceIcon from "@atlaskit/icon/glyph/marketplace";
import DashboardIcon from "@atlaskit/icon/glyph/dashboard";
import SettingsIcon from "@atlaskit/icon/glyph/settings";
import EmojiFoodIcon from "@atlaskit/icon/glyph/emoji/food";
import ChildIssuesIcon from "@atlaskit/icon/glyph/child-issues";

const groupCSS = css`
  margin: 0;
  padding: 0;
`;

const Group = ({ children, className }) => (
  <ul css={groupCSS} className={className}>
    {children}
  </ul>
);

const itemCSS = theme => css`
  list-style-type: none;

  a {
    display: flex;
    align-items: center;
    padding: ${theme.spacing_s} ${theme.spacing_m};

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
      background: ${theme.c_green_1};
      border: 2px solid ${theme.c_green_2};
      color: ${theme.c_green_3};
    }

    .before {
      flex-shrink: 0;
      margin-right: ${theme.spacing_s};
    }
  }
`;

const Item = ({ text, to, before, className, navLinkProps }) => {
  return (
    <li css={itemCSS} className={className}>
      <NavLink activeClassName="active" to={to} {...navLinkProps}>
        {before && <span className="before">{createElement(before)}</span>}
        {text}
      </NavLink>
    </li>
  );
};

export const Navigation = () => (
  <nav>
    <Group>
      <Item
        text="Dashboard"
        to="/"
        before={DashboardIcon}
        navLinkProps={{ exact: true }}
      />
      <Item text="Objednávky" to="/orders" before={MarketplaceIcon} />
      <Item text="Kategorie" to="/categories" before={ChildIssuesIcon} />
      <Item text="Produkty" to="/products" before={EmojiFoodIcon} />
      <Item text="Nastavení" to="/settings" before={SettingsIcon} />
    </Group>
  </nav>
);
