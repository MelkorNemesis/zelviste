import hoist from "hoist-non-react-statics";

export const withStatics = (Component, blacklist) => BaseComponent => {
  hoist(BaseComponent, Component, blacklist);
  return BaseComponent;
};
