import { URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

/**
 * Makes a delete call to the API with an ID to delete post
 * @param {number} id
 * @returns an object
 */
export async function remove(id) {
  if (!id) {
    throw new Error("Delete requires an ID");
  }

  const removePostURL = URL + "/posts/" + id;
  const method = "delete";

  const response = await authFetch(removePostURL, {
    method,
  });

  return await response.json();
}
