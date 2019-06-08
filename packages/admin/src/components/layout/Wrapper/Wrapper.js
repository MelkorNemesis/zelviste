/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const wrapperCSS = css`
  height: 100%;
  display: flex;
  align-items: stretch;
`;

export const Wrapper = ({ children }) => <div css={wrapperCSS}>{children}</div>;
