import { load } from "../storage/index.mjs";

/**
 * Looks for the user details in localstorage and makes a dynamic link to their username
 */
export function setProfileLinkListener() {
  const button = document.querySelector("#profileLink");
  if (button) {
    const name = load("userDetails").name;
    button.addEventListener("click", (event) => {
      location.replace(`/profile/?name=${name}`);
    });
  }
}
