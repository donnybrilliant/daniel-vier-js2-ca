import * as templates from "../templates/index.mjs";
import * as posts from "../api/posts/index.mjs";
import * as listener from "../handlers/index.mjs";

/**
 * Sees if the feed has a searchparam of id and renders that post.
 * If not it renders all posts to feed
 */
export async function feed() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");
  const container = document.querySelector("#feed");
  if (id) {
    const post = await posts.read(id);
    templates.renderPostTemplate(post, container);
    listener.updatePostListener();
  } else {
    const allPosts = await posts.readAll();
    templates.renderPostTemplates(allPosts, container);
    listener.setSearchListener(allPosts);
  }
}
