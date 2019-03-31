import React, { createElement } from "react";
import styled from "styled-components";
import MarketplaceIcon from "@atlaskit/icon/glyph/marketplace";
import DashboardIcon from "@atlaskit/icon/glyph/dashboard";

import {
  c_green_1,
  c_green_2,
  c_green_3,
  spacingM,
  spacingS
} from "../../../styles";

const Group = ({ children }) => <ul>{children}</ul>;

const Item = ({ text, to, before, className }) => {
  return (
    <li className={className}>
      <a href={to}>
        {before && <span className="before">{createElement(before)}</span>}
        {text}
      </a>
    </li>
  );
};

const StyledItem = styled(Item)`
  a {
    display: flex;
    align-items: center;
    padding: ${spacingS} ${spacingM};

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
      background: ${c_green_1};
      border: 2px solid ${c_green_2};
      color: ${c_green_3};
    }

    .before {
      margin-right: ${spacingS};
    }
  }
`;

export const Navigation = () => (
  <div>
    <Group>
      <StyledItem text="Dashboard" to="/admin/dashboard" before={DashboardIcon} />
      <StyledItem text="Objednávky" to="/admin/orders" before={MarketplaceIcon} />
    </Group>
  </div>
);
