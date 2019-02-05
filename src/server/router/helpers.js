export const asyncHandlerWrapper = (
  asyncHandler,
  successResponseStatus = 200
) => {
  return (req, res, next) => {
    asyncHandler(req)
      .then(result => {
        res.status(successResponseStatus);
        res.json(format.ok(result));
      })
      .catch(next);
  };
};

export const format = {
  error(err, data = undefined) {
    return {
      error: err,
      data
    };
  },

  ok(data) {
    return {
      data
    };
  }
};
