import * as endpoint from "./endpoint.js";

export const dogGET = (id: Number) => {
  return fetch(`${endpoint.URL}/breeds/${id}`, {
    method: "GET",
    headers: {
      "x-api-key": endpoint.API_KEY,
      "Content-Type": endpoint.CONTENT_TYPE,
    },
    redirect: "follow",
  })
  .then((response) => response.json())
};


