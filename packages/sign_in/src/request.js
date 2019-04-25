function parseJSON(response) {
  return response.json().then(json => ({
    json,
    response
  }));
}

function checkStatus({ response, json }) {
  if (response.ok) {
    return { json, response };
  } else {
    const err = new Error(response.statusText);
    err.response = response;
    err.status = response.status;
    err.detail = json.message;
    throw err;
  }
}

export default function request(url, options = {}) {
  return fetch(url, {
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    },
    ...options
  })
    .then(parseJSON)
    .then(checkStatus);
}
