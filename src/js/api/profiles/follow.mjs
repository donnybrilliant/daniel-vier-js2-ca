import { URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

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
