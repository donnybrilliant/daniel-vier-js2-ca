import * as templates from "../templates/index.mjs";
import * as posts from "../api/posts/index.mjs";

const container = document.querySelector("#feed");

/**
 * Fetches posts in different order by making an API call
 * @param {string} createdOrTitle Only takes "created" or "title"
 * @param {string} ascOrDesc Only takes "asc" or "desc"
 */
export async function sort(createdOrTitle, ascOrDesc) {
  const sortedPosts = await posts.sort(createdOrTitle, ascOrDesc);
  templates.renderPostTemplates(sortedPosts, container);
}
/**
 * Filters posts so you only get posts by you are following in the feed
 */
export async function sortByFollowing() {
  const followingPosts = await posts.sortByFollowing();
  if (followingPosts.length) {
    templates.renderPostTemplates(followingPosts, container);
  } else {
    container.innerHTML = "You're not following anyone";
  }
}
