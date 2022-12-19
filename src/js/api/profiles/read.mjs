import { URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

/**
 * Gets all user profiles from API
 * @returns an object with all users
 */
export async function readAll() {
  const readProfilesURL = URL + "/profiles";

  const response = await authFetch(readProfilesURL);

  return await response.json();
}

/**
 * Gets a single user profile from the API
 * @param {string} name
 * @returns an object with the user profile
 */
export async function read(name) {
  if (!name) {
    throw new Error("Requires a name");
  }
  const readProfileURL =
    URL + "/profiles/" + name + "?_following=true&_followers=true";

  const response = await authFetch(readProfileURL);

  return await response.json();
}

/**
 * Get all posts by specified user
 * @param {string} name Username
 * @returns All posts by specified user
 */
export async function readPosts(name) {
  const readPostsURL =
    URL +
    "/profiles/" +
    name +
    "/posts?_author=true&_comments=true&_reactions=true";

  const response = await authFetch(readPostsURL);

  return await response.json();
}
