import { URL } from "../constants.mjs";
import * as storage from "../../handlers/storage/index.mjs";

export async function login(userDetails) {
  const loginURL = URL + "/auth/login";
  const method = "post";
  const body = JSON.stringify(userDetails);

  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const { accessToken, ...user } = await response.json();

  storage.save("accessToken", accessToken);
  storage.save("userDetails", user);
}
