/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import { Navigation, NavigationFooter } from "../index";

const sidebarCSS = theme => css`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  padding: ${theme.spacing_l};

  background: #fff;
  border-right: 1px solid #eaecee;
`;

export const Sidebar = () => (
  <aside css={sidebarCSS}>
    <Navigation />
    <NavigationFooter />
  </aside>
);
