import React from "react";
import styled from "styled-components";

import { spacingM } from "../../../styles/";
import { Navigation } from "../index";

const StyledSidebar = styled.aside`
  flex: 0 0 auto;
  padding: ${spacingM};
`;

export const Sidebar = () => (
  <StyledSidebar>
    <Navigation />
  </StyledSidebar>
);
