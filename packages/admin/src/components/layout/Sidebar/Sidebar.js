import React from "react";
import styled from "styled-components";

import { Navigation, NavigationFooter } from "../index";
import { theme } from "../../../styles";

const StyledSidebar = styled.aside`
  padding: ${theme("spacing_l")};
  background: #fff;
  
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
`;

export const Sidebar = () => (
  <StyledSidebar>
    <Navigation />
    <NavigationFooter />
  </StyledSidebar>
);
