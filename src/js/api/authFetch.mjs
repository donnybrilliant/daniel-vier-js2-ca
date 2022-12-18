import { load } from "../storage/index.mjs";

/**
 * Loads accesstoken from Localstorage.
 * @returns Object with accesstoken for authorization
 */

export function headers() {
  const accessToken = load("accessToken");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
}

/**
 * Sets authorized headers for API call
 * @param {string} url URL to API
 * @param {object} options Methods and body
 * @returns An object from the API
 */

export async function authFetch(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}
