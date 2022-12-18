import { load } from "../storage/index.mjs";

export function setProfileLinkListener() {
  const button = document.querySelector("#profileLink");
  if (button) {
    const name = load("userDetails").name;
    button.addEventListener("click", (event) => {
      location.replace(`/profile/?name=${name}`);
    });
  }
}
