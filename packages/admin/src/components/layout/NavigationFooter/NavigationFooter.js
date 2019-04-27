import React, { Fragment } from "react";
import styled from "styled-components";
import { Subscribe } from "unstated";
import SignOutIcon from "@atlaskit/icon/glyph/sign-out";
import { Button, Text } from "@eshop/admin_ui";

import { UserContainer } from "../../../unstated";

const StyledNavigationFooter = styled.footer`
  margin-top: auto;

  .icon {
    margin-right: ${({ theme }) => theme.spacing_s};
  }
`;

export const NavigationFooter = ({ ...rest }) => (
  <StyledNavigationFooter {...rest}>
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
  </StyledNavigationFooter>
);
