import { remove } from "../storage/index.mjs";

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
