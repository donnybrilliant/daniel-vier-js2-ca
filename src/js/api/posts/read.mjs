import { URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

export async function readAll() {
  const readPostURL =
    URL + "/posts/?_author=true&_comments=true&_reactions=true";

  const response = await authFetch(readPostURL);

  return await response.json();
}

export async function read(id) {
  if (!id) {
    throw new Error("Requires a post ID");
  }
  const readPostURL = URL + "/posts/" + id;

  const response = await authFetch(readPostURL);

  return await response.json();
}
