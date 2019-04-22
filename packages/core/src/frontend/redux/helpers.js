export function createAction(type) {
  return (payload, error) => ({
    type,
    payload,
    error
  });
}
