import { remove } from "../storage/index.mjs";

/**
 * Logs the user out.
 * Removes data from localstorage and redirects you to login page
 */
export function setLogoutListener() {
  const button = document.querySelector("#signout");

  if (button) {
    button.addEventListener("click", (event) => {
      remove("accessToken");
      remove("userDetails");
      location.href = "/";
    });
  }
}
