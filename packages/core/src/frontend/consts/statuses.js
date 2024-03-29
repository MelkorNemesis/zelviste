export const DEFAULT = {
  pending: false,
  done: false,
  error: null
};

export const PENDING = {
  pending: true,
  done: false,
  error: null
};

export const SUCCESS = {
  pending: false,
  done: true,
  error: null
};

export const ERROR = {
  pending: false,
  done: false,
  error: true
};

export const BUILD_ERROR = err => ({
  pending: false,
  done: false,
  error: err
});
