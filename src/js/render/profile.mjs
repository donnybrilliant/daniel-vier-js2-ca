import * as templates from "../templates/index.mjs";
import * as profiles from "../api/profiles/index.mjs";

export async function profile() {
  const url = new URL(location.href);
  const userName = url.searchParams.get("name");

  const profileInfo = await profiles.read(userName);
  const profileInfoContainer = document.querySelector("#profileInfo");
  templates.renderProfileTemplate(profileInfo, profileInfoContainer);

  const profilePosts = await profiles.readPosts(userName);
  const postsContainer = document.querySelector("#profilePosts");
  templates.renderPostTemplates(profilePosts, postsContainer);
}
