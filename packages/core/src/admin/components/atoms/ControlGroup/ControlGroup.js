import styled from "styled-components";

import { theme } from "../../../styles";

export const ControlGroup = styled.div`
  & + & {
    margin-top: ${theme("spacing_s")};
  }
`;
