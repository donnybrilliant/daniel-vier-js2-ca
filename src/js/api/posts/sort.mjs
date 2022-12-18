import { URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

export async function sort(titleOrCreated, ascOrDesc) {
  const sortPostURL = `${URL}/posts?sort=${titleOrCreated}&sortOrder=${ascOrDesc}&_author=true&_comments=true&_reactions=true`;

  const response = await authFetch(sortPostURL);

  return await response.json();
}

export async function sortByFollowing() {
  const sortPostURL = `${URL}/posts/following&_author=true&_comments=true&_reactions=true`;

  const response = await authFetch(sortPostURL);

  return await response.json();
}
