import * as templates from "../templates/index.mjs";
import * as posts from "../api/posts/index.mjs";

const container = document.querySelector("#feed");

export async function sort(createdOrTitle, ascOrDesc) {
  const sortedPosts = await posts.sort(createdOrTitle, ascOrDesc);
  templates.renderPostTemplates(sortedPosts, container);
}

export async function sortByFollowing() {
  const followingPosts = await posts.sortByFollowing();
  if (followingPosts.length) {
    templates.renderPostTemplates(followingPosts, container);
  } else {
    container.innerHTML = "You're not following anyone";
  }
}
