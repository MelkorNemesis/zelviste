export const asyncHandlerWrapper = (
  asyncHandler,
  successResponseStatus = 200
) => {
  return (req, res, next) => {
    asyncHandler(req)
      .then(result => {
        res.status(successResponseStatus);
        res.json(result);
      })
      .catch(next);
  };
};
