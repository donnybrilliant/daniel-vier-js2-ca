import { follow } from "../api/profiles/index.mjs";

export function setFollowListener() {
  const followButton = document.querySelectorAll("a.follow");
  console.log(followButton);
  followButton.forEach((element) => {
    element.addEventListener("click", (event) => {
      console.log(event);
    });
  });
}
