import { URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

/**
 * API call to follow a user with specified name
 * @param {string} name A username on the social endpoint
 * @returns a response
 */

export async function follow(name) {
  if (!name) {
    throw new Error("Follow requires a name");
  }

  const followURL = URL + "/profiles/" + name + "/follow";
  const method = "put";

  const response = await authFetch(followURL, {
    method,
    body: JSON.stringify(data),
  });

  return await response.json();
}
