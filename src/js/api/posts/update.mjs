import { URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

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
