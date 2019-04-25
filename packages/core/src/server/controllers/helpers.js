export const format = {
  error(err, data = undefined) {
    return {
      error: err,
      data
    };
  },

  ok(data = undefined, extras = undefined) {
    return {
      data,
      ...extras
    };
  }
};
