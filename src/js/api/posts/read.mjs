import { URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

/**
 * API call to read all posts by all users, with authors, comments and reactions
 * @returns An object with the posts
 */

export async function readAll() {
  const readPostURL =
    URL + "/posts/?_author=true&_comments=true&_reactions=true";

  const response = await authFetch(readPostURL);

  return await response.json();
}

/**
 * API call to read a single post by ID with authors, comments and reactions
 * @param {number} id
 * @returns A single post object
 */
export async function read(id) {
  if (!id) {
    throw new Error("Requires a post ID");
  }
  const readPostURL =
    URL + "/posts/" + id + "?_author=true&_comments=true&_reactions=true";

  const response = await authFetch(readPostURL);

  return await response.json();
}
