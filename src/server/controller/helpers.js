export const format = {
  error(err, data = undefined) {
    return {
      error: err,
      data
    };
  },

  ok(data, extras = undefined) {
    return {
      data,
      ...extras
    };
  }
};
