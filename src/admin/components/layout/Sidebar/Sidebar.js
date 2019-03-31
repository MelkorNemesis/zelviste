import React from "react";
import styled from "styled-components";

import { spacing_m } from "../../../styles/";
import { Navigation } from "../index";

const StyledSidebar = styled.aside`
  flex: 0 0 auto;
  padding: ${spacing_m};
`;

export const Sidebar = () => (
  <StyledSidebar>
    <Navigation />
  </StyledSidebar>
);
