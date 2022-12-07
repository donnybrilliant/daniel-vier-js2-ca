import { URL } from "../constants.mjs";

export async function register(userDetails) {
  const registerURL = URL + "/auth/register";
  const method = "post";
  const body = JSON.stringify(userDetails);

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const result = await response.json();
  return result;
}
