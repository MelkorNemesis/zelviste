import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  height: ${({ theme }) => theme.inputHeight};
  width: 100%;
  padding: 0 10px;

  font-size: 16px;
  font-weight: 500;
  color: black;

  border: 2px solid #eee;
  border-radius: ${({ theme }) => theme.borderRadius};

  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.inputAccentColor};
  }
`;

export const Input = ({ ...rest }) => <StyledInput {...rest} />;
