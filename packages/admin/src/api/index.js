const API_URL = process.env.REACT_APP_API_URL;

function parseJSON(response) {
  return response.json().then(json => {
    return {
      json,
      response
    };
  });
}
function checkStatus(res) {
  if (res.status >= 200 && res.status < 300) {
    return res;
  } else {
    let err = new Error(res.statusText);
    err.response = res;
    throw err;
  }
}

function request(url, options) {
  return fetch(`${API_URL}${url}`, options)
    .then(checkStatus)
    .then(parseJSON);
}

export function get(url) {
  return request(url, {
    headers: {
      Accept: "application/json"
    },
    credentials: "include"
  });
}

export function post(url, body = undefined) {
  return request(url, {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      Accept: "application/json"
    },
    credentials: "include"
  });
}
