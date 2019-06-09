import React, { Fragment } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const rotate = keyframes`
  100%  { transform: rotate(360deg); }
`;

const StyledSpinnerCircle = styled.div`
  height: 40px;
  width: 40px;

  animation: ${rotate} 0.8s infinite linear;
  border: 4px solid ${({ theme }) => theme.c_spinner};
  border-right-color: transparent;
  border-radius: 50%;
`;

const StyledSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing_m};

  & > span {
    margin-top: ${({ theme }) => theme.spacing_m};
    font-weight: 500;
  }

  &.fullPage {
    position: fixed;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
  }
`;

const StyledOverlay = styled.div`
  position: fixed;

  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.4);
`;

// -- Spinner
export const Spinner = ({ children, fullPage = false }) => {
  const Wrapper = fullPage ? StyledOverlay : Fragment;
  return (
    <Wrapper>
      <StyledSpinner>
        <StyledSpinnerCircle />
        {children && <span>{children}</span>}
      </StyledSpinner>
    </Wrapper>
  );
};
