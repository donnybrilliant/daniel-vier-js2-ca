import { URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

/**
 * Sorts all posts by title and date.
 * @param {string} titleOrCreated takes only "title" or "created"
 * @param {string} ascOrDesc takes only "asc" or "desc"
 * @returns an object in specified order
 */
export async function sort(titleOrCreated, ascOrDesc) {
  const sortPostURL = `${URL}/posts?sort=${titleOrCreated}&sortOrder=${ascOrDesc}&_author=true&_comments=true&_reactions=true`;

  const response = await authFetch(sortPostURL);

  return await response.json();
}

/**
 * Gets all posts by only the users you follow
 * @returns Posts by users you follow
 */
export async function sortByFollowing() {
  const sortPostURL = `${URL}/posts/following&_author=true&_comments=true&_reactions=true`;

  const response = await authFetch(sortPostURL);

  return await response.json();
}
