/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

const wrapperCSS = css`
  height: 100%;
  display: flex;
  align-items: stretch;
`;

export const Wrapper = ({ children }) => <div css={wrapperCSS}>{children}</div>;
