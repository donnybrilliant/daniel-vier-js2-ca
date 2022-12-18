import * as templates from "../templates/index.mjs";
import * as profiles from "../api/profiles/index.mjs";

export async function followers() {
  const url = new URL(location.href);
  const userName = url.searchParams.get("name");
  const profileInfo = await profiles.read(userName);
  const container = document.querySelector("#followers");
  templates.renderFollowersTemplate(profileInfo.followers, container);
  const followersButton = document.querySelector("#followersButton");
  followersButton.addEventListener("click", (event) => {
    templates.renderFollowersTemplate(profileInfo.followers, container);
  });
  const followingButton = document.querySelector("#followingButton");
  followingButton.addEventListener("click", (event) => {
    templates.renderFollowingTemplate(profileInfo.following, container);
  });
}
