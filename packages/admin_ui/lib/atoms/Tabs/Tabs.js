import React, { useState } from "react";
import styled from "@emotion/styled";
import cx from "classnames";

function onlyTabLinks(el) {
  return el.type === TabLink;
}

function onlyTabContents(el) {
  return el.type === TabContent;
}

// -- TabLink
const StyledUL = styled.ul`
  margin: 0;
  padding: 0;

  border-bottom: 1px solid ${({ theme }) => theme.c_tabs_border};
`;

export const TabLink = ({
  children,
  className,
  isActive,
  onClick,
  idx,
  ...rest
}) => (
  <StyledTabLink
    isActive={isActive}
    className={cx(className, {
      "is-active": isActive
    })}
    {...rest}
  >
    <a href={`#${idx}`} onClick={onClick}>
      {children}
    </a>
  </StyledTabLink>
);

const StyledTabLink = styled.li`
  display: inline-block;

  &:first-of-type {
    a {
      border-top-left-radius: ${({ theme }) => theme.border_radius};
    }
  }

  &:last-of-type {
    a {
      border-top-right-radius: ${({ theme }) => theme.border_radius};
    }
  }

  a {
    display: inline-flex;
    height: 36px;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    font-weight: 600;

    background: #eee;
  }

  &.is-active {
    a {
      position: relative;
      background: #fff;

      &::after {
        content: "";
        position: absolute;
        bottom: -1px;
        left: 0;
        right: 0;

        width: 100%;
        height: 1px;

        background: #fff;
      }
    }
  }
`;

// -- TabContent
const StyledTabContent = styled.div`
  display: ${({ isActive }) => (isActive ? "block" : "none")};
  padding: ${({ theme }) => theme.spacing_l};

  border-radius: 0 0 ${({ theme }) => theme.border_radius}
    ${({ theme }) => theme.border_radius};
  background: #fff;
`;

export const TabContent = ({ children, isActive, ...rest }) => (
  <StyledTabContent isActive={isActive} {...rest}>
    {children}
  </StyledTabContent>
);

// -- Tabs

const StyledTabs = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing_m};
`;

export const Tabs = ({ children, ...rest }) => {
  const [index, setIndex] = useState(0);

  const links = React.Children.toArray(children).filter(onlyTabLinks);
  const contents = React.Children.toArray(children).filter(onlyTabContents);

  return (
    <StyledTabs {...rest}>
      <StyledUL>
        {links.map((el, idx) =>
          React.cloneElement(el, {
            isActive: index === idx,
            onClick: () => setIndex(idx),
            idx
          })
        )}
      </StyledUL>

      {contents.map((el, idx) =>
        React.cloneElement(el, { isActive: index === idx })
      )}
    </StyledTabs>
  );
};
