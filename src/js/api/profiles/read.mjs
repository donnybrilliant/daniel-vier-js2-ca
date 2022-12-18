import { URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

export async function readAll() {
  const readProfilesURL = URL + "/profiles";

  const response = await authFetch(readProfilesURL);

  return await response.json();
}

export async function read(name) {
  if (!name) {
    throw new Error("Requires a name");
  }
  const readProfileURL =
    URL + "/profiles/" + name + "?_following=true&_followers=true";

  const response = await authFetch(readProfileURL);

  return await response.json();
}

export async function readPosts(name) {
  const readPostsURL =
    URL +
    "/profiles/" +
    name +
    "/posts?_author=true&_comments=true&_reactions=true";

  const response = await authFetch(readPostsURL);

  return await response.json();
}
