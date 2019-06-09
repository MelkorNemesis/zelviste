/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";

export const GlobalStylesEmotion = () => (
  <Global
    styles={theme => css`
      body {
        font-family: ${theme.font_family};
        font-size: ${theme.font_size};
        color: ${theme.c_text_base};
      }

      html,
      body,
      #root {
        height: 100%;
      }

      * {
        box-sizing: border-box;
      }

      a {
        color: ${theme.c_blue};
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    `}
  />
);
