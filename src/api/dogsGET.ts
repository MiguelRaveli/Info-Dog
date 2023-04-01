import * as endpoint from "./endpoint.js";

export const dogsGET = (search: string) => {
  const searchString = isNaN(Number(search))
    ? "search?name"
    : ("?limit=12&page" as string | number);

  return fetch(`${endpoint.URL}/breeds/${searchString}=${search}`, {
    method: "GET",
    headers: {
      "x-api-key": endpoint.API_KEY,
      "Content-Type": endpoint.CONTENT_TYPE,
    },
    redirect: "follow",
  }).then((response) => response.json());
};
