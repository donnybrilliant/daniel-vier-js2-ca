import * as templates from "../templates/index.mjs";
import * as posts from "../api/posts/index.mjs";

const container = document.querySelector("#feed");

export async function sort(createdOrTitle, ascOrDesc) {
  const oldPosts = await posts.sort(createdOrTitle, ascOrDesc);
  templates.renderPostTemplates(oldPosts, container);
}
