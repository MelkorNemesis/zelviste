export function theme(prop) {
  return function getter(props) {
    return props.theme && props.theme[prop];
  };
}
