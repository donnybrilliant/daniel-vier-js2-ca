import { URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

/**
 * Makes an API call to update post with id.
 * @param {object} data Takes a user object
 * @returns an object
 */
export async function update(data) {
  if (!data.id) {
    throw new Error("Update requires an ID");
  }

  const updatePostURL = URL + "/posts/" + data.id;
  const method = "put";

  const response = await authFetch(updatePostURL, {
    method,
    body: JSON.stringify(data),
  });

  return await response.json();
}
