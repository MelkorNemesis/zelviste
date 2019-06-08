/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const contentCSS = theme => css`
  background: #f7f8fa;
  flex: 1 1 auto;
  padding: ${theme.spacing_l} ${theme.spacing_xl};
  overflow: auto;
`;

export const Content = ({ children, ...rest }) => (
  <main css={contentCSS} {...rest}>
    {children}
  </main>
);
