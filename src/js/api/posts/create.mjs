import { URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

export async function create(data) {
  const createPostURL = URL + "/posts";
  const method = "post";

  const response = await authFetch(createPostURL, {
    method,
    body: JSON.stringify(data),
  });

  return await response.json();
}
