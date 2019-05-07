import React from "react";
import styled from "styled-components";

import { Navigation, NavigationFooter } from "../index";
import { theme } from "../../../styles";

const StyledSidebar = styled.aside`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  padding: ${theme("spacing_l")};
  
  background: #fff;
  border-right: 1px solid #eaecee;
`;

export const Sidebar = () => (
  <StyledSidebar>
    <Navigation />
    <NavigationFooter />
  </StyledSidebar>
);
