import React from "react";
import styled from "styled-components";

import { theme } from "../../../styles";

export const StyledTextInput = styled.input`
  height: 38px;
  width: 100%;
  padding: 0 ${theme("input_padding")};
  box-sizing: border-box;
  
  font-size: ${theme("input_font_size")}
  font-family: ${theme("font_family")};
  font-weight: 500;
  
  border-radius: ${theme("border_radius")}
  border: 2px solid ${theme("input_border_color")};
  
  outline: none;
  
  &:focus {
    border-color: ${theme("input_focus_border_color")};
    color: ${theme("input_focus_color")};
  }
`;

export const TextInput = ({ ...rest }) => <StyledTextInput {...rest} />;
