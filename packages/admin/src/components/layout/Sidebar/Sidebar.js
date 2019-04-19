import React from "react";
import styled from "styled-components";

import { Navigation } from "../index";
import { theme } from "../../../styles";

const StyledSidebar = styled.aside`
  flex: 0 0 auto;
  padding: ${theme('spacing_l')};
  background: #F2F7FB;
`;

export const Sidebar = () => (
  <StyledSidebar>
    <Navigation />
  </StyledSidebar>
);
