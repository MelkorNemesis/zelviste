import fetch from "isomorphic-fetch";
import deepMerge from "deepmerge";

import { isBrowser } from "../utils";
import { APIError } from ".";

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    const err = new APIError(response.statusText, response.status);
    return Promise.reject(err);
  }
}

function json(response) {
  return response.json();
}

// server side rendering needs an absolute path
const BASE = isBrowser() ? "" : "http://localhost:3000";

function withBase(url) {
  return `${BASE}${url}`;
}

export function get(url, opts) {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };

  // prettier-ignore
  const options = deepMerge({ headers }, opts || {});

  return fetch(withBase(url), options)
    .then(status)
    .then(json);
}

// eslint-disable-next-line
export function post(url, opts) {
  return fetch(withBase(url), {
    method: "POST",
    ...opts
  })
    .then(status)
    .then(json);
}
