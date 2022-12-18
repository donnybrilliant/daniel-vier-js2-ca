import * as templates from "../templates/index.mjs";
import * as posts from "../api/posts/index.mjs";
import * as listener from "../handlers/index.mjs";

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
  }
}
