/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import React, { Fragment } from "react";
import { Subscribe } from "unstated";
import { Button, Text } from "@eshop/admin_ui";
import SignOutIcon from "@atlaskit/icon/glyph/sign-out";

import { UserContainer } from "../../../unstated";

const navigationFooterCSS = theme => css`
  margin-top: auto;

  .icon {
    margin-right: ${theme.spacing_s};
  }
`;

export const NavigationFooter = ({ ...rest }) => (
  <footer css={navigationFooterCSS} {...rest}>
    <Subscribe to={[UserContainer]}>
      {user => {
        return (
          <Fragment>
            <Text smaller>
              Přihlášen <strong>{user.name}</strong>
            </Text>
            <Button onClick={user.signOut}>
              <span className="icon">
                <SignOutIcon size="small" />
              </span>
              Odhlásit se
            </Button>
          </Fragment>
        );
      }}
    </Subscribe>
  </footer>
);
