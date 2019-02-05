import fetch from "isomorphic-fetch";
import { isBrowser } from "../utils";

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

function json(response) {
  return response.json();
}

// server side rendering needs an absolute path
const BASE = isBrowser() ? "" : "http://localhost:3000";

export function get(url, options) {
  return fetch(`${BASE}${url}`, options)
    .then(status)
    .then(json);
}

// eslint-disable-next-line
export function post(url, options) {
  return fetch(`${BASE}${url}`, {
    method: "POST",
    ...options
  })
    .then(status)
    .then(json);
}
